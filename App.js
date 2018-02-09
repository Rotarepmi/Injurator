import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import { Header, VictimsList, RandButton } from './src/components';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Injurator'
    }
  }

  render() {
    return (
      <View style={container}>
        <Header title={this.state.title} />
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
