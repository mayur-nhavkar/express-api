const studentContoller = require('../controller/studentContoller');

Router = require('express');


const router = Router();


// app.put("/student/:id", (req, res) => {
//   studentContoller.updateStudent(req, res).then((data)=>{
//    return res.send(data)
//   }).catch((error) =>{
//    res.send(error)
//   })   

// })
  

router.post("/student", (req, res) => {
  console.log("POST Method")
   studentContoller.addStudent(req, res).then((data)=>{
    return res.send(data)
   }).catch((error) =>{
    res.send(error)
   })
        
});

router.get("/students", (req, res) => {
  studentContoller.getAllStudent(req, res).then((data)=>{
   return res.send(data)
  }).catch((error) =>{
   res.send(error)
  })


       
});

