import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const InputCustomizado = (props) => {
  return (
    <TextInput
      style={styles.input}
      placeholderTextColor="#888"
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginVertical: 10,
    borderRadius: 8,
    width: '80%',
    backgroundColor: '#fff',
    fontSize: 16,
  },
});

export default InputCustomizado;
