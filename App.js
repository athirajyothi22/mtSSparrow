import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ContentView from './src/contentView';
 
export default class App extends Component {
  render() {
    return (
      <View style={{flex:1,justifyContent:'center'}}>
        <ContentView/>
      </View>
    );
  }
}