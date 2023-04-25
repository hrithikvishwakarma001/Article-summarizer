import axios from "axios";
const summarize = async (url, length) => {
	console.log('👻 -> file: summarize.api.js:2 -> summarize -> length:',typeof length, length)
	console.log('👻 -> file: summarize.api.js:2 -> summarize -> url:',url)
	const options = {
		method: "GET",
		url: "https://article-extractor-and-summarizer.p.rapidapi.com/summarize",
		params: { url, length:Number(length) },
		headers: {
			"X-RapidAPI-Key":
				"a5bb62a996mshf8a4e5a0ce86dd2p15fe59jsndf94771f5d2d",
			"X-RapidAPI-Host":
				"article-extractor-and-summarizer.p.rapidapi.com",
		},
	};

	const getData = async () => {
		console.log("waitng for response...");
		try {
			let res = await axios.request(options);
		  return res.data.summary;
		} catch (error) {
			return "Something went wrong! Please try again later.";
		}
	};
	 return getData();
};

export default summarize;
