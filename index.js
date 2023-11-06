const { default: axios } = require('axios')
const express = require('express')
const {createProxyMiddleware} =require('http-proxy-middleware')
const puppeteer =require('puppeteer')
const app =express()
app.get('/',(req,res)=>{
  res.send('hello world 1')
})

app.listen('5222',()=>{console.log('server start at 5222')})
