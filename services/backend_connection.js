import { io } from "socket.io-client";


    const createSocket = (ip) =>{
        const ENDPOINT = `ws://${ip}:3000`
        return io(ENDPOINT);
    
    }

export default createSocket;
