const express = require('express');
const app = express();
const router = express.Router();
const Course = require('../models/course');

router.get('/', (req, res) => {
    Course.getAllCourses((err, course) =>{
        if(err){
            res.status(500).json({ error: err});
        }else{
            res.status(200).json(course);
        }
    });
});

router.get('/:id', (req, res) =>{
    const id = req.params.id;
    Course.getCourseById(id, (err, course) =>{
        if(course.length > 0){
            res.status(200).json(course);
        }else{
            res.status(404).json({ message: 'No Valid entry'});
        }
    })
})
// var courses = new Array;
//     courses=[
//         {id: 1,name: "php"},
//         {id: 2,name: "angular"},
//         {id: 3,name: "js"},
//         {id: 4,name: "css"},
//         {id: 5,name: "html"},
//     ]
// app.use(express.json());

// router.get('/',(req, res) => {
//     res.status(200).send(courses);
// });
// router.get('/:id',(req, res) => {
//     res.status(200).send("get with id:"+parseInt(req.params.id));
// });
// router.post('/',(req, res) => {

// });
module.exports = router;