import React from 'react'

import { Text } from 'react-native-paper';
import MainLayout from '../layouts/MainLayout';
import { useState, useEffect} from 'react';
import ConnectionScreen from './connectionScreen';
import Player from './Player';
const Main = () => {
  const [socket, setSocket] = useState(null);
  const [image, setImage] = useState(null);
  useEffect(() => {
    if(!socket) return;
    console.log(socket)
    socket.on('image_change', (data) => {
      console.log('llego una imagen', data)
      setImage(data);
    })
    return () => {
      socket.off('send_image');
    } 
  
  },[socket])
  return (
    <MainLayout>
    {socket?.connected ? <Player image={image}/> :
    <ConnectionScreen setSocket={setSocket}/> 
    }
    </MainLayout>
  )
}



export default Main