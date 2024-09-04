const dummyTasks = [
    {
        id: 1,
        title: "test",
        description: "testwertyui",
        completed: true
    },
    {
        id: 2,
        title: "tytyest",
        description: "testweoiuytrrtyui",
        completed: true
    },
    {
        id: 3,
        title: "tzxcvbest",
        description: "testwe ghjrtyui",
        completed: true
    },
    {
        id: 4,
        title: "toiuytest",
        description: "test wertywertyui",
        completed: true
    },
    {
        id: 5,
        title: "tefghjst",
        description: "testwer ry ghj tyui",
        completed: true
    }
]

const mongoose = require('mongoose');
const Task = require('./Schema');
require('dotenv').config();

async function seedTasks() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

   

    // Insert dummy data
    await Task.insertMany(dummyTasks);
    console.log('Dummy task inserted successfully');

    // Disconnect after seeding
    mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding task:', error);
  }
}

seedTasks();