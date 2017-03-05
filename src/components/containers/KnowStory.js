import React, { Component } from 'react'
import { View, Text, Image, NavigatorIOS } from 'react-native'

class KnowStory extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Image source={pic} style={{width: 193, height: 110}}/>
    );
  }
}

export default KnowStory
