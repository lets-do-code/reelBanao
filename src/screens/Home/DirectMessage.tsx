import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';
import MessageImage from "../../assets/images/MessageIcon.png"


const DirectMessage = () => {
    const navigation = useNavigation();

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
                    <Text style={styles.route}>Direct messages</Text>
                </View>
                <View >
                    <AntDesign name="plus" size={20} color="#000" />
                </View>
            </View>

            <View style={styles.messageContainer}>
                <Image source={MessageImage} style={{ height: 50, resizeMode: 'contain' }} />
                <Text style={styles.mainText}>Message your friends</Text>
                <Text>Share videos or start a conversation</Text>
            </View>
        </View>
    )
}

export default DirectMessage

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
        borderColor: "red",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    mainText: {
        color: "#000",
        fontWeight: "600"
    }
})