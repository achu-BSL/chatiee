const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

require('dotenv').config();

const app = express();

app.use('/api/auth', createProxyMiddleware({
    target: process.env.AUTH_SERVICE,
    secure: false,
    changeOrigin: true
}));


const port = 3005;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})