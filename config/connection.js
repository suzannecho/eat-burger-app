const mysql = require("mysql");
let connection;
if (process.env.JAWSDB_URL) {
   connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
   connection = mysql.createConnection({
       port: 3306,
       host: "qbct6vwi8q648mrn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
       username: "ztyr4etbe1owanc2",
       password: "h8196emctn337pj1",
       database: "xr5c4806g9jaapc0"
   });
}
connection.connect(function (err) {
   if (err) {
       console.error("error connecting: " + err.stack);
       return;
   }
   console.log("connected as id: " + connection.threadId);
});
module.exports = connection;