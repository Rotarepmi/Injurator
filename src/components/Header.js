import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Header extends Component {
  render() {
    return (
      <View style={headerContainer}>
        <Text style={headerText}>
          {this.props.title}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#33ccff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  headerText: {
    color: '#fff',
    fontWeight: "bold",
    fontSize: 25
  }
});

const { headerContainer, headerText } = styles;

export default Header;
