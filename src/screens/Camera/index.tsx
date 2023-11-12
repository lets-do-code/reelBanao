import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import { RNCamera } from 'react-native-camera';
import { Sound } from "react-native-sound"
import * as ImagePicker from 'react-native-image-picker'
import { useNavigation } from '@react-navigation/native';
import Feather from "react-native-vector-icons/Feather"
import Video from 'react-native-video';

const Index = () => {
    const [cameraType, setCameraType] = useState(RNCamera.Constants.Type.back)
    const [flashMode, setFlashMode] = useState(RNCamera.Constants.FlashMode.off)
    const [galleryItems, setGalleryItems] = useState([])


    // useEffect(() => {
    //     console.log("dsjhfkalsjd")

    //     const fetchAll = async () => {
    //         const cameraStatus = await RNCamera.requestPermissionAsync()
    //         setHasCameraPermission(cameraStatus.status == 'granted')

    //         const audioStatus = await Sound.requestPermissionAsync()
    //         setHasAudioPermission(audioStatus.status == 'granted')

    //         const galleryStatus = await ImagePicker.requestMediaLibraryPermissionAsync()
    //         setHasGalleryPermission(galleryStatus.status == 'granted')

    //         if (galleryStatus.status == 'granted') {
    //             const userGalleryMedia = await MediaLibrary.getAssetsAsync({ sortBy: ['creationTime'], mediaType: ['video'] })
    //         }

    //     }
    //     fetchAll()
    // }, [])

    const navigation = useNavigation()
    const cameraRef = useRef(null); // Initialize the ref with null

    const onRecord = async () => {

        if (cameraRef) {
            try {
                const options = { maxDuration: 60, quality: RNCamera.Constants.VideoQuality['480p'] }
                const data = await cameraRef.current.recordAsync(options);
                console.log(data);
                navigation.navigate('CreatePost', { videoUri: data.uri })
            } catch (error) {
                console.error("Error recording:", error);
            }
        }
    };

    const stopVideo = () => {
        if (cameraRef.current) {
            cameraRef.current.stopRecording(); // You need to access the `current` property of the ref
        }
    };


    const openImagePicker = () => {
        const options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
            mediaType: 'video',
        };
        ImagePicker.launchImageLibrary(options, (response) => {

            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
                console.warn(response.customButton);
            }
            else {
                const videoUri = response.assets[0].uri;
                navigation.navigate('CreatePost', { videoUri: videoUri })
            }
        });
    }

    return (
        <View style={styles.container}>
            <RNCamera
                ref={cameraRef}
                flashMode={flashMode}
                type={cameraType}
                style={styles.camera}
            />

            <View style={styles.sideBarContainer}>

                <TouchableOpacity style={styles.sideButtonContainer}
                    onPress={() => setCameraType(cameraType === RNCamera.Constants.Type.back ? RNCamera.Constants.Type.front : RNCamera.Constants.Type.back)}
                >
                    <Feather name={"refresh-ccw"} size={24} color="white" />
                    <Text style={styles.iconText}>Flip</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sideButtonContainer}
                    onPress={() => setFlashMode(flashMode === RNCamera.Constants.FlashMode.off ? RNCamera.Constants.FlashMode.on : RNCamera.Constants.FlashMode.off)}
                >
                    <Feather name={"zap"} size={24} color="white" />
                    <Text style={styles.iconText}>Flash</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.bottomBarContainer}>

                <View style={{ flex: 1 }}></View>

                <View style={styles.recordButtonContainer}>
                    <TouchableOpacity onLongPress={onRecord} onPressOut={() => stopVideo()} style={styles.buttonRecord}>
                    </TouchableOpacity>
                </View>

                <View style={{ flex: 1 }}>
                    <TouchableOpacity style={styles.galleryButton} onPress={openImagePicker}>

                        {/* {renderFileUri()} */}
                    </TouchableOpacity>

                    {/* <TouchableOpacity onPress={openImagePicker} style={styles.galleryButton}  >
                        <Text style={styles.btnText}>Directly Launch Image Library</Text>
                    </TouchableOpacity> */}
                </View>
            </View>

            {/* <View style={styles.ImageSections}>
                <View>
                    {renderFileData()}
                    <Text style={{ textAlign: 'center' }}>Base 64 String</Text>
                </View>
                <View>
                    {renderFileUri()}
                    <Text style={{ textAlign: 'center' }}>File Uri</Text>
                </View>
            </View> */}
        </View >
    );
};

export default Index;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    camera: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    bottomBarContainer: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'center'
    },

    recordButtonContainer: {
        flex: 1,
        marginHorizontal: 30
    },

    sideBarContainer: {
        top: 60,
        right: 0,
        marginHorizontal: 20,
        position: "absolute",
        zIndex: 9999999
    },
    sideButtonContainer: {
        alignItems: 'center',
        marginBottom: 25
    },

    buttonRecord: {
        borderWidth: 8,
        borderColor: "hsl(30, 100%, 40%)",
        backgroundColor: '#ff9900',
        width: 70,
        height: 70,
        borderRadius: 100,
        alignSelf: 'center',
        marginBottom: 30
    },
    iconText: {
        color: '#fff',
        fontSize: 12,
        marginTop: 5,
    },
    galleryButton: {
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 10,
        overflow: 'hidden',
        height: 50,
        width: 50,
        marginBottom: 30
    },
    galleryImage: {
        height: 50,
        width: 50,
    },

    ImageSections: {
        // display: 'flex',
        position: 'absolute',
        flexDirection: 'row',
        paddingHorizontal: 8,
        paddingVertical: 8,
        justifyContent: 'center'
    },
    images: {
        width: 150,
        height: 150,
        borderColor: 'black',
        borderWidth: 1,
        marginHorizontal: 3
    },
});

