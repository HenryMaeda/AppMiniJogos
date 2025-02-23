import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

import TicTacToeStack from './src/screens/TicTacToeStack';
import AdvinhacaoStack from './src/screens/AdvinhacaoStack';
import PedraPapelTesoura from './src/screens/PedraPapelTesoura';

// Ícones (ajuste caminhos conforme seu /assets)
import tictactoeIcon from './assets/velha.png';
import pptIcon from './assets/ppt.png';
import guessIcon from './assets/guess.png';

const Tab = createBottomTabNavigator();

export default function App() {
  const [dadosGlobais, setDadosGlobais] = useState({
    advinhacaoHistory: [],
  });

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ size }) => {
            let source;
            if (route.name === 'Jogo da Velha') source = tictactoeIcon;
            else if (route.name === 'Pedra, Papel ou Tesoura') source = pptIcon;
            else if (route.name === 'Adivinhação') source = guessIcon;
            return <Image source={source} style={{ width: size, height: size }} />;
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
          headerShown: false, // se você não quiser o cabeçalho nas Tabs
        })}
      >
        <Tab.Screen name="Jogo da Velha">
          {(props) => (
            <TicTacToeStack
              {...props}
              dadosGlobais={dadosGlobais}
              setDadosGlobais={setDadosGlobais}
            />
          )}
        </Tab.Screen>

        <Tab.Screen name="Pedra, Papel ou Tesoura">
          {(props) => (
            <PedraPapelTesoura
              {...props}
              dadosGlobais={dadosGlobais}
              setDadosGlobais={setDadosGlobais}
            />
          )}
        </Tab.Screen>

        {/** Adivinhação agora usa uma Stack própria */}
        <Tab.Screen name="Adivinhação">
          {(props) => (
            <AdvinhacaoStack
              {...props}
              dadosGlobais={dadosGlobais}
              setDadosGlobais={setDadosGlobais}
            />
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
