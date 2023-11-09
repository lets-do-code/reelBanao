import React from 'react';
import { View, FlatList, StyleSheet, Image, Text, Dimensions } from 'react-native';

const posts = [
    { id: '1', image: 'https://example.com/post1.jpg', caption: 'Post 1' },
    { id: '2', image: 'https://example.com/post2.jpg', caption: 'Post 2' },
    { id: '3', image: 'https://example.com/post2.jpg', caption: 'Post 3' },
    { id: '4', image: 'https://example.com/post2.jpg', caption: 'Post 4' },
    { id: '5', image: 'https://example.com/post2.jpg', caption: 'Post 5' },
    { id: '6', image: 'https://example.com/post2.jpg', caption: 'Post 6' },
    { id: '7', image: 'https://example.com/post2.jpg', caption: 'Post 7' },
    { id: '8', image: 'https://example.com/post2.jpg', caption: 'Post 8' },
    { id: '9', image: 'https://example.com/post2.jpg', caption: 'Post 9' },
    { id: '10', image: 'https://example.com/post2.jpg', caption: 'Post 10' },
    { id: '11', image: 'https://example.com/post1.jpg', caption: 'Post 11' },
    { id: '12', image: 'https://example.com/post2.jpg', caption: 'Post 12' },
    { id: '13', image: 'https://example.com/post2.jpg', caption: 'Post 13' },
    { id: '14', image: 'https://example.com/post2.jpg', caption: 'Post 14' },
    { id: '15', image: 'https://example.com/post2.jpg', caption: 'Post 15' },
    { id: '16', image: 'https://example.com/post2.jpg', caption: 'Post 16' },
    { id: '17', image: 'https://example.com/post2.jpg', caption: 'Post 17' },
    { id: '18', image: 'https://example.com/post2.jpg', caption: 'Post 18' },
    { id: '19', image: 'https://example.com/post2.jpg', caption: 'Post 19' },
    { id: '20', image: 'https://example.com/post2.jpg', caption: 'Post 20' },
    { id: '21', image: 'https://example.com/post1.jpg', caption: 'Post 21' },
    { id: '22', image: 'https://example.com/post2.jpg', caption: 'Post 22' },
    { id: '23', image: 'https://example.com/post2.jpg', caption: 'Post 23' },
    { id: '24', image: 'https://example.com/post2.jpg', caption: 'Post 24' },
    { id: '25', image: 'https://example.com/post2.jpg', caption: 'Post 25' },
    { id: '26', image: 'https://example.com/post2.jpg', caption: 'Post 26' },
    { id: '27', image: 'https://example.com/post2.jpg', caption: 'Post 27' },
    { id: '28', image: 'https://example.com/post2.jpg', caption: 'Post 28' },
    { id: '29', image: 'https://example.com/post2.jpg', caption: 'Post 29' },
    { id: '30', image: 'https://example.com/post2.jpg', caption: 'Post 30' },
    { id: '31', image: 'https://example.com/post1.jpg', caption: 'Post 31' },
    { id: '32', image: 'https://example.com/post2.jpg', caption: 'Post 32' },
    { id: '33', image: 'https://example.com/post2.jpg', caption: 'Post 33' },
    { id: '34', image: 'https://example.com/post2.jpg', caption: 'Post 34' },
    { id: '35', image: 'https://example.com/post2.jpg', caption: 'Post 35' },
    { id: '36', image: 'https://example.com/post2.jpg', caption: 'Post 36' },
    { id: '37', image: 'https://example.com/post2.jpg', caption: 'Post 37' },
    { id: '38', image: 'https://example.com/post2.jpg', caption: 'Post 38' },
    { id: '39', image: 'https://example.com/post2.jpg', caption: 'Post 39' },
    { id: '40', image: 'https://example.com/post2.jpg', caption: 'Post 40' },
    // Add more post objects as needed
];

const numColumns = 3; // Number of columns in the grid

const PostGrid = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={posts}
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
