import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ListView } from 'react-native';
import firebaseApp from '../utils/firebase';
import styles from './styles';
import Toolbar from './Toolbar/Toolbar';
import RandButton from './RandButton/RandButton';
import Event from './Event/Event';
import Victim from './Victim/Victim';

export default class App extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      title: 'Injurator',
      events: [],
      places: [],
      injuries: [],
      throwEvent: {},
      throwVictims: ds
    }

    this.eventRef = this.getRef().child('event');
    this.placeRef = this.getRef().child('place');
    this.injuryRef = this.getRef().child('injury');
  }

  getRef() {
    return firebaseApp.database().ref();
  }

  getFromRef(ref, stateName) {
    ref.on('value', snap => {
      let items = [];

      snap.forEach(child => {
        items.push({
          name: child.val().name,
          _key: child.key
        });
      });

      this.setState({
        [stateName]: items
      });
    });
  }

  componentDidMount() {
    this.getFromRef(this.eventRef, 'events');
    this.getFromRef(this.placeRef, 'places');
    this.getFromRef(this.injuryRef, 'injuries');
  }

  randomize() {
    function random(min,max) {
      return Math.floor(Math.random()*(max-min+1)+min);
    }

    function randomVictim(injuries) {
      const rInjury = random(0, injuries.length-1);
      const rAge = random(0, 100);
      const rAware = random(0, 1);
      const rLive = random(0, 1);

      return {
        injury: injuries[rInjury].name,
        age: rAge,
        aware: rAware,
        live: rLive
      };
    }

    const rEvent = random(0, this.state.events.length-1);
    const rPlace = random(0, this.state.places.length-1);
    const rSec = random(0, 86400);
    const myDate = new Date(1000 * rSec).toISOString().substr(11, 8).replace(/^[0:]+/, "");
    const rVict = random(1, 6);

    let victims = [];
    for(let i=0; i<rVict; i++) {
      victims.push(randomVictim(this.state.injuries));
    }

    this.setState({
      throwEvent: {
        name: this.state.events[rEvent].name,
        place: this.state.places[rPlace].name,
        time: myDate,
        victims: rVict
      },
      throwVictims: this.state.throwVictims.cloneWithRows(victims)
    });
  }

  renderVictims(victim) {
    return (
      <Victim
        victim={victim}
      />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Toolbar
          title={this.state.title}
        />
        <Event
          event={this.state.throwEvent}
        />
        <ListView
          dataSource={this.state.throwVictims}
          renderRow={this.renderVictims}
        />
        <RandButton
          onPress={this.randomize.bind(this)}
          title="Generuj zdarzenie"
        />
      </View>
    );
  }
}
