import React from 'react'
import {View, Text, Button} from 'react-native'
class Screen2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <View>
                <Text>Screen 2</Text>
                <Button 
                    title="Navigate"
                    onPress={ () => {
                        this.props.navigation.navigate('Screen1')
                    }}
                    />
            </View>
         );
    }
}
 
export default Screen2;