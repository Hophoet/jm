import React from 'react'
import {StyleSheet, StatusBar, View, Text, ActivityIndicator, TextInput, TouchableOpacity, Dimensions} from 'react-native'
// import {Entypo, Ionicons} from '@expo/vector-icons/'
import Toast from '../../components/toasts'
//colors
import {colors} from '../../assets/colors/colors'
export default class  Login extends React.Component{ 
    constructor(props){
        super(props)
        //set state
        this.state = {
            isLoading:false,
       
        }
        //set username and password 
        this.username = ''
        this.password = ''
    }

    //login method
    _login = () => {
        console.log('LOGIN')
        this.props.navigation.navigate('Main')
        //check request loading
        if(!this.state.isLoading){     
            //start the loading
            this.setState({isLoading:true})
            //get fields values
            let username = this.username.trim()
            let password = this.password
            //check the requirements of the fiels
            if(username.length === 0 && password.length === 0){
                Toast._show_bottom_toast('username and password are required')
                this.setState({isLoading:false})
            }
            //username empty case
            else if(username.length === 0){
                Toast._show_bottom_toast('username field is required')
                this.setState({isLoading:false})
            }
            //password empty case
            else if(password.length === 0){
                Toast._show_bottom_toast('password field is required')
                this.setState({isLoading:false})
            }
            //username and password provided case
            else{
                //build POST request with the username and password providede
                var myHeaders = new Headers();
                var formdata = new FormData();
                formdata.append("username", username);
                formdata.append("password ", password);

                var requestOptions = {
                method: 'POST',
                body: formdata,
                redirect: 'follow'
                };
                fetch("https://hophoetapis.herokuapp.com/rest-auth/login/", requestOptions)
                .then(result => {   
                    //successfull request response case
                    //invalid response 
                    if(result.status == 400){
                        console.log('error')
                        Toast._show_bottom_toast('Bad request')

                    }
                    //valid response
                    else if (result.status === 200){
                        //navigate to the Main screen of the App
                        //this.props.navigation.navigate('App')
                        Toast._show_bottom_toast('Login successfully')
                        return result.json()

                    }
                    //stop the loading
                    this.setState({isLoading:false})
                    
                })
                .then(response => {
                    //get of the login token
                    let token = response.key
                    // console.log(token)
                    this.props.navigation.navigate('Splash', {'token':token})

                })
                .catch(error => {
                    //failed request case
                    //stop the loading
                    this.setState({isLoading:false})
                    Toast._show_bottom_toast('Network request failed')
                });
            }
        }
    }
    //loading activity render
    _loader = () => {
        if(this.state.isLoading){
            return (
                <View style={styles.loginLoadingIndicatorContainer}>
                    <ActivityIndicator size='large' color={colors.core}/>
                </View>
            )
        }
        return (
            <View style={styles.loginTitleContainer}>
                <Text>JM</Text>
                <Text>Login to continue</Text>
            </View>
        )
    }

    //components rending method
    render(){
        return(
            <View style={styles.container}>
                <StatusBar backgroundColor={colors.core}/>
                <View style={styles.circle}/>
                <View style={styles.headerContainer}>

                    {this._loader()}
                </View>
                <View style={styles.formContainer}>
                    <TextInput
                        placeholder='Enter your username'
                        style={styles.textinput}
                        onChangeText={text=>{this.username = text}}
                        onSubmitEditing={()=>{
                            this.refs.password.focus()
                
                        }}
                    />
                     <TextInput
                        placeholder='Enter your password'
                        ref='password'
                        style={styles.textinput}
                        secureTextEntry={true}
                        onChangeText={text=>{this.password = text}}
                        onSubmitEditing={this._login}

                    />
                </View>
                <TouchableOpacity 
                    style={styles.buttonContainer} 
                    onPress={this._login}
                    disabled={(this.state.isLoading)?true:false}
                    >
                    <Text style={styles.buttonText}>SIGN IN</Text>
                </TouchableOpacity>
                <View style={styles.footer}>
                    <Text onPress={()=> this.props.navigation.navigate('SignUp')} style={styles.footerTitle}>Not have an account yet ?<Text style={styles.signupText} > sign up</Text></Text>
                </View>
            </View>
        )
    }
}

//set screen styles
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
     
    },
    buttonContainer:{
        backgroundColor:colors.core,
        padding:10,
        marginHorizontal:10,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:40,
        elevation:10,

    },
    buttonText:{
        color:'white',
        fontWeight:'bold',
    }
    ,
    title:{
        alignSelf:'center',
        margin:10
    },
    formContainer:{

    },
    textinput:{
     
        backgroundColor:'#ffff',
        marginHorizontal:10,
        padding:8,
        marginBottom:10,
        elevation:2,
        borderRadius:40,
        paddingHorizontal:20,
    },
    headerContainer:{
        alignItems:'center',
        marginBottom:20
    },
    footerTitle:{
        color:'gray',
        margin:20
    },
    signupText:{
        color:colors.core,
        fontWeight:'bold',
    },
    circle:{
        backgroundColor:colors.core,
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').width,
        position:'absolute',
        borderRadius:Dimensions.get('window').width,
        opacity:1,
        left:-Dimensions.get('window').width/1.5
    },
    loginTitleContainer:{
        justifyContent:'center',
        alignItems:'center',
    },
    loginLoadingIndicatorContainer:{
        elevation:10,
        backgroundColor:'white',
        borderRadius:60
    }
})