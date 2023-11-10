import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, FlatList, Dimensions, SafeAreaView } from 'react-native'
import Post from '../../components/Post/index'

import { API, graphqlOperation } from 'aws-amplify'
import { listPosts } from "../../graphql/queries"

// import posts from '../../../data/posts'



export default function Index() {

    const [posts, setPosts] = useState([])
    // console.log("api index")

    useEffect(() => {
        const fetchPost = async () => {
            // fetch all posts

            // console.log("api index")
            try {
                console.log("before api")

                const response = await API.graphql(graphqlOperation(listPosts))

                console.log(response)
                console.log("after api")

                setPosts(response.data.listPosts.items)
            } catch (err) {

                console.log("Error", err)

            }
        }

        fetchPost()
    }, [])

    // console.log(posts)
    return (
        <View>
            <FlatList
                data={posts}
                renderItem={({ item }) => <Post post={item} />}
                showsVerticalScrollIndicator={false}
                snapToInterval={Dimensions.get('window').height - 50}
                snapToAlignment={'start'}
                decelerationRate={'normal'}
            />
        </View>
    )
}

const styles = StyleSheet.create({})