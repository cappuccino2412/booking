const express = require('express');
const router = express.Router()
//Controller
const {listCamping, readCamping, createCamping, updateCamping, deleteCamping} = require('../controllers/camping')
const {authCheck} = require('../middlewares/auth')


// @ENDPOINT http://localhost:5000/api/camping
// @METHOD GET[list all data]
// @ACCESS Public
router.get('/camping',authCheck,listCamping)

// @ENDPOINT http://localhost:5000/api/camping:id
// @METHOD GET[read specifile]
// @ACCESS Public
router.get('/camping/:id',readCamping)

// @ENDPOINT http://localhost:5000/api/camping
// @METHOD Post[Create]
// @ACCESS Private

router.post('/camping',createCamping)
    // res.json({title,price})     

// @ENDPOINT http://localhost:5000/api/camping/:id
// @METHOD Put[Edit]
// @ACCESS Private

router.put('/camping/:id',updateCamping)

// @ENDPOINT http://localhost:5000/api/camping/:id
// @METHOD Delete[delete]
// @ACCESS Private

router.delete('/camping/:id',deleteCamping)

module.exports = router;