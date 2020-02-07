import React from 'react'
import {View, Text, StyleSheet, Dimensions} from 'react-native'

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    _getMainContainerCustomStyle = (isSender) => {
        let style
        if(isSender){
            style = {
                alignItems:'flex-end',
                alignSelf:'flex-end',
            }
            return style
        }
        style = {
            alignItems:'flex-start',
            alignSelf:'flex-start',
          
        }
        return style
    }

    _getTextContainerCustomStyle = (isSender) => {
        let style
        if(isSender){
            style = {
                borderTopRightRadius:0
            }
            return style
        }
        style = {
            borderTopLeftRadius:0
        }
        return style
    }
    render() { 
        let item = this.props.item
        let userId = this.props.userId
        let isSender = item.sender_id === userId
        
        return ( 
            <View style={[styles.mainContainer, {...this._getMainContainerCustomStyle(isSender)}]}>
                <View>
                    <Text style={styles.moment}>Oct 17, 2021 13:14</Text>
                </View>
                <View style={[styles.textContainer, {...this._getTextContainerCustomStyle(isSender)}]}>
                    <Text>{item.content}</Text>
                </View>
                  
            </View>
         );
    }
}
 


const styles = StyleSheet.create({
    mainContainer:{
        width:Dimensions.get('window').width/2,
        // backgroundColor:'red',
    },
    textContainer:{
        flex:1,
        justifyContent:'center',
        borderRadius:10,
       
        marginBottom:20,
        padding:10,
        backgroundColor:'#00000011',
        
    },
    moment:{
        fontSize:12,
        color:'gray',
        opacity:.7
    }
})