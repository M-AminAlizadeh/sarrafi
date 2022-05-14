//*********************************** Imports ***********************************//
import { useState } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Dashboard from "./Pages/Main/Dashboard/Dashboard";
import Wallets from "./Pages/Main/Wallets/Wallets";
import Crypto_transactions from "./Pages/Main/Transactions/Crypto-transactions/Crypto_transactions";
import Rial_transactions from "./Pages/Main/Transactions/Rial-transactions/Rial_transactions";
import Layout from "./Pages/Layout";
import Tickets from "./Pages/Main/Tickets/Tickets";
import Buy from "./Pages/Buy-Sell/Buy/Buy";
import Sell from "./Pages/Buy-Sell/Sell/Sell";
import Orders from "./Pages/Buy-Sell/Orders/Orders";
import Credit_cards from "./Pages/User-profile/Credit-cards/Credit_cards";
import Toman_deposit from "./Pages/Main/Wallets/Toman-deposit/Toman_deposit";
import Toman_withdrawal from "./Pages/Main/Wallets/Toman-withdrawal/Toman_withdrawal";
import Invitation from "./Pages/User-profile/Invitation/Invitation";
import Authentication from "./Pages/User-profile/Authentication/Authentication";
import Password from "./Pages/User-profile/Password/Password";
import Login from "./Pages/Signup-Signin/Login/Login";
import Forgot_password from "./Pages/Signup-Signin/Forgot-password/Forgot_password";
import Sign_up from "./Pages/Signup-Signin/Sign-up/Sign_up";
import Two_factor_authentication from "./Pages/User-profile/Two-factor-authentication/Two_factor_authentication";
import TrendingDownIcon from "@material-ui/icons/TrendingDown";
import PermDeviceInformationIcon from "@material-ui/icons/PermDeviceInformation";
import "./app.css";
import "./deposit.css";
import "./withdrawal.css";

//*********************************** Currency Info API ***********************************//
// This a fake api and built just for testing
const API = {
	digital_currency_info: [
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
			tag_address_binance: "tag address binance",
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
	],
	user_info: {
		first_name: "علی",
		last_name: "غلام پور",
		phone_number: "09145567149",
		credit_cards: {
			"بانک ملی": "6274997087564232",
			"بانک صادرات": "90789970875612332",
		},
		balance: {
			rial_balance: 1244356,
			crypto_balance: {
				bitcoin: 0.0002,
				tether: 1.54,
				ethereum: 13,
			},
		},
	},
};

