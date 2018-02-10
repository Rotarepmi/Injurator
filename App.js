import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ListView } from 'react-native';
import { Header, VictimsList, RandButton } from './src/components';
import { firebaseApp } from './src/utils/firebase';

export default class App extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      title: 'Injurator',
      dataSource: ds.cloneWithRows(['row 1', 'row 2', 'row 3', 'row 4'])
    }

    this.injuryRef = firebaseApp.database().ref().child('injury');
  }

  componentDidMount() {
    this.injuryRef.on('value', snap => {
      let injuries = [];
      snap.forEach(item => {
        injuries.push({
          injury: item.val().name,
          key: item.key
        });
      });

      this.setState({
        title: 'COmponent mOunted',
        dataSource: this.state.dataSource.cloneWithRows(injuries)
      });
    });

  }

  render() {
    return (
      <View style={container}>
        <Header title={this.state.title} />
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
        <RandButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  }
});

const { container } = styles;
