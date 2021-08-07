var mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const StudentDetail = new Schema({
    id: ObjectId,
    fname: String,
    lname: String,
    rollno: Number,
    sub1: String
});

module.exports = mongoose.model('student',StudentDetail, 'student');