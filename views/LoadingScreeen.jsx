import React from 'react'
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

const LoadingScreen = ({setSocket, setScreenID, ip, setIp, loadingState}) => {
  return (
    <View style={styles.container}>
      <Text variant="displayLarge">Easy Signals</Text>
      <Text variant="displayMedium">{loadingState}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 20
    },
});

export default LoadingScreen