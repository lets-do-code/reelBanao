import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState, useRef } from 'react';
import { RNCamera } from 'react-native-camera';
import { useNavigation } from '@react-navigation/native';

const Index = () => {
    const [isRecording, setIsRecording] = useState(false);



    const navigation = useNavigation()
    const camera = useRef(null); // Initialize the ref with null

    const onRecord = async () => {
        console.warn("Recording Started");

        if (isRecording) {
            camera.current.stopRecording();
        } else {
            try {
                const data = await camera.current.recordAsync();
                navigation.navigate('CreatePost', { videoUri: data.uri })
                // console.log(data);
            } catch (error) {
                console.error("Error recording:", error);
            }
        }
    };

    return (
        <View style={styles.container}>
            <RNCamera
                ref={camera}
                onRecordingStart={() => setIsRecording(true)}
                onRecordingEnd={() => setIsRecording(false)}
                style={styles.preview}
            />
            <TouchableOpacity onPress={onRecord} style={isRecording ? styles.buttonStop : styles.buttonRecord}>
                {/* Render your button content here */}
            </TouchableOpacity>
        </View>
    );
};

export default Index;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    buttonRecord: {
        marginVertical: 10,
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: "#ff9900",
        alignSelf: 'center',
    },
    buttonStop: {
        marginVertical: 20,
        height: 30,
        width: 30,
        borderRadius: 3,
        backgroundColor: "#ff9900",
        alignSelf: 'center',
    },
});
