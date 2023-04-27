const express = require("express");
const connect = require("./db");
const userRouter = require("./router/user.route");
const summaryRouter = require("./router/summary.route");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
	res.send("Welcom to homepage!");
});
app.use("/api/users", userRouter);
app.use("/api/summary", summaryRouter);
app.listen(8080, async () => {
	try {
		await connect;
		console.log("mongodb connected successfully 👻");
	} catch (error) {
		console.error(error);
	}
	console.log("Server is running on port 8000");
});
