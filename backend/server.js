import express from 'express';
import connectDB from './conflig/DB.js';
import userRouter from './routes/user.js';
import cookieParser from 'cookie-parser';
import createRouter from './routes/post.js';

const app = express();
const PORT =8000;

app.use(express.json());
app.use(cookieParser())

// app.post('/api/register-user',registerUser)
app.use('/api/user',userRouter)
app.use('/api/post',createRouter)

connectDB();
app.listen(PORT,()=>{
    console.log(`server started on ${PORT}`)
})
