import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, PanResponder } from 'react-native';
import BotaoCustomizado from '../components/BotaoCustomizado';

export default function TicTacToe({ dadosGlobais, setDadosGlobais }) {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState(null);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gesture) => Math.abs(gesture.dx) > 20,
      onPanResponderRelease: (_, gesture) => {
        if (gesture.dx > 100) {
          resetGame();
        }
      },
    })
  ).current;

  function handlePress(index) {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    if (checkWinner(newBoard)) {
      setWinner(currentPlayer);
    } else if (boardIsFull(newBoard)) {
      setWinner('Velha');
    } else {
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  }

  function checkWinner(b) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let [a, bI, c] of lines) {
      if (b[a] && b[a] === b[bI] && b[a] === b[c]) {
        return true;
      }
    }
    return false;
  }

  function boardIsFull(b) {
    return b.every((cell) => cell !== null);
  }

  function resetGame() {
    setBoard(Array(9).fill(null));
    setWinner(null);
    setCurrentPlayer('X');
  }

  return (
    <View style={styles.container} {...panResponder.panHandlers}>
      <Text style={styles.title}>Jogo da Velha</Text>
      {winner && (
        <Text style={styles.winner}>
          {winner === 'Velha' ? 'Deu velha!' : `Vencedor: ${winner}`}
        </Text>
      )}

      <View style={styles.boardContainer}>
        {/* Linhas horizontais */}
        <View style={[styles.line, styles.horizontalLine, { top: '33%' }]} />
        <View style={[styles.line, styles.horizontalLine, { top: '66%' }]} />

        {/* Linhas verticais */}
        <View style={[styles.line, styles.verticalLine, { left: '33%' }]} />
        <View style={[styles.line, styles.verticalLine, { left: '66%' }]} />

        {/* Células */}
        {board.map((cell, idx) => {
          const row = Math.floor(idx / 3);
          const col = idx % 3;
          const topPerc = `${(row * 100) / 3}%`;
          const leftPerc = `${(col * 100) / 3}%`;

          return (
            <TouchableOpacity
              key={idx}
              style={[styles.cell, { top: topPerc, left: leftPerc }]}
              onPress={() => handlePress(idx)}
            >
              <Text style={styles.cellText}>{cell}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <BotaoCustomizado title="Resetar Jogo" onPress={resetGame} />
      <Text style={styles.instructions}>Deslize para a direita para resetar o jogo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F8FF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  winner: {
    fontSize: 20,
    color: 'green',
    marginBottom: 10,
  },
  boardContainer: {
    position: 'relative',
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  line: {
    position: 'absolute',
    backgroundColor: '#444',
  },
  horizontalLine: {
    width: '100%',
    height: 2,
  },
  verticalLine: {
    height: '100%',
    width: 2,
  },
  cell: {
    position: 'absolute',
    width: '33.3333%',
    height: '33.3333%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cellText: {
    fontSize: 34,
    fontWeight: 'bold',
  },
  instructions: {
    marginTop: 10,
    fontSize: 14,
    color: '#555',
  },
});
