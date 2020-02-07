import React from 'react'
import {View, Text, StyleSheet, Button, FlatList, Textinput, TouchableOpacity} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

//components
import Header from '../components/message/Header'
import MessageItem from '../components/message/MessageItem'
import { TextInput } from 'react-native-paper';
export default class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let item = this.props.navigation.state.params
        let userId = item.id
        let data = {username:item.user, phoneNumber:item.phoneNumber}
        // console.log(item)
        return ( 
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Header data={data} />
                </View>
                
                <View style={styles.messagesContainer}>
                   
                    <FlatList 
                        data={item.messages}
                        keyExtractor={(item) => item.id}
                        renderItem={({index, item}) => <MessageItem userId={userId} item={item}/>}
                        
                    />
                </View>
               <View style={styles.formContainer}>
                   <View style={styles.textInputContainer}>
                        <TextInput placeholder='type text message'/>
                   </View>
                   <View style={styles.iconContainer}>
                       <TouchableOpacity>
                            <Ionicons name='ios-send' size={30}/>
                       </TouchableOpacity>
                     
                   </View>

                   
               </View>

            </View>
         );
    }
}
 


const styles = StyleSheet.create({
    container:{
        flex:1,
   
    },
    headerContainer:{
        
    },
    messagesContainer:{
        // backgroundColor:'gray',
        flex:1,
        padding:10,
    },
    textInputContainer:{
        flex:1
    },  
    formContainer:{
        // backgroundColor:'red',
        padding:5,
        
        flexDirection:'row',
    },
    iconContainer:{
        padding:10,
        justifyContent:'center',
        alignItems:'center',
        
    }
})