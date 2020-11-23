import React from 'react';
import { Text, View,Image } from 'react-native';
import CustomHeader from './header/customHeader';

export default class HomeScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1 }}>
          <CustomHeader/>
        </View>
      );
    }
  }