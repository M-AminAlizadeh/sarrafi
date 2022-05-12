import Dashboard from "./Pages/Dashboard/Dashboard";
import Wallets from "./Pages/Wallets";
import Crypto_transactions from "./Pages/Crypto_transactions";
import Rial_transactions from "./Pages/Rial_transactions";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Layout from "./Pages/Layout";
import Tickets from "./Pages/Tickets";
import Buy from "./Pages/Buy";
import Sell from "./Pages/Sell";
import Orders from "./Pages/Orders";
import Credit_cards from "./Pages/Credit_cards";
import Toman_deposit from "./Pages/Toman_deposit";
import Toman_withdrawal from "./Pages/Toman_withdrawal";
import Invitation from "./Pages/Invitation";
import Authentication from "./Pages/Authentication";
import Password from "./Pages/Password";
import Login from "./Pages/Login";
import Forgot_password from "./Pages/Forgot_password";
import Sign_up from "./Pages/Sign_up";
import Two_factor_authentication from "./Pages/Two_factor_authentication";
import TrendingDownIcon from "@material-ui/icons/TrendingDown";
import { useState } from "react";
import PermDeviceInformationIcon from "@material-ui/icons/PermDeviceInformation";

// API **********************************************

const api = [
	{
		id: 1,
		name: "bitcoin",
		persian_name: "بیت کوین",
		abbr: "BTC",
		icon_source: "https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=022",
		world_price: 39309.13,
		website_price: "1,108,517,466",
		address: "bitcoin address",
		address_binance: "bitcoin binance address",
		address_smartchain: "bitcoin smart chain",
	},
	{
		id: 2,
		name: "tether",
		persian_name: "تتر",
		abbr: "USDT",
		icon_source: "https://cryptologos.cc/logos/tether-usdt-logo.svg?v=022",
		world_price: 39309.13,
		website_price: "1,108,517,466",
		address: "tether address",
		address_binance: "tether binance address",
		address_smartchain: "tether smart chain",
	},
	{
		id: 3,
		name: "ethereum",
		persian_name: "اتریوم",
		abbr: "ETH",
		icon_source: "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=022",
		world_price: 39309.13,
		website_price: "1,108,517,466",
		address: "ethereum address",
		address_binance: "ethereum binance address",
		address_smartchain: "ethereum smart chain",
	},
];

// API **********************************************

// Deposit Function Starts%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

function Deposit() {
	let { name } = useParams();
	let address;
	let id;
	api.map((item) => {
		if (item.name == { name }.name) {
			address = item.address;
			id = item.id;
		}
	});
	const [text, set_text] = useState("کلیک و کپی");
	const copy = (e) => {
		set_text("کپی شد");

		return navigator.clipboard.writeText(e.target.innerText);
	};
	const [text_2, set_text_2] = useState("کلیک و کپی");
	const copy_2 = (e) => {
		set_text_2("کپی شد");

		return navigator.clipboard.writeText(e.target.innerText);
	};

	const [address_input, set_address_input] = useState(address);

	const change_address = (e) => {
		console.log(id);
		if (e.target.id == 1) {
			set_address_input(api[id - 1].address);
		} else if (e.target.id == 2) {
			set_address_input(api[id - 1].address_binance);
		} else {
			set_address_input(api[id - 1].address_smartchain);
		}
	};
	// We can use the `useParams` hook here to access
	// the dynamic pieces of the URL.
	return (
		<div>
			{api.map((item) => {
				if (item.name == { name }.name) {
					return (
						<div dir="rtl">
							<h3>
								{" "}
								واریز {item.persian_name} <TrendingDownIcon />
							</h3>
							<img src={item.icon_source} style={{ width: "100px" }} />
							<p>
								مبلغ واریزی را به کیف پول زیر منتقل کنید و سپس فرم زیر را تکمیل
								نمایید.
							</p>
							<hr />
							<div>
								<span
									id="1"
									onClick={(e) => {
										change_address(e);
									}}
								>{`شبکه ${item.persian_name} (${item.abbr}) `}</span>
								<span
									style={{ border: "1px solid blue" }}
									id="2"
									onClick={(e) => {
										change_address(e);
									}}
								>
									شبکه بایننس (BEP2)
								</span>
								<span
									onClick={(e) => {
										change_address(e);
									}}
									id="3"
								>
									{" "}
									بایننس اسمارت چین (BEP20)
								</span>
							</div>
							<img
								src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX10238032.jpg"
								style={{ width: "50px" }}
							/>
							<div>
								<h6>آدرس کیف پول:</h6>
								<span
									className="invitation-link-and-number tooltip-x"
									style={{ cursor: "pointer", border: "1px solid red" }}
								>
									<span className="tooltiptext-x">{text}</span>
									<span onClick={(e) => copy(e)}>{address_input}</span>
								</span>
								<img src="https://img.icons8.com/dusk/30/000000/copy.png" />{" "}
								<h6>تگ/ممو آدرس کیف پول:</h6>
								<span
									className="invitation-link-and-number tooltip-x"
									style={{ cursor: "pointer", border: "1px solid red" }}
								>
									<span
										className="tooltiptext-x"
										style={{ border: "1px solid blue" }}
									>
										{text_2}
									</span>
									<span onClick={(e) => copy_2(e)}>508540284</span>
								</span>
								<img src="https://img.icons8.com/dusk/30/000000/copy.png" />{" "}
								<div>
									موجودی <span>0</span> {item.abbr}
								</div>
								<p>مقدار {item.persian_name}</p>
								<div>
									<img src={item.icon_source} style={{ width: "30px" }} />
									<input type="number" />
									{item.abbr}
								</div>
								<div>
									<p>لینک تراکنش (TxID)</p>
									<input type="text" />
									<p>TxID چیست؟</p>
								</div>
								<div>
									<p>
										عکس رسید واریز از کیف پول مبدا اخیاری (اختیاری و جهت سرعت
										بخشیدن به زمان تایید تراکنش)
									</p>
									<input type="file" />
									<p>
										{" "}
										پسوندهای مجاز: jpg, jpeg, png حداکثر حجم فایل 5 مگابایت
									</p>
									<input type="submit" value="ثبت درخواست"></input>
								</div>
							</div>
							<h5>
								{" "}
								نکات و هشدارها <PermDeviceInformationIcon />
							</h5>
							<p>
								برای واریز {item.persian_name} به ما، ابتدا میزان{" "}
								{item.persian_name} مورد نظر را جهت واریز در فیلد مقدار{" "}
								{item.persian_name} وارد نمایید، پس از آگاهی از مقدار معادل آن{" "}
								به تومان، دقیقا معادل مقداری که در فیلد مقدار{" "}
								{item.persian_name} وارد کرده اید را به آدرس کیف پول ما که در
								همین صفحه ارائه شده است انتقال دهید و سپس لینک یا شماره تراکنشی
								که به شما ارائه می شود را در بخش لینک تراکنش وارد نموده و دکمه
								«ثبت درخواست» را کلیک نمایید.
							</p>
						</div>
					);
				}
			})}
		</div>
	);
}

