import React from 'react'
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'


export default class Main extends React.Component {
    constructor(props) {
        super(props);
        
    }

    __navigate_to = (screen, data) => {
        this.props.navigate(screen, data)
    }
    
    render() { 
        const item = this.props.item
        // console.log(item)
        return ( 
            <TouchableOpacity 
                onPress={ () => {this.__navigate_to('Message', item)}}
                activeOpacity={.7} style={styles.container}>
                <View style={styles.iconContainer}>
                    <Ionicons name='person' color='white' size={25}/>
                </View>
                <View style={styles.textContainer}>
                    <Text>{item.user} </Text>
                    <Text style={styles.text}>last message..</Text>
                    <Text style={styles.text}>24/06/21</Text>
                </View>
            </TouchableOpacity>
         );
    }
}
 


const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        paddingHorizontal:10,
        marginBottom:20
     
    },
    iconContainer:{
        padding:10,
        backgroundColor:'gray',
        borderRadius:60,
        width:60,
        height:60,
        justifyContent:'center',
        alignItems:'center',
    },
    textContainer:{
        flexDirection:'column',
        // backgroundColor:'red',
        paddingHorizontal:5,
        flex:1
     
        
    },
    text:{
        color:'gray',

    }
})