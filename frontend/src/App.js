import { Container } from "@nextui-org/react";
import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import AllRoute from "./routes/AllRoute";

function App() {
	return (
		<Container lg>
			<NavBar />
			<AllRoute />
		</Container>
	);
}

export default App;
