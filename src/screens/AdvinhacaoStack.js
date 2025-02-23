import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AdvinhacaoHome from './AdvinhacaoHome';
import AdvinhacaoHistorico from './AdvinhacaoHistorico';

const Stack = createStackNavigator();

export default function AdvinhacaoStack(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AdvinhacaoHome"
        options={{ title: 'Jogo de Adivinhação' }}
      >
        {(screenProps) => (
          <AdvinhacaoHome
            {...screenProps}
            {...props} // aqui vem dadosGlobais e setDadosGlobais
          />
        )}
      </Stack.Screen>

      <Stack.Screen
        name="Historico"
        options={{ title: 'Histórico de Partidas' }}
      >
        {(screenProps) => (
          <AdvinhacaoHistorico
            {...screenProps}
            {...props}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
