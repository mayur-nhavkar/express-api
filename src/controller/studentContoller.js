const studentModel = require('../models/studentModel');
const commonQuery = require( '../shared/commonQuery');

class StudentController{

  async getAllStudent(req, res) {
      return new Promise(async (resolve, reject) => {
        try {
             let data = await commonQuery.Query.findData(studentModel, {isDelete: false} )
              if (data.length != 0) {
              return resolve({ status: 200, data: data });
      }
      else {
          return reject(({ status: 404, error: "Student data Not Found" }));
      }
    }catch (e) {
        return reject(({ status: 500, error: "Something Went Wrong" }));
    }
    
});

};

async addStudent (req, res){
      return new Promise(async (resolve, reject) => {
        try {
          let addData = req.body;
        let data = await commonQuery.Query.addData(studentModel, addData )
        if (data) {
          return resolve({ status: 200, data: data });
      }
      else {
          return reject(({ status: 404, error: "Student data not saved" }));
      }
      }catch (e) {
        return reject(({ status: 500, error: "Something Went Wrong" }));
    }
});

}

async getStudentById(req, res){
      return new Promise(async (resolve, reject) => {
        try {
        let data = await commonQuery.Query.fetchDataByFindOne(studentModel, {studentID: req.params.id} )
        if (data) {
          return resolve({ status: 200, data: data });
      }
      else {
          return reject(({ status: 404, error: "Data Not saved" }));
      }
      }catch (e) {
        return reject(({ status: 500, error: "Something Went Wrong" }));
    }
});
}

async deleteStudent(req, res) {
  return new Promise(async (resolve, reject) => {
    try {
      let data = await commonQuery.Query.deleteData(studentModel, { studentID: req.params.id });
      if (data) {
        return resolve({ status: 200, message: "Record deleted successfully" });
      } else {
        return reject(({ status: 404, error: "Record not found" }));
      }
    } catch (e) {
      return reject(({ status: 500, error: "Internal server error" }));
    }
  });
}

async softDeleteStudent(req, res) {
  return new Promise(async (resolve, reject) => {
  try {
    let data = await commonQuery.Query.softDeleteData(studentModel, { studentID: req.params.id });
    if (data) {
      return resolve({ status: 200, message: "Record deleted successfully" });
    } else {
      return reject(({ status: 404, error: "Record not found" }));
    }
  } catch (e) {
    return reject(({ status: 500, error: "Server error" }));
  }
});
}


async updateStudent (req, res){
  return new Promise(async (resolve, reject) => {
    try {
      let addData = req.body
    let data = await commonQuery.Query.UpdateData(studentModel, {studentID:req.params.id}, addData )
    if (data) {
      return resolve({ status: 200, data: data });
  }
  else {
      return reject(({ status: 404, error: "Error in saving" }));
  }
  }catch (e) {
    return reject(({ status: 500, error: "Something Went Wrong" }));
}
});




}
   
}

module.exports = new StudentController();
