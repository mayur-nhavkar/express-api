const express = require('express');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/apiRoutes');
const connect = require('./shared/mongodb');
const studentContoller = require('./controller/studentContoller');

class server{

    startServer = () =>{
        //Constants
        const PORT = 5000;
        const app = express();

    connect.connectMongoDB();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));


    // Implementing routes


app.post("/student", (req, res) => {
    studentContoller.addStudent(req, res).then((data)=>{
     return res.send(data)
    }).catch((error) =>{
     res.send(error)
    })
         
 });

 
 app.get("/students/:id", (req, res) => {
   studentContoller.getStudentById(req, res).then((data)=>{
    return res.send(data)
   }).catch((error) =>{
    res.send(error)
   })   
 });


 app.get("/students", (req, res) => {
   studentContoller.getAllStudent(req, res).then((data)=>{
    return res.send(data)
   }).catch((error) =>{
    res.send(error)
   })
        
 });
 
 app.delete("/student/:id", (req, res) => {
  studentContoller.deleteStudent(req, res).then((data) => {
    return res.send(data);
  }).catch((error) =>{
    res.send(error)
   })   
 });

 app.delete("/student/soft/:id", (req, res) => {
  studentContoller.softDeleteStudent(req, res).then((data) => {
    return res.send(data);
  }).catch((error) =>{
    res.send(error)
   })   
 });

 
 app.put("/student/:id", (req, res) => {
   studentContoller.updateStudent(req, res).then((data)=>{
    return res.send(data)
   }).catch((error) =>{
    res.send(error)
   })   
 });
 


    app.listen(PORT, ()=>{
        console.log(`Running on localhost ${PORT}`);
    });

    
    }
}

module.exports = new server();