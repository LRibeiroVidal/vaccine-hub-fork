const { Client } = require("pg");
const { getDatabaseUri } = require("./config");

const db = new Client({ connectionString: getDatabaseUri() });

db.connect((err) => {
	if (err) {
		console.error(err.stack);
	} else {
		console.log("Success".blue);
	}
});

module.exports = db;
