import { Button, Card, Input, Loading } from "@nextui-org/react";
import React from "react";
import summarize from "../api/summarize.api";
import Keywords from "./Keywords";
export default function Cards() {
	const [value, setValue] = React.useState(4);
	const [url, setUrl] = React.useState("");
	const [response, setResponse] = React.useState("");
	const [keyword, setKeyword] = React.useState("");
	const [loading, setLoading] = React.useState(false);
	const setInput = (setter) => (e) => {
		setter(e.target.value);
	};
	const handleClick = async () => {
		if (url === "" || value <= 0) {
			setResponse("Please enter a valid URL or length");
			return;
		}
		setLoading(true);
		try {
			let data = await summarize(url, value);
			console.log('👻 -> file: Card.jsx:10 -> Cards -> keyword:', keyword)
			console.log('👻 -> file: Card.jsx:29 -> handleClick -> summary:', response)
			setResponse(data.title+"\n\n"+data.summary);
			setKeyword(data.keywords);
			setLoading(false);
		} catch (error) {
			setResponse("Something went wrong! Please try again later.");
		}
	};
	return (
		<Card isHoverable variant='bordered' css={{ mw: "100%", mt: "50px" }}>
			<Card.Body>
				<Input
					required
					onChange={setInput(setUrl)}
					value={url}
					underlined
					labelLeft='URL'
					placeholder='https://www.@example.com'
					css={{ mb: "20px", w: "100%", p: "10px" }}
					contentRight={
						<div
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}>
							<Input
								onChange={setInput(setValue)}
								value={value}
								labelLeft='Length'
								width='100%'
								type='number'
								css={{ mb: "15px", mr: "20px" }}
								// defaultValue={5}
								// minLength={1}
								// maxLength={10}
							/>
							<Button
								onClick={handleClick}
								shadow
								color='warning'
								auto
								css={{ mb: "15px" }}>
								Summarize
							</Button>
						</div>
					}
					contentRightStyling={false}
				/>
				{!loading ? (
					<div
						style={{
							paddingLeft: "15px",
							paddingRight: "15px",
						}}>
						{response && <Keywords keyArray={keyword}/>}
						{response &&
							response.split("\n").map((item, i) => {
								return i === 0 ? (
									<p
										key={i}
										style={{
											textAlign: "justify",
											fontSize: "20px",
											marginBottom: "20px",
											fontWeight: "bold",
										}}>
										{item}
									</p>
								) : (
									<p
										key={i}
										style={{
											textAlign: "justify",
											fontSize: "20px",
											marginBottom: "20px",
										}}>
										{item}
									</p>
								);
							})}
					</div>
				) : (
					<Loading type='points' color='warning' />
				)}
			</Card.Body>
		</Card>
	);
}
