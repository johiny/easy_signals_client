import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Video, ResizeMode } from "expo-av";
import { useWindowDimensions } from "react-native";

const protocol = "http"
const Player = ({subScreenState, screen_id, setLoading, ip, socket, subscreen_index}) => {
    const { height, width } = useWindowDimensions();
    return (
      <View style={styles.container}>
        {subScreenState?.files == null ? (
          <Text style={styles.text}>No File Yet</Text>
        ) 
        :
        subScreenState.files[subScreenState.currentIndex].filetype.includes("image") ? (
          <Image
            source={{ uri: `${protocol}://${ip}:3000/currentfile/${screen_id}/${subscreen_index}/${subScreenState.currentIndex}-${subScreenState.files[subScreenState.currentIndex].name}` }}
            style={{ ...styles.imagen, width: width, height: height }}
            onLoadEnd={() =>{
                const imageTimeout = setTimeout(() => {
                    socket.emit('next_file', {screen_id, subscreen_index})
                    clearTimeout(imageTimeout)
                  }, 1200 * 10)
            }}
          />
        ) : 
        (
          <Video
            source={{ uri: `${protocol}://${ip}:3000/currentfile/${screen_id}/${subscreen_index}/${subScreenState.currentIndex}-${subScreenState.files[subScreenState.currentIndex].name}` }}
            style={{ ...styles.video, width: width, height: height }}
            useNativeControls
            isLooping={subScreenState.files.length == 1 ? true : false}
            shouldPlay
            resizeMode={ResizeMode.STRETCH}
            onPlaybackStatusUpdate={(status) => {
                if(status.didJustFinish){
                    socket.emit('next_file', {screen_id, subscreen_index})
                }
            }}
          />
        )}
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    imagen: {
      flex: 1,
      resizeMode: "stretch",
      maxWidth: "100%"
    },
    video: {
      flex: 1,
      resizeMode: "stretch",
      maxWidth: "100%"
    },
    text: {
      color: "white",
      fontSize: 25,
    }
  });

  export default Player;