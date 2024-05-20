import createSocket from "../services/backend_connection";
import LanScannerDummy from "./useLanScannerDummy";
import { useState, useEffect } from "react";
import lanScanner from "../services/lanScanner";
const useServerConnection = (setLoadingState) => {
    const [socket, setSocket] = useState(null);
    const [currentLayout, setcurrentLayout] = useState({name: 'Full Screen', screens: 1});
    const  [screenState, setScreenState] = useState([])
    const [localServerIP, setLocalServerIP] = useState(null)
 useEffect(() => {
    const connectToServer = async () => 
        {
    try{
        setLoadingState("Buscando servidor local...")
        console.log("buscando servidor local")
        const localServerIP = await lanScanner()
        if(localServerIP === null){
          console.log("no se encontro el servidor local")
          setLoadingState("No se encontro el servidor local")
          return
        }
        setLocalServerIP(localServerIP)
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

    return {socket, currentLayout, screenState, localServerIP}
}

export default useServerConnection