// server.js
const functions = require('firebase-functions');
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
app.prepare();

exports.nextApp = functions.https.onRequest(async (req, res) => {
  const parsedUrl = parse(req.url, true)
  handle(req, res, parsedUrl)
})

exports.nextApi = functions.https.onRequest(async (req, res) => {
  const parsedUrl = parse(req.url, true)
  res.set('Cache-Control', 'public, max-age=86400, s-maxage=86400');
  handle(req, res, parsedUrl)
})