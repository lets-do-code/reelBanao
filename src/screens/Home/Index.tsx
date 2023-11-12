import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, FlatList, Dimensions, SafeAreaView } from 'react-native'
import Post from '../../components/Post/index'

import { API, graphqlOperation } from 'aws-amplify'
import { listPosts } from "../../graphql/queries"


export default function Index() {

    const [posts, setPosts] = useState([])
    useEffect(() => {
        const fetchPost = async () => {
            // fetch all posts

            try {
                const response = await API.graphql(graphqlOperation(listPosts))
                setPosts(response.data.listPosts.items)
            } catch (err) {

                console.log("Error", err)
            }
        }
        fetchPost()
    }, [])

    return (
        <View>
            <FlatList
                data={posts}
                renderItem={({ item }) => <Post post={item} />}
                pagingEnabled
                windowSize={4}
                showsVerticalScrollIndicator={false}
                snapToInterval={Dimensions.get('window').height - 50}
                snapToAlignment={'start'}
                decelerationRate={'normal'}
            />
        </View>
    )
}

const styles = StyleSheet.create({})