const express = require("express");
const router = express.Router();

router.post("/login", async (req, res, next) => {
	try {
		const username = req.body.username;
		//res.status(201).json({ transfer: newTransfer });
	} catch (err) {
		next(err);
	}
});

router.post("/register", async (req, res, next) => {
	try {
		const username = req.body.username;
		//res.status(201).json({ transfer: newTransfer });
	} catch (err) {
		next(err);
	}
});

module.exports = router;
