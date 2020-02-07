import React from 'react'
import {View, Text, StyleSheet, Dimensions} from 'react-native'
 import Ionicons from 'react-native-vector-icons/Ionicons'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let data = this.props.data
        return ( 
            <View style={styles.container}>
                <Ionicons  name='md-list-outline' color='white' size={30}/>
                <View style={styles.secondContainer}>
                    <Text style={styles.name}>{data.username}</Text>
                    <Text style={styles.phoneNumber}>{data.phoneNumber}</Text>
                </View>
            </View>
         );
    }
}
 
export default Header;

const styles = StyleSheet.create({
    container:{
        // flex:1,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:20,
        backgroundColor:'gray',
        paddingVertical:10
        
    },
    secondContainer:{
        justifyContent:'center',
        alignItems:'flex-start',
        paddingHorizontal:Dimensions.get('window').width/40,
    },
    name:{
        fontWeight:'bold'
    }
})