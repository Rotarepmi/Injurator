import React, { Component } from 'react';
import { Platform, Text, View, StatusBar } from 'react-native';
import styles from './styles.js';

export default class Toolbar extends Component {
  render() {
    return (
      <View>
        <StatusBar
          backgroundColor="coral"
          barStyle="light-content"
        />
        <View style={styles.navbar}>
          <Text style={styles.navbarTitle}>
            {this.props.title}
          </Text>
        </View>
      </View>
    );
  }
}
