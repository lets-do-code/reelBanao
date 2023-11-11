import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import HomeBottomTabNavigator from './homeBottomTabNavigator';
import EditProfile from '../components/EditProfile';
import Profile from '../screens/Home/Profile';
import Setting from '../screens/Home/Setting';
import DirectMessage from '../screens/Home/DirectMessage';
import CreatePost from '../screens/CreatePost/Index'


const RootNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false, // Hide the header for the entire stack
                }}
            >
                <Stack.Screen name="Home" component={HomeBottomTabNavigator} />
                <Stack.Screen name="EditProfile" component={EditProfile} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Setting" component={Setting} />
                <Stack.Screen name="Directmessage" component={DirectMessage} />
                <Stack.Screen name="CreatePost" component={CreatePost} />

            </Stack.Navigator>
        </NavigationContainer >
    )
}

export default RootNavigation