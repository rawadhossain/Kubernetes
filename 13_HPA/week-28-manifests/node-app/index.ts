import express from "express";

const app = express();
const BIG_VALUE = 5000000000;

// A very cpu intensive task
app.get("/", (req, res) => {
	let ctr = 0;
	for (let i = 0; i < BIG_VALUE; i++) {
		ctr += 1;
	}
	res.send("Hello World!");
});

app.listen(3000, () => {
	console.log("Server is running on port 3000");
});
