import express from 'express';
import { WebSocketServer } from 'ws';


const app = express();
const port = 5000;

const server = app.listen(port, ()=>{
    console.log('listening... on port:', port)
});

const wss = new WebSocketServer({server})

wss.on('connection',(ws)=>{
    ws.on('message',(msg) =>{
        console.log("data from client:%s", msg);
        console.log(Buffer.from(msg).toString());
        if(msg.toString() === 'mehedi'){

            ws.send("Thanks Mehedi!");
        }
        if(msg.toString() === 'tauhid'){

            ws.send("Thanks Tauhid!");
        }
    })
})