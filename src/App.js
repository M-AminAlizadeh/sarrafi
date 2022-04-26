import Dashboard from "./Pages/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";

function App() {
	return (
		<BrowserRouter>
			<Layout></Layout>
			<Routes>
				<Route path="/" element={<Dashboard />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
