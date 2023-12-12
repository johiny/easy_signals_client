import React from 'react'
import { StyleSheet, View, Image } from 'react-native';
const Player = ({image}) => {
  return (
    <View style={styles.container}>
      {image ? 
      <Image source={{uri: image}} style={styles.imagen} /> :
      <h1>Agrega alguna imagen a tu pantalla</h1>
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
      width: 800,
      height: 800,
      resizeMode: 'cover', // Opciones: 'cover', 'contain', 'stretch', 'repeat', 'center'
    },
  });

export default Player