'use strict'

const app = require('express')()
const fs = require('fs')

const enabledHttps = JSON.parse(process.env.HTTPS)

const getConfig = () => {
  if (!enabledHttps) {
    return {}
  }

  const config = {
    key: fs.readFileSync(process.env.CERT_KEY),
    cert: fs.readFileSync(process.env.CERT_CRT),
    requestCert: false,
    rejectUnauthorized: false
  }

  if (process.env.CERT_CA) {
    config['ca'] = fs.readFileSync(process.env.CERT_CA)
  }

  return config
}

const http = require(enabledHttps ? 'https' : 'http')
const server = enabledHttps ? http.createServer(getConfig(), app) : http.createServer(app)

module.exports = function () {
  return server
}