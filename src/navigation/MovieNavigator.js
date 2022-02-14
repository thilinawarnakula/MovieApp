import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { HOME_SCREEN } from './NavigationConstants';

import MovieListPage from '../pages/movieListPage/index.component';
import DetailsPage from '../pages/detailsPage /index.component';

const Stack = createNativeStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName={HOME_SCREEN.MOVIE_SCREEN_PAGE}
    >
      <Stack.Screen
        name={HOME_SCREEN.MOVIE_SCREEN_PAGE}
        component={MovieListPage}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={HOME_SCREEN.DETAILS_PAGE}
        component={DetailsPage}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
