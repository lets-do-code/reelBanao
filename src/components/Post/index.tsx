import React, { useState, useEffect } from 'react';
import { Image, Text, Touchable, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Dimensions, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Video, { LoadError } from 'react-native-video';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { Storage } from 'aws-amplify';


const Index = (props: any) => {

    const navigation = useNavigation()
    const [post, setPost] = useState(props.post);
    const [videoUri, setVideoUri] = useState('')
    const [isLiked, setIsLiked] = useState(false);
    const [paused, setPaused] = useState(false);
    const [screen, setScreen] = useState(false);



    const handleProfilePress = () => {
        navigation.navigate('Profile')
    }

    const handleFollowingPress = () => {
        setScreen(false)
    }

    const handleForYouPress = () => {
        setScreen(true)
    }
    // play pause video
    const onPlayPausePress = () => {
        setPaused(!paused)
    }


    // increase likes count
    const onLikePress = () => {
        // console.warn("likes pressed")
        const liketoAdd = isLiked ? -1 : 1;
        setPost(
            { ...post, likes: post.likes + liketoAdd, }
        )
        setIsLiked(!isLiked)
    }


    const getVideoUri = async () => {
        if (post.videoUri.startsWith('http')) {
            setVideoUri(post.videoUri);
        }

        setVideoUri(await Storage.get(post.videoUri))
    }

    useEffect(() => {
        getVideoUri()
    }, [])
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={onPlayPausePress}>
                <View>
                    <Video
                        source={{ uri: videoUri }}
                        style={styles.video}
                        onError={(e) => console.log(e)}
                        resizeMode={'cover'}
                        repeat={true}
                        paused={paused}
                    />

                    <View style={styles.uiContainer}>
                        <View style={styles.topContainer}>
                            <TouchableOpacity onPress={handleFollowingPress}>
                                <Text style={styles.topText}>Following</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleForYouPress}>
                                <Text style={styles.topText}>For You</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={styles.rightContainer}>
                            <TouchableOpacity onPress={handleProfilePress}>
                                <Image
                                    style={styles.profilePicture}
                                    source={{ uri: post.user.imageUri }}

                                />
                                {screen ? <View style={styles.plusIcon}>
                                    <AntDesign name={'pluscircle'} size={25} color={"red"} />

                                </View> : ""}
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.iconContainer} onPress={onLikePress}>
                                <AntDesign name={'heart'} size={35} color={isLiked ? 'red' : 'white'} />
                                <Text style={styles.statsLabel}>{post.likes}</Text>
                            </TouchableOpacity>

                            <View style={styles.iconContainer}>
                                <FontAwesome name={'commenting'} size={35} color="white" />
                                <Text style={styles.statsLabel}>{post.comments}</Text>
                            </View>

                            <View style={styles.iconContainer}>
                                <Fontisto name={'share-a'} size={30} color="white" />
                                <Text style={styles.statsLabel}>{post.shares}</Text>
                            </View>
                        </View>

                        <View style={styles.bottomContainer}>
                            <View>

                                <Text style={styles.handle} onPress={handleProfilePress}>@{post.user.username}</Text>
                                <Text style={styles.description}>{post.description}</Text>

                                <View style={styles.songRow}>
                                    <Entypo name={'beamed-note'} size={15} color="white" />
                                    <Text style={styles.songName}>{post.song.name}</Text>
                                </View>
                            </View>

                            <Image
                                style={styles.songImage}
                                source={{ uri: post.song.imageUri }}
                            />
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}
export default Index;


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: Dimensions.get('window').height - 50,
    },
    videPlayButton: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 100,
    },
    video: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    uiContainer: {
        height: '100%',
        justifyContent: 'flex-end',
    },

    topContainer: {
        position: "absolute",
        top: 30,
        left: 0,
        right: 0,
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        gap: 20,
        padding: 10
    },
    topText: {
        color: "#fff",
        fontWeight: '300',
    },
    bottomContainer: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    handle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 10,
    },
    description: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '300',
        marginBottom: 10,
    },
    songRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    songName: {
        color: '#fff',
        fontSize: 14,
        marginLeft: 5,
    },

    songImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 10,
        borderColor: '#4c4c4c',
        marginBottom: 5
    },

    //  right container
    rightContainer: {
        alignSelf: 'flex-end',
        height: "45%",
        justifyContent: 'space-between',
        marginRight: 10,
    },
    profilePicture: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#fff',
    },
    plusIcon: {
        position: "absolute",
        bottom: -10,
        right: 12,
        backgroundColor: "#fff",
        borderRadius: 16,
    },
    iconContainer: {
        alignItems: 'center',
    },
    statsLabel: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '600',
        marginTop: 5,
    },
});
