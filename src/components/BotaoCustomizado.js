import React from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';

const BotaoCustomizado = ({ onPress, title }) => (
  <TouchableHighlight
    style={styles.button}
    onPress={onPress}
    underlayColor="#a16cf4" 
  >
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#6C63FF', 
    padding: 12,
    marginVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    width: '70%', 
    elevation: 2,  
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default BotaoCustomizado;
