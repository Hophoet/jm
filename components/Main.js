import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <View style={styles.container}>
                <Text>MAIN</Text>
            </View>
         );
    }
}
 


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
})