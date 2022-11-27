const mongodb = require('mongodb').MongoClient;
const url = process.env.MONGO_URI
const bson = require('bson');
const answers = []
const fs = require("fs")

mongodb.connect(url,function(err,db){
    if (err) {
        console.log(err);
    }
    console.log('Connected successfully to server');
    var dbo = db.db("test")
    var myobj = dbo.collection("scores")
    var myobj2 = dbo.collection("quizzes")
    const quizid = "63824508b4591b2ce00f0068"
    const bsonObjectId2 = new bson.ObjectID(quizid)
    myobj2.find({_id:bsonObjectId2}).toArray(function(err,res){
        if(err) throw err
        else{
            // console.log(res);
            answers.push({quiz_name:res[0].name})
        }
    })


    const id = '638246b8b4591b2ce00f0081';
    const bsonObjectId = new bson.ObjectId(id);
    myobj.find({_id: bsonObjectId }).toArray(function(err,res){
        if(err) throw err
        else{
            ans_array = res[0].answers
            var percentage;
            let true_count = 0
            ans_array.forEach((item)=>{
                if(item==true){
                    true_count+=1
                }
            })
            percentage = (true_count/(ans_array.length))*100
            answers.push({quizid:res[0].quizId,userid:res[0].userId,percentage:percentage})
            console.log(answers);
            var json = JSON.stringify(answers)
            fs.writeFile('answers_2.json',json,'utf8',function(err){
                if (err) throw err;
                else 
                    console.log("complete");
            })
        }
        db.close()
    })
    
})

module.exports = answers

  // Use connect method to connect to the server


