import Dashboard from "./Pages/Dashboard/Dashboard";
import Wallets from "./Pages/Wallets";
import Crypto_transactions from "./Pages/Crypto_transactions";
import Rial_transactions from "./Pages/Rial_transactions";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Tickets from "./Pages/Tickets";
import Buy from "./Pages/Buy";
import Sell from "./Pages/Sell";
import Orders from "./Pages/Orders";
import Open_transactions from "./Pages/Open_transactions";
import Trade_logs from "./Pages/Trade_logs";
import Credit_cards from "./Pages/Credit_cards";
import Invitation from "./Pages/Invitation";
import Authentication from "./Pages/Authentication";
import Password from "./Pages/Password";
import Login from "./Pages/Login";
import Forgot_password from "./Pages/Forgot_password";
import Sign_up from "./Pages/sign_up";

const AppLayout = () => (
	<>
		<Layout></Layout>
		<Routes>
			<Route path="/" element={<Dashboard />} />
			<Route path="wallets" element={<Wallets />} />
			<Route path="crypto-transactions" element={<Crypto_transactions />} />
			<Route path="rial-transactions" element={<Rial_transactions />} />
			<Route path="tickets" element={<Tickets />} />
			<Route path="buy" element={<Buy />} />
			<Route path="sell" element={<Sell />} />
			<Route path="orders" element={<Orders />} />
			<Route path="open-transactions" element={<Open_transactions />} />
			<Route path="trade-logs" element={<Trade_logs />} />
			<Route path="credit-cards" element={<Credit_cards />} />
			<Route path="invitation" element={<Invitation />} />
			<Route path="authentication" element={<Authentication />} />
			<Route path="password" element={<Password />} />
		</Routes>
	</>
);

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="forgot-password" element={<Forgot_password />} />
				<Route path="sign-up" element={<Sign_up />} />
				<Route path="/" element={<AppLayout />}>
					<Route path="/" element={<Dashboard />} />
					<Route path="wallets" element={<Wallets />} />
					<Route path="crypto-transactions" element={<Crypto_transactions />} />
					<Route path="rial-transactions" element={<Rial_transactions />} />
					<Route path="tickets" element={<Tickets />} />
					<Route path="buy" element={<Buy />} />
					<Route path="sell" element={<Sell />} />
					<Route path="orders" element={<Orders />} />
					<Route path="open-transactions" element={<Open_transactions />} />
					<Route path="trade-logs" element={<Trade_logs />} />
					<Route path="credit-cards" element={<Credit_cards />} />
					<Route path="invitation" element={<Invitation />} />
					<Route path="authentication" element={<Authentication />} />
					<Route path="password" element={<Password />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
