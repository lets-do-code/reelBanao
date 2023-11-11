import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState, useContext } from 'react'
import { useNavigation } from '@react-navigation/native';
import ImagePicker from 'react-native-image-picker';
import AntDesign from 'react-native-vector-icons/AntDesign'
import AuthContext from '../Context/AuthProvider';

const EditProfile = () => {

    const navigation = useNavigation();
    const { userImage, setUserImage, userName, setUserName } = useContext(AuthContext);

    const [name, setName] = useState('');
    const [username, setUserame] = useState('');
    const [bio, setBio] = useState('');
    const [instagram, setInstagram] = useState('');
    const [youtube, setYoutube] = useState('');

    // const handleSelectImage = () => {
    //     const options = {
    //         title: 'Select Profile Picture',
    //         storageOptions: {
    //             skipBackup: true,
    //             path: 'images',
    //         },
    //     };

    //     ImagePicker.showImagePicker(options, (response) => {
    //         if (response.didCancel) {
    //             // User canceled the image picker
    //         } else if (response.error) {
    //             // Error while picking the image
    //         } else {
    //             // Selected image
    //             setProfilePicture(response.uri);
    //         }
    //     });
    // };

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
                    <Text style={styles.route}>Edit Profile</Text>

                </View>
                <View >
                    {/* <Entypo name="dots-three-horizontal" size={24} color="#000" onPress={handleSettingPress} /> */}
                </View>
            </View>

            <View style={styles.pictureContainer}>
                {/* <TouchableOpacity onPress={handleSelectImage}> */}
                <Image style={styles.picture} source={{ uri: userImage }} />
                {/* </TouchableOpacity> */}
            </View>

            <View style={styles.inputtype}>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Name</Text>
                    <TextInput
                        placeholder='Name'
                        style={styles.input}
                        onChangeText={(text) => setName(text)}
                        value={name}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Username</Text>
                    <TextInput
                        placeholder='Username'
                        style={styles.input}
                        onChangeText={(text) => setUserName(text)}
                        value={userName}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Bio</Text>
                    <TextInput
                        placeholder='Add a bio to your Profile'
                        style={styles.input}
                        onChangeText={(text) => setBio(text)}
                        value={bio}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Instagram</Text>
                    <TextInput
                        placeholder='Add Instagram to your profile'
                        style={styles.input}
                        onChangeText={(text) => setInstagram(text)}
                        value={instagram}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Youtube</Text>
                    <TextInput
                        placeholder='Add YouTube to your profile'
                        style={styles.input}
                        onChangeText={(text) => setYoutube(text)}
                        value={youtube}
                    />
                </View>


            </View>
        </View>
    )
}

export default EditProfile

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
        marginTop: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    picture: {
        width: 80, // Adjust the size as needed
        height: 80, // Adjust the size as needed
        borderRadius: 40, // Half of the width and height for a circular shape
    },

    inputtype: {
        marginTop: 30,
        width: "100%",
        padding: 10
    },
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
        // maxWidth: 300
    },
    input: {
        width: "70%",
        borderWidth: 0,
        borderColor: 'gray',
        borderRadius: 5,
        paddingLeft: 8,
        height: 40,
        textAlign: "right",
        fontSize: 16,
        fontWeight: '400'
    },
    inputLabel: {
        fontSize: 16,
        color: "#000",
        fontWeight: "400"
    }
})