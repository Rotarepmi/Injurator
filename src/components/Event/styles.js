import { StyleSheet } from 'react-native';

const constants = {
  actionColor: '#3cb371'
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderColor: '#eee',
    borderWidth: 1,
  },

  list: {
    backgroundColor: '#fff',
    paddingLeft: 16,
    paddingTop: 7
  },

  bold: {
    color: '#333',
    fontSize: 16
  }
});

export default styles;
