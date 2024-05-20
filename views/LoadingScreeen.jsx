import React from 'react'
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

const LoadingScreen = ({loadingState}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text} variant="displayLarge">Easy Signals</Text>
      <Text style={styles.text} variant="displayMedium">{loadingState}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 20,
    },
    text: {
      color: 'white',
    }
});

export default LoadingScreen