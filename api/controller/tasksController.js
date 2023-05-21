const TaskSchema =require('../modal/tasksModal');

exports.getTasks = async (req,res,next)=>{
    try{
        console.log("hello")
        let tasks = await TaskSchema.find();
        res.status(200).json({
            success:true,
            data:tasks
        })
    }catch(err){
        res.status(400).json({
            success:true,
            error:err
        })
    }
}
exports.createTask= async(req,res,next)=>{
    try{
        const {task} = req.body
        console.log(task)
        const createUserId = req.createUserId
        let Task = await TaskSchema.create({
            task,
            createUserId,
        })
        res.status(200).json({
            success:true,
            data:Task
        })
    }catch(err){
        res.status(400).json({
            success:false,
            error:err
        })
    }

}

exports.deleteTask = async (req,res,next)=>{
    try{
        let task = await TaskSchema.findByIdAndRemove(req.params.id);
        console.log(task)
        res.status(200).json({
            success:true,
            data:task
        })
    }catch(err){
        res.status(400).json({
            success:true,
            error:err
        })
    }
}