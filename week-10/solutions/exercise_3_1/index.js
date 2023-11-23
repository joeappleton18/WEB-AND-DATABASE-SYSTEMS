const express = require('express');
const ejs = require('ejs');
const mysql = require('mysql');
const util = require("util");
const PORT = 8000;
const DB_HOST = 'localhost';
const DB_USER = 'root';
const DB_NAME = 'university_web';
const DB_PASSWORD = '';
const DB_PORT = 3306;


var connection = mysql.createConnection({
	host: DB_HOST,
	user: DB_USER,
	password: DB_PASSWORD,
	database: DB_NAME,
	port: DB_PORT,
});

/*
 * we do this to use async await with mysql
 * don't worry about this for now, just understand that we need it; otherwise * we end up with a lot of callback functions. 
 */
connection.query = util.promisify(connection.query).bind(connection);

/**
 * connect to the database. 
 * If you see an error, check the database name, username, and password are correct. This probably because you are using your own MySql instance.
 */
connection.connect(function (err) {
	if (err) {
		console.error("error connecting: " + err.stack);
		return;
	}
	console.log("Booom! You are connected");
});

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', async (req, res) => {

	res.render('index', {
		studentCount: 6,
		academicCount: 20,
		departmentCount: 20,
		courseCount: 15
	});
});


app.get("/students", async (req, res) => {
	/**
	 * get all students from the database. we use an inner join to get the course name. don't display the course code, display the course name! 
	 */
	const students = await connection.query(
		"SELECT * FROM Student INNER JOIN Course  ON student.Stu_Course = course.Crs_Code"
	);
	res.render("students", { students: students });
});

app.get("/students/view/:id", async (req, res) => {
	const student = await connection.query(
		"SELECT * FROM Student INNER JOIN Course  ON student.Stu_Course = course.Crs_Code WHERE URN = ?",
		[req.params.id]
	);
	res.render("student_view", { student: student[0] });
});

app.get('/students/edit/:id', async (req, res) => {
	res.render('student_edit', { student: {}, courses: [], message: '' });
});



app.listen(PORT, () => {
	console.log(`Example app listening at http://localhost:${PORT}`);
});

