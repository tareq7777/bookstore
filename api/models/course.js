const sql = require('../../db');

var Course = (course) =>{
    this.id = course.id;
    this.name = course.name;
};

Course.getAllCourses = (result) =>{
    sql.query("SELECT * FROM corsesname", (err, res) =>{
        if(err){
            result(err, null);
        }else{
            result(null, res);
        }
    });
};

Course.getCourseById = (courseId, result) =>{
    sql.query("SELECT * FROM corsesname WHERE id="+courseId, (err, res) =>{
        if(err){
            result(err, null);
        }else{
            result(null, res);
        }
    });
}

module.exports = Course;