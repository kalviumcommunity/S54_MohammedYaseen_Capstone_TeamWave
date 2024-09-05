const { default: mongoose } = require("mongoose");
const Task = require("./Schema")


exports.createtask = async (req, res) => {
    try {
        res.send("Posted Successfully");
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



exports.updatetask = async(req,res)=>{
    try{
        const updatedTask = await Task.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(updatedTask==null){
            return res.status(404).json({message:"Task not Found kindly give apporpriate id  for the taskask not Found"})
        }
        res.json(updatedTask);
    }catch(error){
        return res.status(500).json({message: error.message})
    }
}

exports.getTaskById = async(req,res)=>{
    try{
        const taskFound = await Task.findById(req.params.id)
        if(taskFound==null){
            return res.status(500).json({message:"Task not Found kindly give apporpriate id  for the task"})
        }
        res.json(taskFound)

    }catch(error){
        return res.status(500).json({message:error.message})
    }
}

exports.deleteById = async(req,res)=>{
    try{
        const deletedTask = await Task.findByIdAndDelete(req.params.id)
        if(deletedTask==null){
            return res.status(404).json({message:"Task not Found kindly give apporpriate id  for the task"})
        }
        res.json({message:"task is deleted"});
    }catch(error){
        return res.status(500).json({message:error.message})
    }
}

exports.getAllTask = async(req,res)=>{
    try{
        const allTasks = await Task.find({})
        return res.json(allTasks)

    }catch(error){
        return res.status(500).json({error})
    }
}