const express = require('express');
const ejs = require('ejs');
const util = require('util');
const mysql = require('mysql');
const bodyParser = require('body-parser');


const PORT = 8001;
const DB_HOST = 'localhost';
const DB_USER = 'root';
const DB_PASSWORD = 'password';
const DB_NAME = 'university_web';
const DB_PORT = 3306;


var connection = mysql.createConnection({
	host: DB_HOST,
	user: DB_USER,
	password: DB_PASSWORD,
	database: DB_NAME,
	port: DB_PORT
});

// we do this to use async await with mysql (see: https://stackoverflow.com/questions/50093144/using-async-await-with-a-mysql-database)
connection.query = util.promisify(connection.query).bind(connection);

connection.connect(function (err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('Booom! You are connected');

});


const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', async (req, res) => {
	const studentCount = await connection.query('SELECT COUNT(*) as count FROM Student');
	const academicCount = await connection.query('SELECT COUNT(*) as count FROM Academic');
	const departmentCount = await connection.query('SELECT COUNT(*) as count FROM Department');
	const courseCount = await connection.query('SELECT COUNT(*) as count FROM Course');

	res.render('index', {
		studentCount: studentCount[0].count,
		academicCount: academicCount[0].count,
		departmentCount: departmentCount[0].count,
		courseCount: courseCount[0].count
	});
});


app.get('/students', async (req, res) => {
	const students = await connection.query('SELECT * FROM Student INNER JOIN Course  ON student.Stu_Course = course.Crs_Code');
	res.render('students', { students: students });

});

app.get('/students/edit/:id', async (req, res) => {
	const courses = await connection.query('SELECT Crs_Code, Crs_Title  FROM Course');
	const student = await connection.query('SELECT * FROM Student WHERE URN = ?', [req.params.id]);
	res.render('student_edit', { student: student[0], courses: courses, message: '' });
});

app.get("/students/view/:id", async (req, res) => {
	const student = await connection.query(
		"SELECT * FROM Student INNER JOIN Course  ON student.Stu_Course = course.Crs_Code WHERE URN = ?",
		[req.params.id]
	);
	res.render("student_view", { student: student[0] });
});

app.post('/students/edit/:id', async (req, res) => {
	const updatedStudent = req.body;

	const getStudent = () => {
		return connection.query('SELECT * FROM Student WHERE URN = ?', [req.params.id]);

	}

	const getCourse = () => {
		return connection.query('SELECT * FROM Course WHERE Crs_Code = ?', [updatedStudent.Stu_Course]);
	}


	if (isNaN(updatedStudent.Stu_Phone) || updatedStudent.Stu_Phone.length != 11) {
		const courses = await getCourse();
		const student = await getStudent();
		res.render('student_edit', { student: student[0], courses: courses, message: 'error not updated, number not valid' }); return;

	}

	try {
		await connection.query('UPDATE Student SET ? WHERE URN = ?', [updatedStudent, req.params.id]);
		const courses = await getCourse();
		const student = await getStudent();
		res.render('student_edit', { student: student[0], courses: courses, message: 'student updated' });

	} catch (error) {
		console.log(error);
		const courses = await getCourse();
		const student = await getStudent();
		res.render('student_edit', { student: student[0], courses: courses, message: 'error not updated' });
	}
});


app.listen(PORT, () => {
	console.log(`Example app listening at http://localhost:${PORT}`);
});

