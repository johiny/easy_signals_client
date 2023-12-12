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
    socket?.on('image', (data) => {
      setImage(data);
    })
    return () => {
      socket?.off('image');
    } 
  
  },
  [socket])
  return (
    <MainLayout>
    {/* {socket?.connected ? <Player image={image}/> : <ConnectionScreen setSocket={setSocket}/> 
    } */}
    <ConnectionScreen setSocket={setSocket}/>
    </MainLayout>
  )
}



export default Main