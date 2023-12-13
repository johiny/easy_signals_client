import React from 'react'
import { StyleSheet, View, Image} from 'react-native';
import { Video } from 'expo-av';
import {useWindowDimensions} from 'react-native';
const Player = ({file}) => {
  const {height, width} = useWindowDimensions();
  return (
    <View style={styles.container}>
      {file == null ? 
      <h1>Agrega alguna imagen a tu pantalla</h1> :
      file.type == 'image' ?
      <Image source={{uri: file.file}} style={{...styles.imagen, width : width * 0.95, height : height * 0.95}} /> :
      <Video 
      source={{uri: file.file}} 
      style={{...styles.imagen,width : width * 0.95, height : height * 0.95}} 
      useNativeControls
      isLooping/>
}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    imagen: {
      flex: 1,
      resizeMode: 'cover'
    },
  });

export default Player