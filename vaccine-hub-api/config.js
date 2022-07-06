require("dotenv").config();

const PORT = process.env.PORT;
const DATABASE_USER = process.env.DATABASE_USER;
const DATABASE_NAME = process.env.DATABASE_NAME;
const DATABASE_PORT = process.env.DATABASE_PORT;
const DATABASE_PASS = process.env.DATABASE_PASS;
const DATABASE_HOST = process.env.DATABASE_HOST;

module.exports = {
	PORT,
	DATABASE_USER,
	DATABASE_NAME,
	DATABASE_PORT,
	DATABASE_PASS,
	DATABASE_HOST,
};
