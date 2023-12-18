import React from 'react'
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import { View, StyleSheet } from 'react-native'
const Loader = () => {
  return (
    <View style={styles.container}> 
        <ActivityIndicator animating={true} color={MD2Colors.purple800} size={500} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#151212',
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Loader