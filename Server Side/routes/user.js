const express = require('express')
const router = express.Router()

router.get('/', (request, response, next) => {
    response.json({mssg:"Success!"})
})

module.exports = router