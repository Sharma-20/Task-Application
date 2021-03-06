require('../src/db/mongoose')
const User = require('../src/models/user')

//612e280fc2779860802f7941 Promise Chaining
// User.findByIdAndUpdate('612e280fc2779860802f7941', {age: 1}).then((user) => {
//     console.log(user)
//     return User.countDocuments({age: 1})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })
// Using Async /await
const updateAgeAndCount = async(id,age) => {
    const user =await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('612e280fc2779860802f7941', 2).then((count) => {
    console.log(count)
}).catch((e) => {
  console.log(e)
})
