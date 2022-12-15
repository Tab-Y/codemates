const router = require('express').Router();
const path = require('path');

router.get('/', async (req, res) => {
    try {
       
        
    } catch (err) {
        res.status(500).json(err);
    }
});


// create
router.post('/', async (req, res) => {
    try {

    } catch (err) {
        res.status(500).json(err)
    }
});

// read
router.get('/', async (req, res) => {
    try {

    } catch (err) {
        res.status(500).json(err)
    }
});

// update
router.put('/', async (req, res) => {
    try {

    } catch (err) {
        res.status(500).json(err)
    }
});

// delete
router.delete('/', async (req, res) => {
    try {

    } catch (err) {
        res.status(500).json(err)
    }
});


module.exports = router;