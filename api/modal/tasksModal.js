const mongoose = require('mongoose');
const Schema = mongoose.Schema

const TaskSchema = Schema({
    task:{
        type:String,
        required:true
    },
    createUserId:{
        type:Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    todos:{
        type:Schema.Types.ObjectId,
        ref:"todo"
    }
});
TaskSchema.pre("remove", function(next){
    this.model("todo").deleteMany({task:this_id});
    next()
})

module.exports = mongoose.model("task",TaskSchema)
