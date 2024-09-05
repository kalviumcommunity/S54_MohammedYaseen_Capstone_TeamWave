const express = require('express');
const router = express.Router();
const { createtask,updatetask,deleteById,getTaskById,getAllTask } = require('./handler');

router.get('/test', (req, res) => {
    res.json({ message: 'This is a test route' });
});

router.get('/task/:id',getTaskById);
router.get('/task',getAllTask)

router.post('/task', createtask); 
router.put('/task/:id',updatetask);
router.delete('/task/:id',deleteById)

module.exports = router;