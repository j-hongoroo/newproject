const express = require('express');
const router = express.Router();
const {protect} = require('../middleware/protect')
const {createTask,deleteTask,getTasks}= require("../controller/tasksController");

router.route('/')
.get(protect, getTasks)
.post( protect, createTask)
router.route('/:id').delete( protect,  deleteTask);

module.exports = router