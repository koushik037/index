const { default: axios } = require('axios')
const express = require('express')
const {createProxyMiddleware} =require('http-proxy-middleware')
require('dotenv').config()

const port = process.env.PORT || '3001'


const app =express()
app.get('/',(req,res)=>{
  res.send('hello world 1')
})

app.listen(port,()=>{console.log(`server start at ${port}`)})
