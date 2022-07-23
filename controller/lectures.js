const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "courses",
  waitForConnections: true,
  connectionLimit: 5,
  queueLimit: 0,
});

module.exports = {
  getAllLectures: function (req, res, next) {
    pool.getConnection(function (err, connection) {
      if (err) throw err; //not connected

      const sql = "SELECT * FROM lectures";

      connection.query(sql, function (sqlErr, result, fields) {
        if (sqlErr) throw sqlErr;

        res.send(result);
      });
    });
  },
};
