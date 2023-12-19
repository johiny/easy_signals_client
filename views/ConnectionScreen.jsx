import React from 'react'
import { StyleSheet, View } from 'react-native';
import { ActivityIndicator, MD2Colors, TextInput, Button } from 'react-native-paper';
import { Text } from 'react-native-paper';
import { useState } from 'react';
import  createSocket  from '../services/backend_connection';

const ConnectionScreen = ({setSocket, setScreenID, ip, setIp}) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const handleConnect = async () => {
        setLoading(true)
        try{
        const socket = createSocket(ip);
        setSocket(socket);
        socket.on('connect', () => {
          console.log('Connected',  socket.id);
          setScreenID(socket.id);
        }
        )
      }
        catch(e){
          console.log(e)
          setLoading(false)
        }
      };
  return (
    <View style={styles.container}>
      <Text variant="displayLarge">Easy Signals v0.01</Text>
      <Text variant="displayMedium">Enter the IP Address that Easy Signals show in your PC</Text>
      <TextInput
        style={{ width: 800 }}
        label="IP Address"
        mode="flat"
        placeholder="192.168.1.100"
        secureTextEntry
        value={ip}
        onChangeText={(text) => setIp(text)}
      />
      <Button mode="elevated" onPress={handleConnect}>Connect</Button>
      {loading && <ActivityIndicator animating={loading} color={MD2Colors.red800} />}
      {error && <Text variant="bodyMedium">{error}</Text>}
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

export default ConnectionScreen