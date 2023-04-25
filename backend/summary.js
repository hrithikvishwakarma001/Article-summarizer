const axios = require("axios");

const options = {
	method: "GET",
	url: "https://article-extractor-and-summarizer.p.rapidapi.com/summarize",
	params: { url: "https://cloud.mongodb.com/", length: "4" },
	headers: {
		"X-RapidAPI-Key": "a5bb62a996mshf8a4e5a0ce86dd2p15fe59jsndf94771f5d2d",
		"X-RapidAPI-Host": "article-extractor-and-summarizer.p.rapidapi.com",
	},
};

const getData = async () => {
	console.log("waitng for response...");
	try {
		let res = await axios.request(options);
		console.log(res.data.summary);
	} catch (error) {
		console.error(error);
	}
};
getData();
