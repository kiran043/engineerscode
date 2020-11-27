const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

// parse application/json
app.use(bodyParser.json());

app.use(cors());

// storage engine
const storage = multer.diskStorage({
  destination: "../uploads/",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});
const upload = multer({
  storage: storage,
  limits: { fileSize: 100000000000000 },
});

//Create Database Connection
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "ecdata",
});

// connect to database
conn.connect((err) => {
  if (err) throw err;
  console.log("MySQL connected");
});

//................ creat a new Record
app.post("/api/create", upload.single("image"), (req, res) => {
  let data = {
    title: req.body.title,
    description: req.body.description,
    image: req.file.filename,
  };
  let sql = "INSERT INTO users SET ?";
  let query = conn.query(sql, data, (err, result) => {
    if (err) throw err;
    res.send(
      JSON.stringify({
        status: 200,
        error: null,
        response: "New Record is Added successfully",
      })
    );
  });
});

app.post("/api/reactstate", upload.single("image"), (req, res) => {
  let data1 = {
    title: req.body.title,
    description: req.body.description,
    image: req.file.filename,
  };
  let sql = "INSERT INTO reactstate SET ?";
  let query = conn.query(sql, data1, (err, result) => {
    if (err) throw err;
    res.send(
      JSON.stringify({
        status: 200,
        error: null,
        response: "New Record is Added successfully",
      })
    );
  });
});

//................End of  creat a new Record

// show all records
app.get("/api/view", (req, res) => {
  let sql = "SELECT * FROM users";
  let query = conn.query(sql, (err, result) => {
    if (err) throw err;
    res.send(JSON.stringify({ status: 200, error: null, response: result }));
  });
});
app.get("/api/reactstate", (req, res) => {
  let sql = "SELECT * FROM reactstate";
  let query = conn.query(sql, (err, result) => {
    if (err) throw err;
    res.send(JSON.stringify({ status: 200, error: null, response: result }));
  });
});

// show a single record
app.get("/api/view/:id", (req, res) => {
  let sql = "SELECT * FROM users WHERE id=" + req.params.id;
  let query = conn.query(sql, (err, result) => {
    if (err) throw err;
    res.send(JSON.stringify({ status: 200, error: null, response: result }));
  });
});

// .........delete the record
app.delete("/api/delete/:id", (req, res) => {
  let sql = "DELETE FROM users WHERE id=" + req.params.id + "";
  let query = conn.query(sql, (err, result) => {
    if (err) throw err;
    res.send(
      JSON.stringify({
        status: 200,
        error: null,
        response: "Record deleted successfully",
      })
    );
  });
});

app.delete("/api/reactstate/:id", (req, res) => {
  let sql = "DELETE FROM reactstate WHERE id=" + req.params.id + "";
  let query = conn.query(sql, (err, result) => {
    if (err) throw err;
    res.send(
      JSON.stringify({
        status: 200,
        error: null,
        response: "Record deleted successfully",
      })
    );
  });
});

// .........end of delete the record

app.listen(5050, () => {
  console.log("server started on port 5050...");
});
