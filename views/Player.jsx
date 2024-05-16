import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Video, ResizeMode } from "expo-av";
import { useWindowDimensions } from "react-native";
const protocol = 'http'
const Player = ({ file, setLoading, screen_id, ip, setLoadingState }) => {
  const { height, width } = useWindowDimensions();
  return (
    <View style={styles.container}>
     <Text>Conectado al server!</Text>
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
