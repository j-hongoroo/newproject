
const express = require('express');
const router = express.Router();
const {protect} = require('../middleware/protect')
const {createTodo,deleteTodo,getTodos}= require("../controller/TodoController");

router.route('/')
.get(protect, getTodos)
.post(protect,createTodo)
router.route('/:id').delete(protect, deleteTodo);

module.exports = router