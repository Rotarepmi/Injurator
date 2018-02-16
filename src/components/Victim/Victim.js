import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

export default class Victim extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.list}>
          Wiek: <Text style={styles.bold}>{this.props.victim.age}</Text>
        </Text>
        <Text style={styles.list}>
          Świadomość: <Text style={styles.bold}>{this.props.victim.aware ? 'przytomny' : 'nieprzytomny'}</Text>
        </Text>
        <Text style={styles.list}>
          Oznaki życia: <Text style={styles.bold}>{this.props.victim.live ? 'oddycha' : 'nie oddycha'}</Text>
        </Text>
        <Text style={styles.list}>
          Obrażenia: <Text style={styles.bold}>{this.props.victim.injury}</Text>
        </Text>
      </View>
    );
  }
}
