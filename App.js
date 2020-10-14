
import React from 'react';

import AuthNavigator from './navigations/Authentification'
import Main from './screens/Main'
import SignIn from './screens/authentification/SignIn'
import SignUp from './screens/authentification/SignUp'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <AuthNavigator/>
     );
  }
}
 
export default App;
