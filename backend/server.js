import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import config from './config';
import userRoute from './routes/userRoute';
import productRoute from './routes/productRoute';
import videosRoute from './routes/videosRoute';
import projectRoute from './routes/projectRoute';
import dotenv from 'dotenv';
import cors from 'cors';
import articulosRoute from './routes/articulosRoute';
import orderRoute from './routes/orderRoute'



const mongodbUrl = config.MONGODB_URL;
mongoose
  .connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .catch((error) => console.log(error.reason));


const app = express();


app.use(bodyParser.json());
app.use('/api/users', userRoute);
app.use('/', productRoute);
app.use('/', videosRoute);
app.use('/',projectRoute);
app.use('/',articulosRoute);
app.use('/api/orders', orderRoute);




app.use(express.static(path.join(__dirname, '/../frontend/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../frontend/public/index.html`));
});


app.listen(5000, () => {
  console.log('Server started at http://localhost:5000');
});