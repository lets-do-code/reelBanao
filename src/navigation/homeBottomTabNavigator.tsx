import React from 'react';
import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Index';
import Profile from '../screens/Home/Profile';
import Inbox from '../screens/Home/Inbox';
import Search from '../screens/Home/Search';
import Camera from '../screens/Camera/index';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import plusIcon from '../assets/images/plus-icon.png'




const Tab = createBottomTabNavigator();

const HomeBottomTabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}
            tabBarOptions={{
                tabStyle: {
                    backgroundColor: '#000',
                },
                activeTintColor: '#fff',
            }}>
            <Tab.Screen
                name={'Home'}
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Entypo name={'home'} size={24} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name={'Discover'}
                component={Search}
                options={{
                    tabBarIcon: ({ color }) => (
                        <AntDesign name={'search1'} size={24} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name={'Add'}
                component={Camera}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Image source={plusIcon} style={{ height: 24, resizeMode: 'contain' }} />
                    ),
                    // tabBarLabel: '',
                }}
            />

            <Tab.Screen
                name={'Inbox'}
                component={Inbox}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name={'message-minus-outline'} size={24} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name={'Me'}

                component={Profile}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Octicons name={'person'} size={24} color={color} />
                    ),
                    // tabBarLabel: '',
                }}
            />
        </Tab.Navigator>
    );
};

export default HomeBottomTabNavigator;
