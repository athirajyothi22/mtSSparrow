import React, { Component } from 'react';
import { Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Container, View, Toast, Content, Button } from 'native-base';
import { SearchBar } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
export default class CustomHeader extends Component {
  state = {
    search: '',
    showToast: false
  };

  updateSearch = (search) => {
    this.setState({ search });
  };
  render() {
    const { search } = this.state;
    return (
      <Container>
        <View style={{ height: 100, backgroundColor: '#24b4ed' }}>
          <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', backgroundColor: '#24b4ed' }}>
            <Text style={{ color: 'white', fontSize: 17, marginLeft: 15 }}>Search Results</Text>
            <Image style={{ height: 50, width: 50 }}
              source={require('../../assets/dots.png')} />
          </View>

          <SearchBar
            searchIcon={false}
            containerStyle={{ backgroundColor: '#24b4ed' }}
            inputContainerStyle={{ backgroundColor: 'white', height: 30, width: 340 }}
            placeholder="Ajman Dubai"
            inputStyle={{ color: 'black' }}
            lightTheme
            round
            onChangeText={this.updateSearch}
            value={search}
          />
        </View>
        <View style={styles.spaceStyle}>
          <ScrollView horizontal={true}
            showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.touchableStyle}>
              <Image style={{ height: 10, width: 20 }}
                source={require('../../assets/prepaid.png')} />
              <Text style={styles.textStyle3}>Pre Paid</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableStyle1}>
              <Image style={{ height: 10, width: 20 }}
                source={require('../../assets/postpaid.png')}
                tintColor='#eda72d' />
              <Text style={styles.textStyle1}>Post Paid</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableStyle2}>
              <Image style={{ height: 13, width: 15 }}
                source={require('../../assets/broadband.png')}/>
              <Text style={styles.textStyle2}>Broad Band</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <View style={{flex:1,marginLeft:15,height:40}}>
        <Text style={styles.textStyle4}>Operators</Text>        
        <View style={styles.spaceStyle1}>
          <ScrollView horizontal={true}
            showsHorizontalScrollIndicator={false}>
              <TouchableOpacity style={styles.imageCard}>
              <Image style={styles.ImageStyle}
                source={require('../../assets/operator.png')}/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.imageCard}>
              <Image style={styles.ImageStyle}
                source={require('../../assets/homeicon.png')}/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.imageCard}>
              <Image style={styles.ImageStyle}
                source={require('../../assets/virgin.png')}/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.imageCard}>
              <Image style={styles.ImageStyle}
                source={require('../../assets/operator2.png')}/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.imageCard}>
              <Image style={styles.ImageStyle}
                source={require('../../assets/virgin.png')}/>
              </TouchableOpacity>
          </ScrollView>
        </View>
        </View>  
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  touchableStyle: {
    backgroundColor: '#24b4ed',
    width: 120,
    height: 30,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 5,
    marginLeft: 20
  },
  ImageStyle:{
     height: 60, 
     width: 60,
     borderRadius:5,
     borderWidth:1,
     borderColor:'#dadce8',
     elevation: 2,
     },
  touchableStyle1: {
    backgroundColor: 'white',
    borderColor: 'grey',
    borderWidth: 0.1,
    width: 120,
    height: 30,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 1,
    marginLeft: 20
  },
  touchableStyle2: {
    backgroundColor: 'white',
    borderColor: 'grey',
    borderWidth: 0.1,
    width: 120,
    height: 30,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 1,
    marginLeft: 20
  },
  imageCard:{
    height:80,
    width:80,
  },
  spaceStyle: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  spaceStyle1: {
    marginTop:10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  textStyle4: {
    color: "black",
    fontSize: 14,
    fontWeight:'bold'   
},
  textStyle3: {
    color: 'white',
    fontWeight: 'bold'
  },
  textStyle1: {
    color: '#eda72d',
    fontWeight: 'bold'
  },
  textStyle2: {
    color: '#1029e8',
    fontWeight: 'bold'
  },

});