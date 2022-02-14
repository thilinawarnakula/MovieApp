import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MovieNavigator from './MovieNavigator';
import FavouriteMovieNavigator from './FavouriteMovieNavigator';
import { HOME_SCREEN } from './NavigationConstants';
import {
    COLORS
} from '../utilities/colors';

// import AntDesign from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();


const RootNavigator = () => {

    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName={HOME_SCREEN.MOVIE_SCREEN}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === HOME_SCREEN.MOVIE_SCREEN) {
                            iconName = 'rocket1';
                        } else if (route.name === HOME_SCREEN.FAVOURITE_MOVIE_SCREEN) {
                            iconName = 'calendar';
                        }
                        return null;
                    },
                    tabBarActiveTintColor: COLORS.primary,
                    tabBarInactiveTintColor: COLORS.gray1,
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
        </NavigationContainer>
    )
}


export default (RootNavigator);