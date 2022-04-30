//CRUD CREATE READ UPDATE DELETE

const{ MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id.id.length)
// console.log(id.getTimestamp())

// console.log(id.toHexString().length)

MongoClient.connect(connectionURL, { useNewUrlParser: true}, (error, client)=> {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)
// Update the document

    //  db.collection('users').updateOne({_id: new ObjectID( "61290125ef3186242cb78191")
    //  },{
    //      $set:{
    //          name: 'Mike'
    //      },
    //      $inc:{
    //          age: 1
    //      }
    //  }).then((result) => {
    //      console.log(result)
    //  }).catch((error) => {
    //      console.log(error)
    //  })
     


     //updateMany

    //  db.collection('tasks').updateMany({
    //      completed: false
    // },{
    //     $set:{
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })

    //delete

     db.collection('users').deleteMany({
         age:27
     }).then((result) => {
         console.log(result)
     }).catch((error) => {
         console.log(error)
     })



     //deleteOne

     db.collection('tasks').deleteOne({
        description: 'clean the house'
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
    })












  //find one document
//     db.collection('users').findOne({_id: new ObjectID( "61290bf76481207420588914")}, (error, user) => {
//         if (error) {
//             return console.log('Unable to fetch')
//         }
//         console.log(user)
//     })
// //find multiple document search by user name,by age, 
//      db.collection('users').find({age: 27}).toArray((error, user) => {
//      console.log(user)
//   })

//   db.collection('tasks').findOne({_id: new ObjectID( "612907b2f37bb26a7c413fc3")}, (error, task) => {
//     console.log(task)
// })

// db.collection('tasks').find({completed: false}).toArray((error, task) => {
//     console.log(task)
//  })

  


    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //  db.collection('users').insertOne({
    //     _id: id, 
    //     name: 'Saumya',
    //      age : 27
    //  }, (error,result) => {
    //      if (error) {
    //          return console.log('Unable to insert user')
    //      }
    //       console.log(result.ops)
    
    //  })
    // db.collection('users').insertMany([
    //     {
    //          name: 'ramu',
    //          age : 27
    //      }, {
    //          name: 'shyam',
    //          age: 27
    //      }
    //     ], (error, result) => {
    //          if (error) {
    //              return console.log('Unable to insert documents!')
    //          }
    //          console.log(result.ops)
             
    //      })

    //Insert 3 documents into the task collection

    //    db.collection('tasks').insertMany([
    //        {
    //            description: 'clean the house',
    //            completed: true
    //        },{
    //         description: 'Renew Inspection',
    //         completed: true
    //     },{
    //         description: 'Pot Plants',
    //         completed: false

    //        }
    //    ], (error,result) => {
    //        if (error) {
    //            return console.log('Unable to insert tasks!')
    //        }
    //        console.log(result.ops)
    //    })

