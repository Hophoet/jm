import React from 'react'
import {View, Text, Button} from 'react-native'
 import Ionicons from 'react-native-vector-icons/Ionicons'
class Screen2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <View>
                <Text>Screen 1</Text>
                <Button 
                    title="Navigate"
                    onPress={ () => {
                        // this.props.navigation.openDrawer()
                    }}
                    />
                    <Ionicons  name='md-person' color='red' size={50}/>
            </View>
         );
    }
}
 
export default Screen2;