import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DetailsPage from '../pages/detailsPage /index.component';
import TabNavigator from './TabNavigator';

import { HOME_SCREEN } from './NavigationConstants';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={HOME_SCREEN.MAIN_TABS}>
                <Stack.Screen 
                    name={HOME_SCREEN.MAIN_TABS}
                    component={TabNavigator} 
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
        </NavigationContainer>
    )
}


export default (RootNavigator);