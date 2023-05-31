const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hej hej, główna route')
})

router.get('/tasks', (req, res) => {
    res.send('Tasks')
})

module.exports = router;