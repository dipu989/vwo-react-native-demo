import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';


class AView extends React.Component {
  render() {
    return (
      <View style={{flexDirection: 'row', paddingVertical: '2%',paddingHorizontal: '5%', borderWidth: 1}}>
        <Image
         style={{width: 50, height: 100, marginRight: '5%'}}
         source={require('./images/iPhone.png')}
        />
        <View style={{paddingTop: '5%'}}>
          <Text>{this.props.name}</Text>
          <Text style={{'color' : 'grey', fontSize: 10}}>by {this.props.brand}</Text>
          <Text style={{'color' : '#BC1C1C', marginTop: 10, fontSize: 18}}>${this.props.price}</Text>
        </View>
      </View>
    );
  }
}

export default class App extends React.Component {
  onPressLearnMore() {
    console.log("Here")
  }
  render() {
    return (
      <View style={styles.container}>
        <AView name = "iPhone 16 GB" brand="Apple" price="1000"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
