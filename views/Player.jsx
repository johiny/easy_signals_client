import React from 'react'
import { StyleSheet, View, Image } from 'react-native';
const Player = ({image}) => {
  return (
    <View style={styles.container}>
      <Image
        source={image}
        style={styles.imagen}
      />
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