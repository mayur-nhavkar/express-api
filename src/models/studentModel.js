const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const studentSchema = new Schema({
    firstName : {type:String},
    lastName : {type:String},
    age:{type:Number},
    isDelete:{type:Boolean, default:false}
})

const studentModel = mongoose.model('student', studentSchema);

module.exports = studentModel;