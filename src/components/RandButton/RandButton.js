import React, { Component } from 'react';
import { Platform, Text, View, TouchableHighlight } from 'react-native';
import styles from './styles.js';

export default class RandButton extends Component {
  render() {
    return (
      <View>
        <TouchableHighlight
          style={styles.action}
          underlayColor='#24ce84'
          onPress={this.props.onPress}
        >
          <Text style={styles.actionText}>
            {this.props.title}
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}
