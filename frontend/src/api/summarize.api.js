import axios from "axios";
const BASE_URL = "http://localhost:8000/api/summary/";
const summarize = async (url, length) => {
	try {
		const response = await axios.post(BASE_URL, { url, length });
		console.log(
			"👻 -> file: summarize.api.js:32 -> summarize -> response:",
			response
		);
		return response.data
	} catch (error) {
		return error.message;
	}
};

export default summarize;
