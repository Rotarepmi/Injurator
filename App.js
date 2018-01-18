import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import { Header, VictimsList, RandButton } from './src/components';

export default class App extends Component {
  render() {
    return (
      <View style={container}>
        <Header />
        <VictimsList />
        <RandButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  }
});

const { container } = styles;
