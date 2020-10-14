import React from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'
//components
import Header from '../components/discusion/Header'
import Item from '../components/discusion/Item'

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            discusions: require('../data/discusions.json')
         }
    }
    render() { 
        // console.log('data', this.state.discusions)
        return ( 
            <View style={styles.container}>
                <Header/>
                <View>
                    <Text>Discusions</Text>
                    <FlatList
                        data={this.state.discusions}
                        keyExtractor={(item) => item.id}
                        renderItem={({index, item}) => <Item item={item}/>}
                        />
                </View>
                
            </View>
         );
    }
}
 


const styles = StyleSheet.create({
    container:{
        flex:1,
     
    }
})