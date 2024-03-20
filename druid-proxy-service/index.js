const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const env = process.env;

//creates a proxy to druid
app.all([/\/druid\/v2.*/, "/status"], createProxyMiddleware({
    target: "http://localhost:8888",
    ws: true,
    changeOrigin: true
}));


app.listen(9000, () => {
    console.log("Proxy server is running on port 9000")
})  