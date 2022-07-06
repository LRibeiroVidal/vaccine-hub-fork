const express = require("express");
const app = express();
const morgan = require("morgan");
const port = process.env.PORT || 3001;
const { NotFoundError } = require("./utils/errors");
const CONFIG = require("./config.js");

app.listen(port, () => {
	console.log(`🚀 Server listening on port ` + port);
});

app.use(morgan("tiny"));
app.use(express.json());

app.get("/", (req, res) => {
	res.status(200).send({ ping: "pong" });
});

app.use((req, res, next) => {
	return next(new NotFoundError("Not Found!!"));
});

app.use((error, req, res, next) => {
	const status = error.status || 500;
	const message = error.message;

	return res.status(status).json({
		error: { message, status },
	});
});
