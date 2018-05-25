'use strict'

const fs = require('fs')
const path = require('path')
const convert = require('koa-convert')
const koaBody = require('koa-body')
const Koa = require('koa')
const app = new Koa()
// app.use(cors());

const routers = require('./router/all')
app.use(koaBody({multipart: true}))

app.use(require('koa-static')(__dirname + '/dist'));
app.use(routers.routes())
app.use(routers.allowedMethods());
const port = process.env.PORT || 3001;

app.listen(port)
console.log(`server running @ http://localhost:${port}`)