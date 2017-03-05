import React, { Component } from 'react';
import { View, Text} from 'react-native';
import KnowStory from '../containers/KnowStory';

class Home extends Component {
  render() {
  return (

    <KnowStory />

    )
  }
}

const styles = {
  textStyle: {
    backgroundColor: '#FF0000',
    height: 600,
    marginTop: 100
  }
}

export default Home
