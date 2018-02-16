import React, { Component } from 'react';
import { Text, View, ListView } from 'react-native';
import firebaseApp from '../../utils/firebase';
import styles from './styles';

export default class Event extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2', 'row 3', 'row 4'])
    }

    this.eventRef = firebaseApp.database().ref().child('event');
  }

  componentWillMount() {
    this.eventRef.on('value', snap => {
      let events = [];

      snap.forEach(child => {
        events.push({
          name: child.val().name,
          _key: child.key
        });
      });

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(events)
      });
    });
  }

  renderRow(item) {
    return (
      <View style={styles.li}>
        <Text style={styles.liText}>
          {item.name}
        </Text>
      </View>
    )
  }

  render() {
    return (
      <View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
        />
      </View>
    );
  }

}
