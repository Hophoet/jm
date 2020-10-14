import React from 'react'
import {StyleSheet, StatusBar, Dimensions, View, Text, ActivityIndicator, TextInput, TouchableOpacity} from 'react-native'
// import {Entypo, Ionicons} from '@expo/vector-icons'
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
        this.email = ''
    }

    //signup method
    _signUp = () => {
        //check request loading

        console.log('NAVIGATE')
        this.props.navigation.navigate('SignIn')
        if(!this.state.isLoading){     
            //start the loading
            this.setState({isLoading:true})
            //get fields values
            let username = this.username.trim()
            let email = this.email.trim()
            let password = this.password


            //check the requirements of the fiels
            if(username.length === 0 && password.length === 0 && email.length === 0){
                Toast._show_bottom_toast('username, email and password are required')
                this.setState({isLoading:false})
            }
            //username empty case
            else if(username.length === 0){
                Toast._show_bottom_toast('username field is required')
                this.setState({isLoading:false})
            }
            //email empty case
            else if(email.length === 0){
                Toast._show_bottom_toast('email field is required')
                this.setState({isLoading:false})
            }
            //password empty case
            else if(password.length === 0){
                Toast._show_bottom_toast('password field is required')
                this.setState({isLoading:false})
            }
            //username and password provided case
            else{
                
                let registrationDone = false
                //build POST request with the username and password providede
                var myHeaders = new Headers();
                var formdata = new FormData();
                formdata.append("username", username);
                // formdata.append("email", email);
                formdata.append("password1", password);
                formdata.append("password2", password);

                var requestOptions = {
                method: 'POST',
                body: formdata,
                redirect: 'follow'
                };
                fetch("https://hophoetapis.herokuapp.com/rest-auth/registration/", requestOptions)
                .then(result => {
                    //successfull request response case
                    //invalid response 
                    if(result.status === 400){
                        console.log('error 400')
                        Toast._show_bottom_toast('Bad request')
                        return result.json()

                    }
                    //valid response
                    else if (result.status === 201){
                        registrationDone = true
                        //navigate to the Main screen of the App
                        Toast._show_bottom_toast('registration successfully')
                        return result.json()
                    }
                    else{
                        Toast._show_bottom_toast('status'+result.status)
                       
                    }
                    //stop the loading
                    this.setState({isLoading:false})
                    
                })
                .then(response => {
                    //registration done case
                    if(registrationDone){
                        let token = response.key
                        this.props.navigation.navigate('Splash', { 'token': token })
                    }
                      //get of the login token
                     //stop the loading
                     this.setState({isLoading:false})
  
                })
                .catch(error => {
                    //failed request case
                    //stop the loading
                    this.setState({isLoading:false})
                    Toast._show_bottom_toast('Network request failed')
                    console.log(error)
                     //stop the loading
                     this.setState({isLoading:false})
                });
            }
        }
    }
     //loading activity render
     _loader = () => {
        if(this.state.isLoading){
            return (
                <View style={styles.signUpLoadingIndicatorContainer}>
                    <ActivityIndicator size='large' color={colors.core}/>
                </View>
            )
        }
        return (
            <View style={styles.signUpTitleContainer}>
                <Text>JM</Text>
                <Text>Signup to continue</Text>
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
                            this.refs.email.focus()
                
                        }}
                    />
                     <TextInput
                        placeholder='Enter your email'
                        ref='email'
                        style={styles.textinput}
                        keyboardType='email-address'
                        onChangeText={text=>{this.email = text}}
                        onSubmitEditing={() => this.refs.password.focus()}

                    />
                      <TextInput
                        placeholder='Enter your password'
                        ref='password'
                        style={styles.textinput}
                        secureTextEntry={true}
                        onChangeText={text=>{this.password = text}}
                        onSubmitEditing={() => {
                            if(!this.state.isLoading){
                                this._signUp
                            }
                        }
                        }

                    />
                </View>
                <TouchableOpacity 
                    style={styles.buttonContainer} 
                    onPress={this._signUp}
                    disabled={(this.state.isLoading)?true:false}
                    >
                    <Text style={styles.buttonText}>SIGN UP</Text>
                </TouchableOpacity>
                <View style={styles.footer}>
                    <Text onPress={()=> this.props.navigation.navigate('SignIn')} style={styles.footerTitle}>Alraidy have an account ? <Text style={styles.signinText}>sign in</Text></Text>
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
    circle:{
        backgroundColor:colors.core,
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').width,
        position:'absolute',
        borderRadius:Dimensions.get('window').width,
        opacity:1,
        left:-Dimensions.get('window').width/1.5
    },
    signinText:{
        color:colors.core,
        fontWeight:'bold',
    },
    signUpTitleContainer:{
        justifyContent:'center',
        alignItems:'center',
    },
    signUpLoadingIndicatorContainer:{
        elevation:10,
        backgroundColor:'white',
        borderRadius:60
    }
})