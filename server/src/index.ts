import {config} from 'dotenv'
config();
import express,{Request,Response} from 'express'
import deckRoute from './routes/deckRoute';
import connectDB from './config/db';
import cors from 'cors'

const app = express();
app.use(express.json())
app.use(cors());
const PORT = 8000
//database Connectivity

connectDB();

app.use('/api/v1/flashdeck',deckRoute)


app.get('/',(req:Request,res:Response)=>{
    res.send("hello Tushar")
})
app.listen(PORT,()=>{
    console.log(`Server is running on the PORT ${PORT}`)
})