const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Birds home page')
})

router.get('/about', (req, res) => {
  res.send('About birds')
})

router.get('/:slug', (req, res) => {
  res.send(`Fetch the blogspot for ${req.params.slug}`)
})

module.exports = router