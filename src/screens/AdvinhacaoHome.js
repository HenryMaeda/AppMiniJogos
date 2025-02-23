import React, { useState } from 'react';
import { View, Text, StyleSheet, Keyboard } from 'react-native';
import InputCustomizado from '../components/InputCustomizado';
import BotaoCustomizado from '../components/BotaoCustomizado';

export default function AdvinhacaoHome({ navigation, dadosGlobais, setDadosGlobais }) {
  const [numeroSorteado, setNumeroSorteado] = useState(
    Math.floor(Math.random() * 1000) + 1
  );
  const [palpite, setPalpite] = useState('');
  const [tentativas, setTentativas] = useState(0);
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = () => {
    if (!palpite) {
      setMensagem('Por favor, insira um número.');
      return;
    }
    const guess = parseInt(palpite);
    if (isNaN(guess)) {
      setMensagem('Insira um valor numérico válido.');
      return;
    }

    setTentativas(tentativas + 1);

    if (guess === numeroSorteado) {
      setMensagem(`Parabéns! Você acertou em ${tentativas + 1} tentativas!`);
      // Salva no histórico global
      setDadosGlobais((prev) => {
        const novoRegistro = {
          numero: numeroSorteado,
          tentativas: tentativas + 1,
          data: new Date().toLocaleString(), 
        };
        return {
          ...prev,
          advinhacaoHistory: [...(prev.advinhacaoHistory || []), novoRegistro],
        };
      });
      Keyboard.dismiss();
    } else if (guess < numeroSorteado) {
      setMensagem('Tente um número maior.');
    } else {
      setMensagem('Tente um número menor.');
    }
    setPalpite('');
  };

  const resetGame = () => {
    setNumeroSorteado(Math.floor(Math.random() * 1000) + 1);
    setPalpite('');
    setMensagem('');
    setTentativas(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tente adivinhar o número (1 a 1000)</Text>

      <InputCustomizado
        placeholder="Seu palpite"
        keyboardType="numeric"
        value={palpite}
        onChangeText={setPalpite}
      />
      <BotaoCustomizado title="Enviar Palpite" onPress={handleSubmit} />

      {mensagem !== '' && <Text style={styles.message}>{mensagem}</Text>}

      <BotaoCustomizado title="Reiniciar Jogo" onPress={resetGame} />

      {/** Botão para ir ao Histórico */}
      <BotaoCustomizado
        title="Ver Histórico"
        onPress={() => navigation.navigate('Historico')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D8BFD8',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  message: {
    fontSize: 16,
    marginVertical: 10,
    color: '#333',
    textAlign: 'center',
  },
});
