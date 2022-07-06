const db = require("../db");

class User {
	static async login(username, password) {
		// TODO: post username and password to API endpoint
	}

	static async register(email, password) {
		//TODO: post username and password to API endpoint
		if (fetchUserByEmail(email)) {
			throw new Error("User already registered");
		}

		const query = `INSERT INTO users (email, password) VALUES ($1, $2)`;
		const response = await db.query(query, [email.toLowerCase(), password]);

		return response.rows[0];
	}

	static async fetchUserByEmail(email) {
		if (!email) throw new Error("Please provide a valid email address");

		const query = `SELECT * FROM users WHERE email = $1`;
		const result = await db.query(query, [email.toLowerCase()]);

		const user = result.rows[0];

		return user;
	}
}

module.exports = User;
