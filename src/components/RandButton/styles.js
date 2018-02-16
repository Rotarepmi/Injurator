import { StyleSheet } from 'react-native';

const constants = {
  actionColor: '#3cb371'
}

const styles = StyleSheet.create({
  actionText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center'
  },

  action: {
    backgroundColor: constants.actionColor,
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 16
  }
});

export default styles;
