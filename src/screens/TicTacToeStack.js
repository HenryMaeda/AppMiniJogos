import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TicTacToe from './TicTacToe';

const Stack = createStackNavigator();

export default function TicTacToeStack(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TicTacToeHome"
        options={{ headerShown: false }}
      >
        {(screenProps) => (
          <TicTacToe
            {...screenProps}
            {...props} // passa dadosGlobais e setDadosGlobais, se precisar
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
