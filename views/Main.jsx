import React from 'react'
import MainLayout from '../layouts/MainLayout';
import LoadingScreeen from './LoadingScreeen';
import { useState } from 'react';
import useServerConnection from '../hooks/useServerConnection';
import PlayersGrid from '../components/PlayersGrid';
const Main = () => {
  
  const [loadingState, setLoadingState] = useState(null)
  // const {socket, currentLayout, screenState} = useServerConnection(setLoadingState)
    return(
    <MainLayout>
        { loadingState === null? <PlayersGrid socket={"paco"} screen_id="pacopaco" currentLayout={{name: 'grid4Screens', screens: 4}} screenState={"paco"} setLoadingState={setLoadingState}/> : <LoadingScreeen loadingState={loadingState}/>}
    </MainLayout>
    )
}



export default Main