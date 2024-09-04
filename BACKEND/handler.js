const Task = require("./Schema")



exports.createtask = async (req, res) => {
    try {
        res.send("Posted Successfully");
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

