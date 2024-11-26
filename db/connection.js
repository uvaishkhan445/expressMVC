const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "express",
});

conn.connect(function (err, conn) {
  if (err) throw err;
  console.log("Connected to the MySQL server.");
});

// Export a query function for executing SQL queries
const query = (sql, values) => {
  return new Promise((resolve, reject) => {
    conn.query(sql, values, (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};

module.exports = { query };
