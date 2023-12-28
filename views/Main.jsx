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
  const [screenId, setScreenID] = useState(null);
  const [ip, setIp] = useState('');
  useEffect(() => {
    if(!socket) return;
    socket.on('file_change', (file) => {
      setLoading(true);
      setFile(file);
    })
    return () => {
      socket.off('file_change');
    } 
  
  },[socket])
  return (
    <MainLayout>
    { loading && <Loader/> }
    {socket?.connected ? <Player file={file} screen_id={screenId} ip={ip} setLoading={setLoading}/> :
    <ConnectionScreen setIp={setIp} ip={ip} setSocket={setSocket} setScreenID={setScreenID}/> 
    }
    </MainLayout>
  )
}



export default Main