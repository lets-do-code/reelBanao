import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Storage, API, graphqlOperation, Auth } from 'aws-amplify'
import { useRoute, useNavigation } from '@react-navigation/native'
import { v4 as uuidv4 } from 'uuid';

import { createPost } from '../../graphql/mutations';


const Index = () => {
    const [description, setDescription] = useState("")
    const [VideoKey, setVideoKey] = useState(null)

    const route = useRoute()
    const navigation = useNavigation()

    const uploadOnS3Bucket = async (imagePath) => {

        try {
            const response = await fetch(imagePath)



            const blob = await response.blob()


            const fileName = `${uuidv4()}.mp4`
            // const fileName = 'filename.mp4'


            const s3Response = await Storage.put(fileName, blob)

            setVideoKey(s3Response.key)

        }
        catch (error) {
            console.log("Error", error)
        }
    }

    useEffect(() => {
        // console.log("Video Link", route.params.videoUri)
        uploadOnS3Bucket(route.params.videoUri)
    }, [])


    const onPublish = async () => {

        if (!VideoKey) {
            return;
        }

        try {

            const userInfo = await Auth.currentAuthenticatedUser()
            console.log(userInfo)
            const newPost = {
                videoUri: VideoKey,
                description: description,
                userID: userInfo.attributes.sub,
                songID: "8b98a3ef-0c82-4955-a989-cf2c8534a938",

            }

            const response = await API.graphql(
                graphqlOperation(
                    createPost,
                    { input: newPost }
                )
            )
            navigation.navigate("Home", { screen: "Home" })
        }
        catch (error) {
            console.log("Error is here", error)
        }
    }
    return (
        <View style={styles.container}>

            <View>
                <View style={styles.publish}>
                    <Text style={styles.publishText}>Publish your post </Text>
                </View>
                <View style={styles.publishImageContainer}>
                    <Image
                        source={{ uri: route.params.videoUri }}
                        style={styles.publishImage}
                    />
                </View>
                <Text style={styles.desHead}>Description</Text>
                <TextInput
                    multiline={true}
                    numberOfLines={4}
                    placeholder='Add video description here'
                    value={description}
                    onChangeText={setDescription}
                    style={styles.textDescription}
                />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={onPublish}>
                    <Text style={styles.buttonText}>PUBLISH</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: "#fff",
        padding: 15

    },
    publish: {
        marginVertical: 20,
    },

    publishText: {
        fontSize: 16,
        fontWeight: '600',
        color: "#000"
    },

    publishImageContainer: {

    },
    publishImage: {
        width: 50,
        height: 50
    },

    desHead: {
        fontSize: 14,
        fontWeight: '400',
    },
    textDescription: {
        paddingHorizontal: 10,
        marginVertical: 10,
        borderRadius: 3,
        borderColor: 'gray',
        borderWidth: 1,
        textAlignVertical: 'top', // This property ensures vertical text alignment
        fontSize: 16,
        height: 100,
    },
    buttonContainer: {
        marginTop: 10,

    },
    button: {
        paddingVertical: 14,
        backgroundColor: "#ff9900",
        width: "100%"
    },
    buttonText: {
        fontSize: 12,
        color: '#fff',
        fontWeight: '500',
        alignSelf: 'center',
    }
})