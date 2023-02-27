class CommonQuery {
    addData(model, records){
        return new Promise ((resolve, reject)=>{
            model.create(records, (err, result)=>{
                if(err){
                    reject(err);
                }else {
                    resolve(result);
                }
            });
        });
    }

    findData(model, cond){
        return new Promise((resolve, reject)=>{
            model.find(cond).exec((err, data)=>{
                if(err){
                    reject(err);
                }else{
                    resolve(data);
                }
            });
        });
    }

    softDeleteData(model, cond) {
      return new Promise((resolve, reject)=>{
        model.updateOne(cond, { isDeleted: true }).exec((err, data)=>{
          if(err){
              reject(err);
          }else{
              resolve(data);
          }
      });
  });
}

    deleteData(model, cond) {
      return new Promise((resolve, reject)=>{
        model.deleteOne(cond).exec((err, data)=>{
          if(err){
              reject(err);
          }else{
              resolve(data);
          }
      });
  });
}

async softDeleteData(model, cond) {
  try {
    const result = await model.updateOne(cond, { isDeleted: true }).exec();
    return result;
  } catch (error) {
    throw error;
  }
}

  
  fetchDataByFindOne(model, cond) {
    return new Promise((resolve, reject) => {
      model
        .findOne(cond)
        .exec((err, data) => {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        });
    });
  }
 
  
    UpdateData(model, cond, data) {
      return new Promise((resolve, reject) => {
        model
          .updateOne(cond, data)
          .exec((err, data) => {
            if (err) {
              reject(err);
            } else {
              resolve(data);
            }
          });
      });
    }
}


exports.Query = new CommonQuery();
