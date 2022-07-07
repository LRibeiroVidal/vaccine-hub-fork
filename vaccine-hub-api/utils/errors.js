class NotFoundError extends Error {
	constructor(message = "Not Found") {
		super(message, 404);
		this.message = message;
		this.status = 404;
	}
}

class BadRequestError extends Error {
	constructor(message = "Bad Request") {
		super(message, 400);
		this.message = message;
		this.status = 400;
	}
}

class UnauthorizedAccessError extends Error {
	constructor(message = "Unauthorized Access") {
		super(message, 401);
		this.message = message;
		this.status = 401;
	}
}

module.exports = {
	NotFoundError,
	BadRequestError,
	UnauthorizedAccessError,
};
