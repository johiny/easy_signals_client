import React from 'react'
import MainLayout from '../layouts/MainLayout';
import LoadingScreeen from './LoadingScreeen';
import { useState } from 'react';
import useServerConnection from '../hooks/useServerConnection';
import PlayersGrid from '../components/PlayersGrid';
const Main = () => {
  
  const [loadingState, setLoadingState] = useState(null)
  const {socket, currentLayout, screenState, localServerIP} = useServerConnection(setLoadingState)
    return(
    <MainLayout>
        { loadingState === null && socket != null? <PlayersGrid ip={localServerIP} socket={socket} screen_id={socket.id} currentLayout={currentLayout} screenState={screenState} setLoadingState={setLoadingState}/> : <LoadingScreeen loadingState={loadingState}/>}
    </MainLayout>
    )
}



export default Main