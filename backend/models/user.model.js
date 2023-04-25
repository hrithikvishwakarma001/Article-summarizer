const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	name: String,
	email: { type: String, required: true, unique: true },
	password: String,
},{versionKey: false});

const User = mongoose.model("user", userSchema);

module.exports = User;
