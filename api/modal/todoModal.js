const mongoose = require('mongoose');
const Schema = mongoose.Schema

const TodoSchema = Schema({
    todo:{
        type:String,
        required:true
    },
    taskId:{
        type:Schema.Types.ObjectId,
        ref:"task",
        required:true
    }
})

module.exports = mongoose.model("todo",TodoSchema)