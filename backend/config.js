import dotenv from 'dotenv';

dotenv.config();
export default {
    PORT: process.env.PORT || 5000,
    MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost/futbol-total',
    JWT_SECRET: process.env.JWT_SECRET || 'somethingsecret',
    accessKeyId: process.env.accessKeyId || 'accessKeyId',
    secretAccessKey: process.env.secretAccessKey || 'secretAccessKey',
    PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID || 'sb',

  };