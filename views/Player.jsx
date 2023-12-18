import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Video, ResizeMode } from "expo-av";
import { useWindowDimensions } from "react-native";
const Player = ({ file, setLoading }) => {
  const { height, width } = useWindowDimensions();
  return (
    <View style={styles.container}>
      {file == null ? (
        <Text>Agrega alguna imagen a tu pantalla</Text>
      ) 
      :
       file.type == "image" ? (
        <Image
          source={{ uri: file.file }}
          style={{ ...styles.imagen, width: width, height: height }}
          onLoadEnd={() => setLoading(false)}
        />
      ) : 
      (
        <Video
          source={{ uri: file.file }}
          style={{ ...styles.video, width: width, height: height }}
          useNativeControls
          isLooping
          onLoad={() => setLoading(false)}
          shouldPlay
          resizeMode={ResizeMode.CONTAIN}
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
  },
  video: {
    flex: 1,
    resizeMode: "stretch",
  },
});

export default Player;
