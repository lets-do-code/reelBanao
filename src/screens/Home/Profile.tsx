import { StyleSheet, Text, Image, View, TouchableOpacity, Button, TextInput } from 'react-native'
import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native';
import Feather from "react-native-vector-icons/Feather"
import PostGrid from '../../components/ProfilePostGrid'
import Ionicons from "react-native-vector-icons/Ionicons"
import Octicons from "react-native-vector-icons/Octicons"
import Entypo from "react-native-vector-icons/Entypo"
import AuthContext from '../../Context/AuthProvider';

const Profile = () => {


    const navigation = useNavigation()

    const { userImage, setUserImage, userName, setUserName } = useContext(AuthContext);

    const handleEditPress = () => {
        navigation.navigate('EditProfile')
    };
    const handleSettingPress = () => {
        navigation.navigate('Setting')
    }
    const handleAddBio = () => {
        navigation.navigate('EditProfile')
    }

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <View>
                    <Octicons name="person-add" size={24} color="#000" />
                </View>
                <View>
                    <Text style={styles.route}>@{userName}</Text>

                </View>
                <View >
                    <Entypo name="dots-three-horizontal" size={24} color="#000" onPress={handleSettingPress} />
                </View>
            </View>
            <View style={styles.pictureContainer}>
                <Image
                    style={styles.picture}
                    source={{ uri: userImage }}
                />
            </View>
            <View>
                <Text style={styles.username}>@{userName}</Text>

            </View>

            <View style={styles.userReach}>
                <View style={styles.reachBox}>
                    <Text style={styles.reachtext1}>15  </Text>
                    <Text style={styles.reachtext2}>Following  </Text>
                </View>
                <View style={styles.reachBox}>
                    <Text style={styles.reachtext1}>15  </Text>
                    <Text style={styles.reachtext2}>Followers  </Text>
                </View>
                <View style={styles.reachBox}>
                    <Text style={styles.reachtext1}>15  </Text>
                    <Text style={styles.reachtext2}>Likes  </Text>
                </View>
            </View>
            <View style={styles.editButton}>
                <TouchableOpacity style={styles.buttonContainer} onPress={handleEditPress}>
                    <Text style={styles.buttonText}>Edit Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonIcon}>
                    <Feather name="bookmark" style={styles.buttonIcon1} size={24} />
                </TouchableOpacity>
            </View>

            <View style={styles.bioContainer}>
                <TouchableOpacity onPress={handleAddBio}>
                    <Text style={styles.bioText}>Tap to add bio</Text>

                </TouchableOpacity>
            </View>
            <View style={styles.gridContainer}>
                <View style={styles.gridContainerIcon}>
                    <Ionicons name="options-outline" style={styles.buttonIcon1} size={24} />

                </View>
                <View style={styles.gridContainerIcon}>
                    <Ionicons name="heart-dislike-outline" style={styles.buttonIcon1} size={24} />

                </View>
            </View>
            <PostGrid />

        </View >

    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
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
    pictureContainer: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    picture: {
        width: 80, // Adjust the size as needed
        height: 80, // Adjust the size as needed
        borderRadius: 40, // Half of the width and height for a circular shape
    },

    username: {
        fontSize: 16,
        color: "#000",
        fontWeight: '600',
    },

    userReach: {
        flex: 1,
        flexDirection: "row",
        width: 250,
        maxHeight: 50
    },

    reachBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    reachtext1: {
        fontSize: 16,
        fontWeight: '700',
        color: "#000",
    },
    reachtext2: {
        fontSize: 13,
        fontWeight: '400',
    },
    editButton: {
        flex: 1,
        flexDirection: "row",
        width: 200,
        maxHeight: 40,
        gap: 10,
        marginTop: 10
    },
    buttonContainer: {
        backgroundColor: "#ff9900",
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        width: 140
    },
    buttonIcon: {
        borderWidth: .5,
        borderColor: "gray",
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonIcon1: {
        color: '#000',
        fontWeight: '500',    // Text color
        textAlign: 'center',     // Center text within the button
        paddingLeft: 5,
        paddingRight: 5
    },

    buttonText: {
        fontSize: 14,
        color: '#fff',
        fontWeight: '500',    // Text color
        textAlign: 'center',     // Center text within the button
        paddingLeft: 5,
        paddingRight: 5
    },

    bioContainer: {
        padding: 10
    },
    bioText: {
        fontWeight: '400'
    },
    gridContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-between',
        width: "100%",
        maxHeight: 40,
        borderWidth: .5,
        borderColor: "gray",
    },
    gridContainerIcon: {
        width: "auto",
        flex: 1,
        justifyContent: 'center',
    }
})

