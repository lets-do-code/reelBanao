import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Image, Text, Dimensions } from 'react-native';
import { API, Auth, graphqlOperation } from 'aws-amplify'
import { listPosts } from '../graphql/queries';

const numColumns = 3; // Number of columns in the grid

const PostGrid = () => {

    const [postByUserID, setPostByUserID] = useState([])

    const getPostByUserID = async () => {

        try {
            // get ui of user
            const userInfo = await Auth.currentAuthenticatedUser()
            const userID = userInfo.attributes.sub

            // fetch post by user id

            const response = await API.graphql(
                graphqlOperation(
                    listPosts, {
                    filter: {
                        userID: {
                            eq: userID
                        }
                    }
                })
            )
            setPostByUserID(response.data.listPosts.items)
        }
        catch (err) {
            console.log("Error : " + err)
        }
    }
    useEffect(() => {
        getPostByUserID()
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                data={postByUserID}
                keyExtractor={(item) => item.id}
                numColumns={numColumns}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Image source={{ uri: item.image }} style={styles.postImage} />
                        <Text style={styles.captionText}>{item.caption}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    itemContainer: {
        width: windowWidth / numColumns,
        padding: 5,
        borderWidth: .5,
        borderColor: "gray",
    },
    postImage: {
        width: '100%',
        height: 150,
    },
    captionText: {
        textAlign: 'center',
    },
});

export default PostGrid;
