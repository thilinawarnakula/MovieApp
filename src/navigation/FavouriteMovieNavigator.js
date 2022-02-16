import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { HOME_SCREEN } from './NavigationConstants';

import FavouriteMovieListPage from '../pages/favouriteMovieListPage/index.component';

const Stack = createNativeStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName={HOME_SCREEN.FAVOURITE_MOVIE_SCREEN}
    >
      <Stack.Screen
        name={HOME_SCREEN.FAVOURITE_MOVIE_SCREEN}
        component={FavouriteMovieListPage}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
