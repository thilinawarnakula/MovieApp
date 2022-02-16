import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MovieNavigator from './MovieNavigator';
import FavouriteMovieNavigator from './FavouriteMovieNavigator';
import { HOME_SCREEN } from './NavigationConstants';
import {
    COLORS
} from '../utilities/colors';

import AntDesign from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();


const TabNavigator = () => {

    return (
            <Tab.Navigator initialRouteName={HOME_SCREEN.MOVIE_SCREEN}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === HOME_SCREEN.MOVIE_SCREEN) {
                            iconName = 'youtube';
                        } else if (route.name === HOME_SCREEN.FAVOURITE_MOVIE_SCREEN) {
                            iconName = 'heart';
                        }
                        return <AntDesign name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: COLORS.primary,
                    tabBarInactiveTintColor: COLORS.tabUnselectedGray,
                })}>
                <Tab.Screen
                    name={HOME_SCREEN.MOVIE_SCREEN}
                    component={MovieNavigator}
                    options={{
                        headerShown: false,
                    }}
                />
                <Tab.Screen
                    name={HOME_SCREEN.FAVOURITE_MOVIE_SCREEN}
                    component={FavouriteMovieNavigator}
                    options={{
                        headerShown: false,
                    }}
                />
            </Tab.Navigator>
    )
}


export default (TabNavigator);