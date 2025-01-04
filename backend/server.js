import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/User.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/Order.js";
import 'dotenv/config'


// app config
const app=express()
const port=process.env.PORT || 4000


// middleware
app.use(express.json());
app.use(cors())

// mondoDB
connectDB();

const cors = require('cors');

// Allow requests from the frontend domain
app.use(cors({
    origin: 'https://food-deli-frontend-gfa7.onrender.com',
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    credentials: true // Include cookies if necessary
}));

// api endpoints
app.use('/api/food',foodRouter)
app.use('/images',express.static('uploads'))
app.use('/api/user',userRouter)
app.use('/api/cart',cartRouter) 
app.use('/api/order',orderRouter)

app.get("/",(req,res)=>{
    res.send("Uday Raj Singh")
})

app.listen(port,()=>{
     console.log('Server Started on port no 4000');
})

// mongodb+srv://singhuday2610:Uday2610@cluster0.pax4s.mongodb.net/?
