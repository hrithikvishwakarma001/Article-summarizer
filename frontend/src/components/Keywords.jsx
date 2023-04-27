import { Badge, Grid } from "@nextui-org/react";

export default function Keywords({keyArray}) {
  const colors = ["primary", "secondary", "success", "error", "warning"];
	return (
		<Grid.Container gap={2}>
			{keyArray.map((key, index) => (
				<Grid key={index}>
					<Badge
						enableShadow
						disableOutline
						color={colors[index % colors.length]}>
						{key}
					</Badge>
				</Grid>
			))}
		</Grid.Container>
	);
}	

