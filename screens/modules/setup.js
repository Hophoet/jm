import firebase from '@react-native-firebase/app'
import auth from 'react-native-firebase/auth'

const firebaseConfig = {

}


if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export default () => {
    return {firebase, auth}
}