// Deposit Function Ends%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// Withdrawal Function Starts%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

function Withdrawal() {
	let { name } = useParams();
	return (
		<div>
			{api.map((item) => {
				if (item.name == { name }.name) {
					return (
						<div dir="rtl">
							<h3>
								{" "}
								برداشت {item.persian_name} <TrendingDownIcon />
							</h3>
							<img src={item.icon_source} style={{ width: "100px" }} />
							<div style={{ border: "1px solid purple" }}>
								موجودی <span>0</span> {item.abbr}
							</div>
							<div style={{ border: "1px solid brown" }}>
								<p>مقدار {item.persian_name}</p>
								<div>
									<img src={item.icon_source} style={{ width: "30px" }} />
									<input type="number" />
									{item.abbr}
								</div>
							</div>
							<p>موجودی قابل برداشت: 0{item.abbr}</p>
							<p>برداشت روزانه رمز ارز: معادل 0 از 0 تومان</p>
							<div>
								<div>
									<p>شبکه انتقال</p>
									<select>
										<option>
											شبکه {item.persian_name} ({item.abbr})
										</option>
										<option>شبکه بایننس (BNP2)</option>
										<option>بایننس اسمارت چین (BNP20)</option>
									</select>
								</div>
								<div>
									<p>کارمزد شبکه</p>
									<div
										style={{ border: "1px solid red", height: "40px" }}
									></div>
									<p>
										کارمزد انتقال مربوط به ثبت تراکنش در شبکه‌ی بیت کوین بوده و
										وبسایت ما در آن ذینفع نیست.
									</p>
									<p>
										اگر آدرس کیف پول شما در باینسس باشد کارمزد تراکنش صفر خواهد
										بود.
									</p>
								</div>
								<p>آدرس کیف پول مقصد یا گیرنده</p>
								<input type="text" />
								<p>
									نکته مهم:درج کردن آدرس اشتباه ممکن است باعث از دست رفتن منابع
									مالی شما شود.
								</p>
								<div>
									<input type="submit" value="ثبت درخواست"></input>
								</div>
								<hr />
							</div>
						</div>
					);
				}
			})}
		</div>
	);
}

// Withdrawal Function Ends%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

const AppLayout = () => (
	<>
		<Layout></Layout>
		<Routes>
			<Route path="/" element={<Dashboard />} />
			<Route path="wallets" element={<Wallets data={api} />} />
			<Route path="wallets/deposit/:name" element={<Deposit />} />
			<Route path="wallets/withdrawal/:name" element={<Withdrawal />} />
			<Route path="crypto-transactions" element={<Crypto_transactions />} />
			<Route path="rial-transactions" element={<Rial_transactions />} />
			<Route path="tickets" element={<Tickets />} />
			<Route path="buy" element={<Buy />} />
			<Route path="toman-deposit" element={<Toman_deposit />} />
			<Route path="toman-withdrawal" element={<Toman_withdrawal />} />
			<Route path="sell" element={<Sell />} />
			<Route path="orders" element={<Orders />} />
			<Route path="credit-cards" element={<Credit_cards />} />
			<Route path="invitation" element={<Invitation />} />
			<Route path="authentication" element={<Authentication />} />
			<Route path="password" element={<Password />} />
			<Route
				path="two-factor-authentication"
				element={<Two_factor_authentication />}
			/>
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
					<Route path="wallets" element={<Wallets data={api} />} />
					<Route path="wallets/deposit/:name" element={<Deposit />} />
					<Route path="wallets/withdrawal/:name" element={<Withdrawal />} />
					<Route path="crypto-transactions" element={<Crypto_transactions />} />
					<Route path="rial-transactions" element={<Rial_transactions />} />
					<Route path="tickets" element={<Tickets />} />
					<Route path="buy" element={<Buy />} />
					<Route path="toman-deposit" element={<Toman_deposit />} />
					<Route path="toman-withdrawal" element={<Toman_withdrawal />} />
					<Route path="sell" element={<Sell />} />
					<Route path="orders" element={<Orders />} />
					<Route path="credit-cards" element={<Credit_cards />} />
					<Route path="invitation" element={<Invitation />} />
					<Route path="authentication" element={<Authentication />} />
					<Route path="password" element={<Password />} />
					<Route
						path="two-factor-authentication"
						element={<Two_factor_authentication />}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
