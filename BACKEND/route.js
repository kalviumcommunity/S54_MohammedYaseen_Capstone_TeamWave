const express = require('express');
const router = express.Router();
const { createtask } = require('./handler');

router.get('/test', (req, res) => {
    res.json({ message: 'This is a test route' });
});

router.post('/task', createtask); 

module.exports = router;
