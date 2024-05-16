import { io } from "socket.io-client";
    function createSocket(ip){
        try{
        const ENDPOINT = `http://${ip}:3000`
        console.log("intentando conectar a :", ENDPOINT)
        const socket =  io(ENDPOINT, {
            secure: true,
             rejectUnauthorized: false
            })
        return socket
        }
        catch(e){
            return createSocket(ip)
        }
    
    }


export default createSocket;
