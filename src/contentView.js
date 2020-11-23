import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { WebView } from 'react-native-webview';
import ViewShot, { captureScreen, RNViewShot } from 'react-native-view-shot';

export default class ContentView extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  render() {
    return (
      <ScrollView style={styles.MainContainer}>
        <ViewShot ref="ViewShot" options={{ format: "jpg", quality: 0.9 }}>
          <View style={{ height: 600, width: 350 }}>
            <WebView source={{ uri: 'https://surveysparrow.com/' }} />
          </View>
        </ViewShot>
        <TouchableOpacity style={styles.touchableStyle}
          onPress={() => {
            this.refs.ViewShot.capture().then(uri => {
              alert(uri);
              this.setState({ uri });
              console.log("The screenshot of the file ", uri);
            }
            );
          }}
        >
          <Text style={styles.textStyle}>Take a screenshot</Text>
        </TouchableOpacity>
        <View style={styles.viewStyle}>
          <Text style={styles.textStyle}>The Screenshot is:</Text>
          {this.state.uri &&
            <Image style={{ height: 600, width: 350 }}
              source={{ uri: this.state.uri }} />
          }
        </View>

      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
  touchableStyle: {
    backgroundColor: 'red',
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginLeft: 15,
    marginTop: 30,
  },
  textStyle: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold'
  },
  textStyle1: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',

  },
  viewStyle: {
    marginLeft: 20,
    marginTop: 20
  }
});