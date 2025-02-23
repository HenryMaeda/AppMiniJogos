import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default function AdvinhacaoHistorico({ dadosGlobais }) {
  const history = dadosGlobais?.advinhacaoHistory || [];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Histórico de Adivinhação</Text>
      {history.length === 0 ? (
        <Text style={styles.info}>Nenhuma partida registrada ainda.</Text>
      ) : (
        <FlatList
          data={history}
          keyExtractor={(_, index) => String(index)}
          renderItem={({ item, index }) => (
            <View style={styles.item}>
              <Text style={styles.itemText}>
                Partida {index + 1}:
              </Text>
              <Text style={styles.itemText}>
                Número sorteado: {item.numero}
              </Text>
              <Text style={styles.itemText}>
                Tentativas: {item.tentativas}
              </Text>
              <Text style={styles.itemText}>
                Data/Hora: {item.data}
              </Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5DC', 
    padding: 16,
  },
  title: {
    fontSize: 22,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  info: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
  item: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 10,
    marginVertical: 5,
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
});
