import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

class VictimsList extends Component {
  render() {
    return (
      <View>
        <Text>
          {this.props.item.title}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

const { } = styles;

export default VictimsList;
