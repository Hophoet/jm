import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet, Button, TextInput, ActivityIndicator} from 'react-native'


export default class PhoneNumberSetting extends React.Component{

    constructor(props){
        super(props)
        this.phoneNumber = ''
        this.state = {
            isLoading:false,
        }
    }

    _showPhoneNumberConfirmationLoading = () =>{
        if(this.state.isLoading){
            return (        
                <View style={styles.phoneNumberConfirmationIndicatorContainer}>
                    
                    <ActivityIndicator size='large' color={'gray'}/>  
                
                </View>          
                )
        }
    }
    sendPhoneNumberConfirmationCode = () => {
        this.setState({isLoading:true})

        let phoneNumber = this.phoneNumber 
        let object = {phoneNumber}
        //TODO: setting the phone number
        setTimeout(() => {
            this.setState({isLoading:false})
            this.props.navigation.navigate('PhoneNumberConfirmation', object)
        }, 5000)

        // this.props.navigation.navigate('PhoneNumberConfirmation', object)
    }
    render(){
        return (
            <View style={styles.mainContainer}>
                   <View style={styles.textInputContainer}>
                    {this._showPhoneNumberConfirmationLoading()}
                    <TextInput 
                        style={styles.textInput} 
                        placeholder="Enter your confirmation code"
                        onChangeText={(number) => {this.phoneNumber = number}}
                        keyboardType='phone-pad'
                        onSubmmitEditing={()=> {this.props.sendPhoneNumberConfirmationCode()}}
                        
                        />
                    <Button 
                        title='Confirm' 
                        onPress={this.sendPhoneNumberConfirmationCode}
                        
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
    phoneNumberConfirmationIndicatorContainer:{
        justifyContent:'center',
        alignItems:'center',
        elevation:10,
        backgroundColor:'white',
        alignSelf:'center',
        borderRadius:60
    }
})