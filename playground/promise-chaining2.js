require('../src/db/mongoose')
const Task = require('../src/models/task')
const User = require('../src/models/user')

// Task.findByIdAndDelete("613009060618ee6fd45a8015").then((task) =>{
//     console.log(task)
//     return Task.countDocuments({completed: false})
// }). then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async(id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: false})
    return count
}

deleteTaskAndCount('61301e9175d34d4c0831f7e9').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})


