import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ListView } from 'react-native';
import styles from './styles';
import Toolbar from './Toolbar/Toolbar';
import RandButton from './RandButton/RandButton';
import Event from './Event/Event';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Injurator'
    }
  }

  randomize() {

  }

  render() {
    return (
      <View style={styles.container}>
        <Toolbar
          title={this.state.title}
        />
        <Event />
        <RandButton
          onPress={this.randomize.bind(this)}
          title="Generuj zdarzenie"
        />
      </View>
    );
  }
}
