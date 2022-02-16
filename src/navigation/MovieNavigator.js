import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { HOME_SCREEN } from './NavigationConstants';

import HomePage from '../pages/homePage/index.component';

const Stack = createNativeStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName={HOME_SCREEN.HOME_PAGE}
    >
      <Stack.Screen
        name={HOME_SCREEN.HOME_PAGE}
        component={HomePage}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
