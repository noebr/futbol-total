import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import config from './config';
import userRoute from './routes/userRoute';
import productRoute from './routes/productRoute';
import videosRoute from './routes/videosRoute';
import projectRoute from './routes/projectRoute';
import articulosRoute from './routes/articulosRoute';
import orderRoute from './routes/orderRoute';

const app = express();


mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/futbol-total', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .catch((error) => console.log(error.reason));





app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

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

const port = process.env.PORT ||'5000';

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});