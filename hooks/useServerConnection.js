import useLanScanner from "../services/lanScanner"
import createSocket from "../services/backend_connection";
import { useState, useEffect } from "react";
import useLanScannerDummy from "./useLanScannerDummy";
const useServerConnection = (setLoadingState) => {
    const [socket, setSocket] = useState(null);
    const [currentLayout, setcurrentLayout] = useState({name: 'Full Screen', screens: 1});
    const  [screenState, setScreenState] = useState([])
 useEffect(() => {
    const connectToServer = async () => 
        {
    try{
        setLoadingState("Buscando servidor local...")
        console.log("buscando servidor local")
        const localServerIP = await useLanScannerDummy()
        setLoadingState("Conectandose al servidor local..")
        console.log("Conectandose al servidor local")
        const socket = createSocket(localServerIP);
        setSocket(socket)
        socket.on('connect', () => {
          console.log('conectado')
          setLoadingState(null)
        })
        socket.on('connect_error', (reason) => {
          console.log(`ip a la cual se intento conectar ${localServerIP} error: ${JSON.stringify(reason)}`)
        })
        socket.on('current_screen_state', (state) => {
          console.log(state)
          setScreenState(state);
      })
      socket.on('update_layout', ({gridLayout, numberOfSubScreens}) => {
        setcurrentLayout({name: gridLayout, screens: numberOfSubScreens});
      })
      }
        catch(e){
          console.log(e)
}
}
connectToServer()
 },[])

    return {socket, currentLayout, screenState}
}

export default useServerConnection