import React from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'


export default class Main extends React.Component {
    constructor(props) {
        super(props);
        
    }
    
    render() { 
        const item = this.props.item
        // console.log(item)
        return ( 
            <View style={styles.container}>
                <View style={styles.iconContainer}>
                    <Ionicons name='person' size={25}/>
                
                </View>
                <Text style={styles.textContainer}>
                    <Text>{item.user} </Text>
                    <Text>last message..</Text>
                    <Text>24/06/21</Text>
                </Text>
            </View>
         );
    }
}
 


const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        paddingHorizontal:10,
        marginBottom:20
     
    },
    iconContainer:{
        padding:10,
        backgroundColor:'gray',
        borderRadius:60
    },
    textContainer:{
        flexDirection:'row',
        backgroundColor:'red',
    }
})