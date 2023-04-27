const axios = require("axios");

// const getData = async (req, res, next) => {
// 	console.log("👻 -> file: summary.js:14 -> getData -> req:", req.body);
// 	console.log("waitng for response...");
// 	const { url, length } = req.body;
// 	const options = {
// 		method: "GET",
// 		url: "https://article-extractor-and-summarizer.p.rapidapi.com/summarize",
// 		params: { url, length: Number(length) },
// 		headers: {
// 			"X-RapidAPI-Key":
// 				"a5bb62a996mshf8a4e5a0ce86dd2p15fe59jsndf94771f5d2d",
// 			"X-RapidAPI-Host":
// 				"article-extractor-and-summarizer.p.rapidapi.com",
// 		},
// 	};
// 	try {
// 		const response = await axios.request(options);
// 		console.log(
// 			"👻 -> file: summary.js:20 -> getData -> response:",
// 			response.data
// 		);
// 		res.status(200).send(response.data);
// 	} catch (error) {
// 		res.status(500).send(error);
// 	}
// };

// module.exports = getData;

const getData = async (req, res, next) => {
		console.log("👻 -> file: summary.js:14 -> getData -> req:", req.body);
		console.log("waitng for response...");
		const { url, length } = req.body;
	const options = {
		method: "GET",
		url: "https://article-summarizer.p.rapidapi.com/Article_url",
		params: {
			url,
			lang: "en",
		},
		headers: {
			"content-type": "application/octet-stream",
			"X-RapidAPI-Key":
				"a5bb62a996mshf8a4e5a0ce86dd2p15fe59jsndf94771f5d2d",
			"X-RapidAPI-Host": "article-summarizer.p.rapidapi.com",
		},
	};

	try {
		const response = await axios.request(options);
	   console.log(
			"👻 -> file: summary.js:53 -> getData -> response:",
			response.data.result
		);
	   return res.send(response.data.result)
	} catch (error) {
		 return res.status(500).send(error.message)
	}
};

module.exports = getData;
