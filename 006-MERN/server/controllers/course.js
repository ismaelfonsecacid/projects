const Course = require('../models/course')
const image = require('../utils/image')

async function createCourse(req, res) {
    const course = new Course(req.body);

    const imagePath = image.getFileName(req.files.miniature);
    course.miniature = imagePath;

    try {
        const courseStored = await course.save();
        res.status(200).send(courseStored);
    } catch (error) {
        res.status(400).send({
            msg: 'Error al crear el curso'
        });
    }
}

async function getCourses(req, res) {
    try {
        const {
            page = 1, limit = 10
        } = req.query
        const options = {
            page: parseInt(page),
            limit: parseInt(limit)
        };

        const courses = await Course.paginate({}, options);

        res.status(200).send(courses);
    } catch (error) {
        res.status(400).send({
            msg: 'Error al obtener los cursos'
        });
    }
}

async function updateCourse(req, res) {
    const {
        id
    } = req.params;
    const courseData = req.body;
    if (req.files.miniature) {
        const imagePath = image.getFileName(req.files.miniature);
        courseData.miniature = imagePath;
    }
    try {
        await Course.findByIdAndUpdate(id, courseData);
        res.status(200).send({
            msg: 'Actualizacion correcta'
        })
    } catch (err) {
        res.status(400).send({
            msg: 'Error al actualizar el menu'
        })
    }
}

async function deleteCourse(req, res) {
    const {
        id
    } = req.params;

    try {
        await Course.findByIdAndDelete(id);
        res.status(200).send({
            msg: 'Course deleted'
        });
    } catch (error) {
        res.status(404).send({
            msg: 'Error al eliminar el curso'
        });
    }
}



module.exports = {
    createCourse,
    getCourses,
    updateCourse,
    deleteCourse


};