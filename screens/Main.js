import React from 'react'
import {View, Text, StyleSheet, FlatList, ScrollView} from 'react-native'
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
                    <View style={styles.discusionsContainer}>
                        <FlatList
                            data={this.state.discusions}
                            keyExtractor={(item) => item.id}
                            renderItem={({index, item}) => <Item navigate={this.props.navigation.navigate} item={item}/>}
                            />
                    </View>
                    
                      
                
            </View>
         );
    }
}
 


const styles = StyleSheet.create({
    container:{
        flex:1,
     
    },
    discusionsContainer:{
        marginTop:20,
    }
})