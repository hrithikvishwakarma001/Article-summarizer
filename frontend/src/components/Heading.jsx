import { Text } from "@nextui-org/react";
import React from "react";

const Heading = () => {
	return (
		<>
			<Text
				size={45}
				css={{
					textGradient: "45deg, $yellow600 -20%, $red600 100%",
					textAlign: "center",
				}}
				weight='bold'>
				Welcome to Summarizer App !
			</Text>
			<Text
				size={25}
				css={{
					textAlign: "center",
				}}
				weight='semibold'>
				Enter the URL of the article you want to summarize and the
				length of the summary you want to get.
			</Text>
		</>
	);
};

export default Heading;
