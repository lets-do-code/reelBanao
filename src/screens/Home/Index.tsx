import React from 'react'
import { StyleSheet, View, Text, FlatList, Dimensions, SafeAreaView } from 'react-native'

import Post from '../../components/Post/index'
import posts from '../../../data/posts'



export default function Index() {
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