import React from 'react'
import MainLayout from '../layouts/MainLayout';
import { useState, useEffect} from 'react';
import ConnectionScreen from './connectionScreen';
import Player from './Player';
const Main = () => {
  const [socket, setSocket] = useState(null);
  const [file, setFile] = useState(null);
  useEffect(() => {
    if(!socket) return;
    socket.on('file_change', (file) => {
      console.log('llego un archivo', file)
      setFile(file);
    })
    return () => {
      socket.off('send_image');
    } 
  
  },[socket])
  return (
    <MainLayout>
    {socket ? <Player file={file}/> :
    <ConnectionScreen setSocket={setSocket}/> 
    }
    </MainLayout>
  )
}



export default Main