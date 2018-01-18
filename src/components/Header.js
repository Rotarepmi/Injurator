import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={headerContainer}>
      <Text style={headerText}>
        Injurator
      </Text>
    </View>
  );
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
