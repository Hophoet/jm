import React from 'react'
import {View, Text, StyleSheet, Dimensions} from 'react-native'
 import Ionicons from 'react-native-vector-icons/Ionicons'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <View style={styles.container}>
                
                <Ionicons  name='md-list-outline' color='white' size={30}/>
                <View style={styles.secondContainer}>
                    <Text style={styles.title}>JM</Text>
                </View>
            </View>
         );
    }
}
 
export default Header;

const styles = StyleSheet.create({
    container:{
        backgroundColor:'gray',
        flexDirection:'row',
        paddingHorizontal:Dimensions.get('window').width/20,
        alignItems:'center',
    },
    secondContainer:{
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:Dimensions.get('window').width/40,
    },
    title:{
        fontWeight:'bold'
    }
})