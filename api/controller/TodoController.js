const TodoSchema = require('../modal/todoModal')
exports.getTodos = async (req,res,next)=>{
    try{
        let Todo = await TodoSchema.find();
        res.status(200).json({
            success:true,
            data:Todo
        })
    }catch(err){
        res.status(400).json({
            success:true,
            error:err
        })
    }
}
exports.createTodo= async(req,res,next)=>{
    try{
        let Todo = await TodoSchema.create(req.body)
        res.status(200).json({
            success:true,
            data:Todo
        })
    }catch(err){
        res.status(400).json({
            success:false,
            error:err
        })
    }

}

exports.deleteTodo = async (req,res,next)=>{
    try{
        let Todo = await TodoSchema.findByIdAndRemove(req.params.id);

        res.status(200).json({
            success:true,
            data:Todo
        })
    }catch(err){
        res.status(400).json({
            success:true,
            error:err
        })
    }
}