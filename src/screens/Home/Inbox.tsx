import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native';
import Notification from "../../assets/images/message.png"


const Inbox = () => {
    const navigation = useNavigation();

    const handleMessagePress = () => {
        navigation.navigate('Directmessage')
    }
    const handleGoBack = () => {
        navigation.goBack();
    };
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <View >
                    <AntDesign name="left" size={20} color="#000" onPress={handleGoBack} />
                </View>
                <View>
                    <Text style={styles.route}>All Activity</Text>
                </View>
                <View >
                    <Feather name="send" size={20} color="#000" onPress={handleMessagePress} />
                </View>
            </View>

            <View style={styles.messageContainer}>
                <Image source={Notification} style={{ height: 50, resizeMode: 'contain' }} />
                <Text style={styles.mainText}>Notifications aren’t available</Text>
                <Text>Notifications about your account will appear here</Text>
            </View>
        </View>
    )
}

export default Inbox

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
        color: "#000",
        fontWeight: "600"
    },

    messageContainer: {
        padding: 10,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    mainText: {
        color: "#000",
        fontWeight: "600"
    }
})