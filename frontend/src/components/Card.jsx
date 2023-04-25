import { Button, Card, Input, Loading, Text } from "@nextui-org/react";
import React from "react";
import summarize from "../api/summarize.api";

export default function Cards() {
	const [value, setValue] = React.useState(4);
	const [value2, setValue2] = React.useState("");
	const [response, setResponse] = React.useState("");
	const [loading, setLoading] = React.useState(false);
	const setInput = (setter) => (e) => {
		setter(e.target.value);
	};
	const handleClick = async () => {
		if(value2 === "" || value <=0){
			setResponse("Please enter a valid URL or length");
			return;
		}
		setLoading(true);
		try {
			let data = await summarize(value2, value);
			console.log(
				"👻 -> file: Card.jsx:14 -> handleClick -> data:",
				data
			);
			setResponse(data);
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
					onChange={setInput(setValue2)}
					value={value2}
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
					<Text
						size={20}
						css={{
							mb: "20px",
							w: "100%",
							p: "15px",
							// textAlign: "justify",
						}}>
						{response}
					</Text>
				) : (
					<Loading type='points' color='warning' />
				)}
			</Card.Body>
		</Card>
	);
}
