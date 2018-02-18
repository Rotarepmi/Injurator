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
          Świadomość: <Text style={styles.bold}>{this.props.victim.aware ? 'osoba przytomna' : 'osoba nieprzytomna'}</Text>
        </Text>
        <Text style={styles.list}>
          Oznaki życia: <Text style={styles.bold}>{this.props.victim.livesigns}</Text>
        </Text>
        <Text style={styles.list}>
          Znane obrażenia: <Text style={styles.bold}>{this.props.victim.injury}</Text>
        </Text>
      </View>
    );
  }
}
