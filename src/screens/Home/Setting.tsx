import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign'


import {
    Auth
} from '@aws-amplify/auth';
import { ScrollView } from 'react-native-gesture-handler';

const SignOutButton = () => {
    const handleSignOut = async () => {
        try {
            await Auth.signOut();
            // You can also navigate to the sign-in screen or do any other action here
            console.warn('Successfully signed out');
        } catch (error) {
            console.error('Error signing out', error);
        }
    };

    return (
        <Pressable onPress={handleSignOut} style={styles.account}>
            <Text style={styles.item}>
                Sign Out
            </Text>
        </Pressable>
    );
};


const Setting = () => {

    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    };
    const accountItems = [
        'Manage my account',
        'Privacy and safety',
        'Content preferences',
        'Balance',
        'TikCode'
    ];
    const generalItems = [
        'Push notifications',
        'Language',
        'Digital Wellbeing',
        'Accessibility',
        'Data Saver'
    ];
    const supportItems = [
        'Report a problem',
        'Help Center',
    ];

    return (
        <ScrollView style={styles.container}>
            <View style={styles.topContainer}>
                <View >
                    <AntDesign name="left" size={20} color="#000" onPress={handleGoBack} />
                </View>
                <View>
                    <Text style={styles.route}>Privacy and settings</Text>
                </View>
                <View >
                    {/* <Entypo name="dots-three-horizontal" size={24} color="#000" onPress={handleSettingPress} /> */}
                </View>
            </View>

            <View style={styles.accountContainer}>
                <Text style={styles.heading}>ACCOUNT</Text>
                {accountItems.map((item, index) => (
                    <View style={styles.account} key={index}>
                        <Text style={styles.item}>{item}</Text>
                    </View>
                ))}
                <Text style={styles.line}></Text>
            </View>
            <View style={styles.accountContainer}>
                <Text style={styles.heading}>GENERAL</Text>
                {generalItems.map((item, index) => (
                    <View style={styles.account} key={index}>
                        <Text style={styles.item}>{item}</Text>
                    </View>
                ))}
                <Text style={styles.line}></Text>
            </View>
            <View style={styles.accountContainer}>
                <Text style={styles.heading}>SUPPORT</Text>
                {supportItems.map((item, index) => (
                    <View style={styles.account} key={index}>
                        <Text style={styles.item}>{item}</Text>
                    </View>
                ))}


                {/* Sign out Functionality here */}

                <SignOutButton />
            </View>
        </ScrollView>
    )
}

export default Setting

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    topContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
        width: "100%",
        maxHeight: 40,
        borderBottomWidth: .2,
        borderColor: "gray",
        padding: 8
    },

    route: {
        fontSize: 16,
        color: "#000",
        fontWeight: "600"
    },
    accountContainer: {
        padding: 10,

    },
    heading: {
        fontSize: 16,
        fontWeight: "500"

    },
    account: {

        padding: 9,
    },
    item: {
        fontSize: 16,
        color: "#000",
        fontWeight: '400'
    },
    line: {
        borderBottomWidth: .5,
        borderColor: "gray",
    }

})