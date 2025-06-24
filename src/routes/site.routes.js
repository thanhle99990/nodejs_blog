const express = require('express')
const router = express.Router()

const siteControlller = require('../app/controllers/site.controller')

router.use('/search', siteControlller.search)
router.use('/', siteControlller.index)
module.exports = router;