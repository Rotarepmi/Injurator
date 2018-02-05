import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux'
import { injuryRef, placeRef } from './../utils/firebase';
import { GetRandom } from './../actions/GetRandom';

class VictimsList extends Component {
  render() {
    return (
      <View>
        <Text>
          {this.props.title}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

const { } = styles;

export default VictimsList;
