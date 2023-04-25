import { Navbar, Link, Text, Avatar, Dropdown, Input } from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo";
import { SearchIcon } from "./SearchIcon";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
	const navigate = useNavigate();
	const collapseItems = [
		"Profile",
		"Dashboard",
		"Activity",
		"Analytics",
		"System",
		"Deployments",
		"My Settings",
		"Team Settings",
		"Help & Feedback",
		"Log Out",
	];

	return (
		<Navbar
			disableShadow
			css={{
				"border-bottom": "1px solid #eaeaea",
				mb: "$10",
			}}>
			<Navbar.Toggle showIn='xs' />
			<Navbar.Brand
				onClick={() => navigate("/")}
				
				css={{
					"@xs": {
						w: "12%",
					},
					"cursor": "pointer",
				}}>
					<AcmeLogo />
					<Text b color='inherit' hideIn='xs'>
						Summarizer
					</Text>
			</Navbar.Brand>
			<Navbar.Content
				enableCursorHighlight
				activeColor='error'
				hideIn='xs'
				variant='highlight-rounded'>
				<Navbar.Link href=''>Features</Navbar.Link>
				<Navbar.Link isActive href=''>
					Customers
				</Navbar.Link>
				<Navbar.Link href=''>Pricing</Navbar.Link>
				<Navbar.Link href=''>Company</Navbar.Link>
			</Navbar.Content>
			<Navbar.Content
				css={{
					"@xs": {
						w: "25%",
						justifyContent: "flex-end",
					},
				}}>
				<Navbar.Item
					css={{
						"@xsMax": {
							w: "100%",
							jc: "center",
						},
					}}>
					<Input
						clearable
						contentLeft={
							<SearchIcon
								fill='var(--nextui-colors-accents6)'
								size={16}
							/>
						}
						contentLeftStyling={false}
						css={{
							w: "100%",
							"@xsMax": {
								mw: "300px",
							},
							"& .nextui-input-content--left": {
								h: "100%",
								ml: "$4",
								dflex: "center",
							},
						}}
						placeholder='Search...'
					/>
				</Navbar.Item>
				<Dropdown placement='bottom-right'>
					<Navbar.Item>
						<Dropdown.Trigger>
							<Avatar
								bordered
								as='button'
								color='error'
								size='md'
								src='/hrithik.jpg'
							/>
						</Dropdown.Trigger>
					</Navbar.Item>
					<Dropdown.Menu
						aria-label='User menu actions'
						color='error'
						onAction={(actionKey) => console.log({ actionKey })}>
						<Dropdown.Item key='profile' css={{ height: "$18" }}>
							<Text b color='inherit' css={{ d: "flex" }}>
								Signed in as
							</Text>
							<Text b color='inherit' css={{ d: "flex" }}>
								hritik8008@gmail.com
							</Text>
						</Dropdown.Item>
						<Dropdown.Item key='settings' withDivider>
							My Settings
						</Dropdown.Item>
						<Dropdown.Item key='team_settings'>
							Team Settings
						</Dropdown.Item>
						<Dropdown.Item key='analytics' withDivider>
							Analytics
						</Dropdown.Item>
						<Dropdown.Item key='system'>System</Dropdown.Item>
						<Dropdown.Item key='configurations'>
							Configurations
						</Dropdown.Item>
						<Dropdown.Item key='help_and_feedback' withDivider>
							Help & Feedback
						</Dropdown.Item>
						<Dropdown.Item key='logout' withDivider color='error'>
							Log Out
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</Navbar.Content>
			<Navbar.Collapse>
				{collapseItems.map((item, index) => (
					<Navbar.CollapseItem
						key={item}
						activeColor='error'
						css={{
							color:
								index === collapseItems.length - 1
									? "$error"
									: "",
						}}
						isActive={index === 2}>
						<Link
							color='inherit'
							css={{
								minWidth: "100%",
							}}
							href=''>
							{item}
						</Link>
					</Navbar.CollapseItem>
				))}
			</Navbar.Collapse>
		</Navbar>
	);
}
