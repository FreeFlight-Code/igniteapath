module.exports = {
//get all courses
    allCourses: function (req, res, next){
        let db = req.app.get('db')
        db.allCourses().then(allCourses=>{
            res.status(200).send(allCourses)
        })
    },
//get course
    singleCourse: function (req, res, next){
        let  courseId  = req.params.id;
        let db = req.app.get('db')
        db.singleCourse(courseId).then(course=>{
            res.status(200).send(course)
        })
    },
//create course
    createCourse: function (req, res, next){
        let { name, description, price } = req.body;
        let db = req.app.get('db')
        db.createCourse([name, description, price]).then(course=>{
            console.log('course added to database');
            res.status(200).send(true);
        })
    },
//update course
    editCourse: function (req, res, next){
        let { id, name, description, price } = req.body;
        let db = req.app.get('db')
        db.editCourse([id, name, description, price]).then(course=>{
            res.status(200).send(true)
        }).catch((err)=>{
            res.status(400).send(err)
        })
    },
//delete course
    deleteCourse: function (req, res, next){
        let id = req.params.id;
        let db = req.app.get('db')
        db.deleteCourse(id).then(_=>{
            res.status(200).send(true)
        }).catch((err)=>{
            res.status(400).send(err)
        })
    }
}