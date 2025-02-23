import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TicTacToeDetails = ({ route, navigation, dadosGlobais }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes do Jogo da Velha</Text>
      <Text style={styles.info}>
        Aqui você pode exibir estatísticas, histórico, etc.
      </Text>
      {}
    </View>
  );
};

export default TicTacToeDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8DC',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#8B4513',
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    marginVertical: 5,
    color: '#333',
    textAlign: 'center',
  },
});
