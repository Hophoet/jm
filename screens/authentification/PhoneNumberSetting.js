import React from 'react'
import {View, Text, TouchableOpacity, ActivityIndicator, StyleSheet, Button, TextInput} from 'react-native'
// import fi
import auth from '@react-native-firebase/auth';

export default class PhoneNumberSetting extends React.Component{

    constructor(props){
        super(props)
        this.phoneNumber = ''
        this.state = {
            isLoading:false,
            confirmation:null
        }
    }

      signInWithPhoneNumber = async (phoneNumber='+1 650-555-3434') => {
        const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
        this.setState({confirmation})
        console.log('Confirmation', confirmation)
      }

    _showPhoneNumberSettingLoading = () =>{
        if(this.state.isLoading){
            return (        
                <View style={styles.phoneNumberSettingIndicatorContainer}>
                    
                    <ActivityIndicator size='large' color={'gray'}/>  
                
                </View>          
                )
        }
    }
    sendPhoneNumber = () => {
        this.setState({isLoading:true})

        let phoneNumber = this.phoneNumber 
        let object = {phoneNumber}
        //TODO: setting the phone number
    

        // this.props.navigation.navigate('PhoneNumberConfirmation', object)
    }

    render(){
        return (
            <View style={styles.mainContainer}>
                <View style={styles.textInputContainer}>
                    {this._showPhoneNumberSettingLoading()}
                    <TextInput 
                        style={styles.textInput} 
                        placeholder="Enter your phone number"
                        onChangeText={(number) => {this.phoneNumber = number}}
                        keyboardType='phone-pad'
                        onSubmmitEditing={()=> {this.props.sendPhoneNumber()}}
                        
                        />
                    <Button 
                        title='send' 
                        onPress={this.signInWithPhoneNumber}
                        
                        />
                </View>
                
               
            </View>

        )
    }
}

const styles = StyleSheet.create({
    mainContainer:{
        flex:1, 
    
    },
    textInputContainer:{
        // backgroundColor:'gray',
        flex:1,
        justifyContent:'center',
        paddingHorizontal:10
    },
    phoneNumberSettingIndicatorContainer:{
        justifyContent:'center',
        alignItems:'center',
        elevation:10,
        backgroundColor:'white',
        alignSelf:'center',
        borderRadius:60
    }
})