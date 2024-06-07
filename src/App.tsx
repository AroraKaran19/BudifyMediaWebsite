import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import "./App.css"
import Home from "./pages/Home"

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</Router>
	)
}

export default App