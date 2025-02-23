import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

// Ajuste o caminho para suas imagens
import pedraImg from '../../assets/pedra.png';
import papelImg from '../../assets/papel.png';
import tesouraImg from '../../assets/tesoura.png';

const images = {
  Pedra: pedraImg,
  Papel: papelImg,
  Tesoura: tesouraImg,
};

const options = ['Pedra', 'Papel', 'Tesoura'];

export default function PedraPapelTesoura({ dadosGlobais, setDadosGlobais }) {
  const [result, setResult] = useState('');
  const [botChoice, setBotChoice] = useState('');
  const [playerChoice, setPlayerChoice] = useState('');

  function play(playerMove) {
    const botMove = options[Math.floor(Math.random() * options.length)];
    setPlayerChoice(playerMove);
    setBotChoice(botMove);
    setResult(getResult(playerMove, botMove));
  }

  function getResult(player, bot) {
    if (player === bot) return 'Empate!';
    if (
      (player === 'Pedra' && bot === 'Tesoura') ||
      (player === 'Papel' && bot === 'Pedra') ||
      (player === 'Tesoura' && bot === 'Papel')
    ) {
      return 'Você Venceu!';
    }
    return 'Você Perdeu!';
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pedra, Papel ou Tesoura</Text>

      <View style={styles.optionsContainer}>
        {options.map((option) => (
          <TouchableOpacity
            key={option}
            onPress={() => play(option)}
            style={styles.optionButton}
          >
            <Image source={images[option]} style={styles.optionImage} />
          </TouchableOpacity>
        ))}
      </View>

      {result !== '' && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Você escolheu:</Text>
          <Image source={images[playerChoice]} style={styles.resultImage} />

          <Text style={styles.resultText}>Bot escolheu:</Text>
          <Image source={images[botChoice]} style={styles.resultImage} />

          <Text style={styles.resultText}>{result}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0FFE0', 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 20,
    color: '#008B8B', 
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 30,
  },
  optionButton: {
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginHorizontal: 5,
    elevation: 3,
  },
  optionImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  resultContainer: {
    alignItems: 'center',
  },
  resultText: {
    fontSize: 18,
    marginVertical: 5,
    color: '#333',
    fontWeight: '500',
  },
  resultImage: {
    width: 60,
    height: 60,
    marginBottom: 10,
    resizeMode: 'contain',
  },
});
