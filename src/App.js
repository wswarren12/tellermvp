import React, { Component } from 'react'
import { View, Text, NavigatorIOS } from 'react-native'
import {Home} from './components/layout'

class App extends Component {

  render(){
    const initialRoute = {
      component: Home,
      title: "Home"
    }
    return(
      <NavigatorIOS style={styles.container} initialRoute={initialRoute}/>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FF0000'
  }
}

export default App