//*********************************** Deposit Function ***********************************//
const digital_currencies_arr = API.digital_currency_info;
const user_api = API.user_info;
let wallet_address;
let binance_wallet_address;
let currency_id;
const Deposit = () => {
	// Using params to send data from app.js to deposit page of each currency inside Wallet.js
	let { name } = useParams();
	// Get the currency id and wallet address from api and fetch it
	digital_currencies_arr.map((item) => {
		if (item.name == { name }.name) {
			wallet_address = item.address;
			currency_id = item.id;
			binance_wallet_address = item.tag_address_binance;
		}
	});
	// States
	const [text, set_text] = useState("کلیک و کپی");
	const [text_2, set_text_2] = useState("کلیک و کپی");
	const [address_input, set_address_input] = useState(wallet_address);
	const [binance_address_input, set_binance_address_input] = useState(
		binance_wallet_address
	);
	const [network_style, set_network_style] = useState(true);
	const [binance_network_style, set_binance__network_style] = useState(false);
	const [binance_smc_network_style, set_binance_smc_network_style] =
		useState(false);
	const [currency_value, set_currency_value] = useState("");
	const [currency_input, set_currency_input] = useState(true);
	const [txid_value, set_txid_value] = useState("");
	const [txid_input, set_txid_input] = useState(true);
	const [modal_toggle, set_modal_toggle] = useState(false);
	const [success_message, set_success_message] = useState(false);
	// States functions
	// This function copy the wallet address to clipboard
	const copy = (e) => {
		set_text("کپی شد");
		return navigator.clipboard.writeText(e.target.innerText);
	};
	const copy_2 = (e) => {
		set_text_2("کپی شد");
		return navigator.clipboard.writeText(e.target.innerText);
	};
	// This function change the wallet address when user click on diffrent networks inside one currency
	const change_address = (e) => {
		if (e.target.id == 1) {
			// change address input
			set_address_input(digital_currencies_arr[currency_id - 1].address);
			// change network link style
			set_network_style(true);
			set_binance__network_style(false);
			set_binance_smc_network_style(false);
		} else if (e.target.id == 2) {
			// change address input
			set_address_input(
				digital_currencies_arr[currency_id - 1].address_binance
			);
			// change network link style
			set_network_style(false);
			set_binance__network_style(true);
			set_binance_smc_network_style(false);
		} else {
			// change address input
			set_address_input(
				digital_currencies_arr[currency_id - 1].address_smartchain
			);
			// change network link style
			set_network_style(false);
			set_binance__network_style(false);
			set_binance_smc_network_style(true);
		}
	};
	// This function sets currency value
	const currency_value_getter = (e) => {
		set_currency_value(e.target.value);
	};
	// This function sets txid value
	const txid_value_getter = (e) => {
		set_txid_value(e.target.value);
	};
	// This function checks the Form
	const form_checker = (e) => {
		e.preventDefault();
		// Checks currency value input
		if (currency_value == "") {
			set_currency_input(false);
		} else {
			set_currency_input(true);
		}
		// Checks txid value input
		if (txid_value == "") {
			set_txid_input(false);
		} else {
			set_txid_input(true);
		}
		// Checks both of them and show success message
		console.log(currency_input, txid_input);
		if (currency_value !== "" && txid_value !== "") {
			set_success_message(true);
		}
	};
	// This function opens txid modal
	const txid_modal = () => {
		// console.log("hi");
		set_modal_toggle(true);
	};
	// This function closes txid modal
	const close_modal = () => {
		set_modal_toggle(false);
	};

	// Here is what we see inside each deposit page
	return (
		<div className="deposit-page-container component_box_shadow">
			{digital_currencies_arr.map((item) => {
				if (item.name == { name }.name) {
					return (
						<div>
							{/* Modal box container */}
							{modal_toggle ? (
								<div className="modal-box-container component_box_shadow">
									<span className="modal-box-header">TxID چیست؟</span>
									<p className="modal-box-description">
										لینک تراکنش یا همان TxID یک عبارت 64 کاراکتری بوده که ترکیبی
										از اعداد و حروف است و جهت رهگیری تراکنش استفاده می شود.
										بعنوان مثال:
										3fc9153b7bdffcdfae092092320612c9c3c94351f600d80ad75f3915909b488b
										ممکن است TxID را کمی با تأخیر دریافت نمایید، لذا پس از انجام
										تراکنش چند دقیقه صبر کرده و پس از دریافت درخواست را ثبت
										نمایید. چنان چه TxID را به درستی وارد نکرده باشید امکان صحت
										سنجی خودکار وجود نخواهد داشت بنابراین ممکن است تأیید درخواست
										شما بیش از حد معمول زمان نیاز داشته باشد. دقت نمایید هنگامی
										که شما انتقال را انجام می دهید، مقداری نیز به عنوان کارمزد
										توسط سرویس دهنده کیف پول شما کسر می شود، اما شما می بایست
										مقداری که هنگام انتقال وارد کرده اید را در بخش واریز به ما
										وارد نمایید.
									</p>
									<button
										className="modal-box-btn"
										onClick={() => {
											close_modal();
										}}
									>
										{" "}
										متوجه شدم!
									</button>
								</div>
							) : (
								""
							)}
							{/* Page Header */}
							<p className="deposit-header">
								{" "}
								<TrendingDownIcon />
								واریز {item.persian_name}
							</p>
							{/*  currency icon container */}
							<div className="deposit-currency-icon-container">
								<img src={item.icon_source} />
								<p>
									مبلغ واریزی را به کیف پول زیر منتقل کنید و سپس فرم زیر را
									تکمیل نمایید.
								</p>
								<hr />
							</div>
							{/* Network Container */}
							<div className="deposit-networks-container">
								<span
									id="1"
									onClick={(e) => {
										change_address(e);
									}}
									className={network_style ? "deposite-active-link" : ""}
								>{`شبکه ${item.persian_name} (${item.abbr}) `}</span>
								<span
									id="2"
									onClick={(e) => {
										change_address(e);
									}}
									className={
										binance_network_style ? "deposite-active-link" : ""
									}
								>
									شبکه بایننس (BEP2)
								</span>
								<span
									onClick={(e) => {
										change_address(e);
									}}
									className={
										binance_smc_network_style ? "deposite-active-link" : ""
									}
									id="3"
								>
									{" "}
									بایننس اسمارت چین (BEP20)
								</span>
							</div>
							{/* QR Container */}
							<div className="deposit-qr-container">
								<img src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX10238032.jpg" />
								<span>برای بزرگ نمایی کلیک کنید</span>
							</div>

							{/* Form */}
							<form className="deposit-form">
								{/* Wallet Address Container */}
								<div className="deposit-wallet-address-container">
									<p>آدرس کیف پول:</p>
									<div>
										{/* Currency Wallet Address */}
										<div className="invitation-link-and-number tooltip-x">
											<span className="tooltiptext-x ">{text}</span>
											<span onClick={(e) => copy(e)}>{address_input}</span>
										</div>
										<img src="https://img.icons8.com/dusk/25/000000/copy.png" />
									</div>
								</div>{" "}
								{binance_network_style ? (
									<div className="deposit-wallet-address-container">
										<p>تگ/ممو آدرس کیف پول:</p>
										<div>
											{/* Tag Wallet Address */}
											<div className="invitation-link-and-number tooltip-x">
												<span className="tooltiptext-x">{text_2}</span>
												<span onClick={(e) => copy_2(e)}>
													{binance_address_input}
												</span>
											</div>
											<img src="https://img.icons8.com/dusk/25/000000/copy.png" />{" "}
										</div>
									</div>
								) : (
									""
								)}
								{/* Balance Div */}
								<div className="deposit-form-crypto-balance">
									موجودی: <span>0</span> {item.abbr}
								</div>
								{/* Currency Value Container */}
								<div className="deposit-currency-value-container">
									<p>مقدار {item.persian_name}:</p>
									<div className={currency_input ? "" : "error-input-border"}>
										<img src={item.icon_source} />
										<input
											type="number"
											onChange={(e) => {
												currency_value_getter(e);
											}}
										/>
										<span>{item.abbr}</span>
									</div>
									{currency_input ? (
										""
									) : (
										<span className="error-message">
											مقدار {item.persian_name} را درج کنید
										</span>
									)}
								</div>
								{/* TXID Link Container */}
								<div className="deposit-currency-value-container">
									<p>لینک تراکنش (TxID)</p>
									<div className={txid_input ? "" : "error-input-border"}>
										<input
											type="text"
											placeholder="TxID"
											onChange={(e) => {
												txid_value_getter(e);
											}}
										/>
									</div>
									{txid_input ? (
										""
									) : (
										<span className="error-message">
											لینک تراکنش را درج کنید
										</span>
									)}
									<p className="txid-modal-link">
										<span
											onClick={() => {
												txid_modal();
											}}
										>
											TxID چیست؟
										</span>
									</p>
								</div>
								{/* File Upload Container */}
								<div className="deposit-file-upload-conatiner">
									<p>
										عکس رسید واریز از کیف پول مبدا اخیاری{" "}
										<span>
											(اختیاری و جهت سرعت بخشیدن به زمان تایید تراکنش)
										</span>
									</p>
									<label htmlFor="form-upload" className="form-upload">
										<span>انتخاب فایل</span>
										<img src="https://img.icons8.com/metro/20/000000/upload.png" />
									</label>
									<input
										type="file"
										name="form-upload"
										id="form-upload"
										accept=".jpg,.jpeg,.png"
									/>
									<p>
										{" "}
										پسوندهای مجاز: jpg, jpeg, png حداکثر حجم فایل 5 مگابایت
									</p>
								</div>
								{/* Submit Container */}
								<div className="deposit-submit-btn-container">
									<button
										type="submit"
										onClick={(e) => {
											form_checker(e);
										}}
									>
										ثبت درخواست
									</button>
									{/* Success message */}
									{success_message ? (
										<div className="success-message-container">
											<span className="success-message">
												درخواست شما با موفقیت ثبت شد
											</span>
										</div>
									) : null}
									<hr />
								</div>
							</form>

							<div className="deposit-notice-container">
								<p className="deposit-notice-header">
									<img src="https://img.icons8.com/emoji/36/000000/warning-emoji.png" />{" "}
									نکات و هشدارها
								</p>
								<p>
									برای واریز {item.persian_name} به ما، ابتدا میزان{" "}
									{item.persian_name} مورد نظر را جهت واریز در فیلد مقدار{" "}
									{item.persian_name} وارد نمایید، پس از آگاهی از مقدار معادل آن{" "}
									به تومان، دقیقا معادل مقداری که در فیلد مقدار{" "}
									{item.persian_name} وارد کرده اید را به آدرس کیف پول ما که در
									همین صفحه ارائه شده است انتقال دهید و سپس لینک یا شماره
									تراکنشی که به شما ارائه می شود را در بخش لینک تراکنش وارد
									نموده و دکمه «ثبت درخواست» را کلیک نمایید.
								</p>
							</div>
						</div>
					);
				}
			})}
		</div>
	);
};

//*********************************** Withdrawal Function ***********************************//
const Withdrawal = () => {
	// Using params to send data from app.js to withdrawal page of each currency inside Wallet.js
	let { name } = useParams();
	// Here is what we see inside each withdrawal page
	return (
		<div>
			{digital_currencies_arr.map((item) => {
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
};
// Routing System in App.js
// AppLayout is for not allowing layout.js to render inside login-signup-forgot_password pages.
const AppLayout = () => (
	<>
		<Layout
			user_api={user_api}
			currencies_api={digital_currencies_arr}
		></Layout>
		<Routes>
			<Route path="/" element={<Dashboard />} />
			<Route
				path="wallets"
				element={<Wallets data={digital_currencies_arr} />}
			/>
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
					<Route
						path="wallets"
						element={<Wallets data={digital_currencies_arr} />}
					/>
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
