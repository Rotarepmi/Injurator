import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

export default class Event extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.list}>
          Zdarzenie: <Text style={styles.bold}>{this.props.event.name}</Text>
        </Text>
        <Text style={styles.list}>
          Miejsce zdarzenia: <Text style={styles.bold}>{this.props.event.place}</Text>
        </Text>
        <Text style={styles.list}>
          Czas zdarzenia: <Text style={styles.bold}>{this.props.event.time}</Text>
        </Text>
        <Text style={styles.list}>
          Liczba poszkodowanych: <Text style={styles.bold}>{this.props.event.victims}</Text>
        </Text>
      </View>
    );
  }
}
