import React, { Component } from 'react'
import { View, Image } from 'react-native'

import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View } from 'react-native';

class TellStory extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Tell Your Story"
          onChangeText={(text) => this.setState({text})}
        />
      </View>
    );
  }
}
