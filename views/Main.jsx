import React from 'react'
import MainLayout from '../layouts/MainLayout';
import { useState, useEffect} from 'react';
import ConnectionScreen from './ConnectionScreen';
import Player from './Player';
import Loader from '../components/Loader';
const Main = () => {
  const [loading, setLoading] = useState(null);
  const [socket, setSocket] = useState(null);
  const [file, setFile] = useState(null);
  useEffect(() => {
    if(!socket) return;
    socket.on('file_change', (file) => {
      console.log(file);
      setLoading(true);
      setFile(file);
    })
    return () => {
      socket.off('send_image');
    } 
  
  },[socket])
  return (
    <MainLayout>
    { loading && <Loader/> }
    {socket ? <Player file={file} setLoading={setLoading}/> :
    <ConnectionScreen setSocket={setSocket}/> 
    }
    </MainLayout>
  )
}



export default Main