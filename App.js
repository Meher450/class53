import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

export class RedButton extends Component {
  render() {
    return <Button title="Hello" color="red"></Button>;
  }
}
export default class App extends Component {
  render() {
    return (
      <View style={{ marginTop: 200 }}>
        <RedButton />
        <Text style={{ marginTop: 50 }}> Meher </Text>
      </View>
    );
  }
}
