import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

class RandButton extends Component {
  render() {
    return (
      <View style={randButton}>
        <TouchableHighlight
          underlayColor={actionColor}
          onPress={this.props.onPress}
        >
          <Text style={actionText}>
            Losuj
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  randButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#42c2f4',
    padding: 15
  },
  actionCollor: {
    backgroundColor: '#42c2f4'
  },
  actionText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  }
});

const { randButton, actionColor, actionText } = styles;

export default RandButton;
