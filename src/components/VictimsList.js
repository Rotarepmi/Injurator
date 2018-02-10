import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

class VictimsList extends Component {
  render() {
    return (
      <View>

          {this.props.injuries.map((item, index) => {
            <Text key={item.key}>
              {item.injury}
            </Text>
          })}

      </View>
    );
  }
}

export default VictimsList;
