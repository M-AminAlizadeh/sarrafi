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
import Sign_up from "./Pages/Signup-Signin/Sign-up/Sign_up";
import Two_factor_authentication from "./Pages/User-profile/Two-factor-authentication/Two_factor_authentication";
import { Helmet } from "react-helmet";
import TrendingDownIcon from "@material-ui/icons/TrendingDown";
import _404 from "./Pages/404/_404";
import "./app.css";
import "./deposit.css";
import "./withdrawal.css";
//*********************************** Currency Info API ***********************************//
const website_name = "نام وبسایت";
const dashboard_title = `داشبورد - ${website_name}`;
const wallets_title = `کیف پول ها - ${website_name}`;
const toman_deposit_title = `واریز تومانی - ${website_name}`;
const toman_withdrawal_title = `برداشت تومانی - ${website_name}`;
const crypto_transactions_title = `تراکنش های رمز ارز - ${website_name}`;
const rial_transactions_title = `تراکنش های ریالی - ${website_name}`;
const tickets_title = `پشتیبانی - ${website_name}`;
const buy_title = `خرید ارز - ${website_name}`;
const sell_title = `فروش ارز - ${website_name}`;
const orders_title = `سفارشات - ${website_name}`;
const credit_cards_title = `کارت های بانکی - ${website_name}`;
const invitation_title = `کسب درامد - ${website_name}`;
const auth_title = `سطح کاربری و احراز هویت - ${website_name}`;
const password_title = `تغییر رمز عبور - ${website_name}`;
const two_factor_auth_title = `ورود ۲ مرحله ای - ${website_name}`;
const _404_title = "صفحه ی مورد نظر یافت نشد";
const login_title = `ورود`;
const signup_title = `ثبت نام`;
// This a fake api and built just for testing
const API = {
	digital_currency_info: [
		{
			id: 1,
			name: "bitcoin",
			persian_name: "بیت کوین",
			abbr: "BTC",
			icon_source: "https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=022",
			world_price: 23.5753,
			toman_price: 755000000,
			website_price: 755000000,
			our_inventory: 0.1,
			address: "bitcoin address",
			address_binance: "bitcoin binance address",
			address_smartchain: "bitcoin smart chain",
			tag_address_binance: "tag address binance",
			qr_code:
				"https://img.icons8.com/external-dreamstale-green-shadow-dreamstale/64/000000/external-qr-code-finances-and-shopping-dreamstale-green-shadow-dreamstale.png",
			binance_qr_code:
				"https://img.icons8.com/external-tulpahn-outline-color-tulpahn/64/000000/external-qr-code-mobile-user-interface-tulpahn-outline-color-tulpahn.png",
			smartchain_qr_code:
				"https://img.icons8.com/external-kmg-design-outline-color-kmg-design/64/000000/external-qr-code-protection-and-security-kmg-design-outline-color-kmg-design.png",
		},
		{
			id: 2,
			name: "tether",
			persian_name: "تتر",
			abbr: "USDT",
			icon_source: "https://cryptologos.cc/logos/tether-usdt-logo.svg?v=022",
			world_price: 39309.13,
			toman_price: 1378,
			website_price: 97,
			our_inventory: 0.6,
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
			toman_price: 1378,
			website_price: 934,
			our_inventory: 1,
			address: "ethereum address",
			address_binance: "ethereum binance address",
			address_smartchain: "ethereum smart chain",
		},
		{
			id: 4,
			name: "Stellar",
			persian_name: "استلار",
			abbr: "XLM",
			icon_source: "https://cryptologos.cc/logos/stellar-xlm-logo.svg?v=022",
			world_price: 823,
			toman_price: 92834,
			website_price: 907,
			our_inventory: 8,
			address: "Stellar address",
			address_binance: "Stellar binance address",
			address_smartchain: "Stellar smart chain",
		},
		{
			id: 5,
			name: "Dogecoin",
			persian_name: "دوج کوین",
			abbr: "DOGE",
			icon_source: "https://cryptologos.cc/logos/dogecoin-doge-logo.svg?v=022",
			world_price: 900,
			toman_price: 2351,
			website_price: 321,
			our_inventory: 976,
			address: "Dogecoin address",
			address_binance: "Dogecoin binance address",
			address_smartchain: "Dogecoin smart chain",
		},
		{
			id: 6,
			name: "Binance Coin",
			persian_name: "بایننس کوین",
			abbr: "BNB",
			icon_source: "https://cryptologos.cc/logos/bnb-bnb-logo.svg?v=022",
			world_price: 658,
			toman_price: 98456,
			website_price: 92123312,
			our_inventory: 0.1,
			address: "Binance Coin address",
			address_binance: "Binance Coin binance address",
			address_smartchain: "Binance Coin smart chain",
		},
		{
			id: 7,
			name: "Monero",
			persian_name: "مونرو",
			abbr: "XMR",
			icon_source: "https://cryptologos.cc/logos/monero-xmr-logo.svg?v=022",
			world_price: 300,
			toman_price: 8,
			website_price: 8.9784,
			our_inventory: 78.3,
			address: "Monero address",
			address_binance: "Monero binance address",
			address_smartchain: "Monero smart chain",
		},
		{
			id: 8,
			name: "Litecoin",
			persian_name: "لیت کوین",
			abbr: "LTC",
			icon_source: "https://cryptologos.cc/logos/litecoin-ltc-logo.svg?v=022",
			world_price: 534,
			toman_price: 89,
			website_price: 0.23,
			our_inventory: 11,
			address: "Litecoin address",
			address_binance: "Litecoin binance address",
			address_smartchain: "Litecoin smart chain",
		},
	],
	user_info: {
		first_name: "علی",
		last_name: "غلام پور",
		phone_number: "09145567149",
		credit_cards: [
			{
				bank_name: "بانک ملی",
				card_number: "6274997087564232",
				account_number: "0200858411607627488",
				shaba_number: "IR62 0530 0000 0020 0858 4116 07",
				situation: "ثبت شده",
			},
			{
				bank_name: "بانک صادرات",
				card_number: "90789970875612332",
				account_number: "0200858411607627488",
				shaba_number: "IR62 0530 0000 0020 0858 4116 07",
				situation: "ثبت نشده",
			},
		],
		balance: {
			rial_balance: 1244356,
			crypto_balance: {
				bitcoin: 0.0002,
				tether: 1.54,
				ethereum: 13,
			},
		},
		notifications: [
			{
				title: "پاسخ پشتیبانی",
				body: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
			},
			{
				title: " پشتیبانی",
				body: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
			},
			{
				title: " پشتیبانی",
				body: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
			},
			{
				title: " پشتیبانی",
				body: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
			},
		],
		orders: [
			{
				id: 1,
				number: "1",
				currency: "بیت کوین",
				type: "واریز",
				amount: "100",
				balance: "0.0065",
				datetime: "1400/1/20",
				situation: "موفق",
				details:
					"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
			},
			{
				id: 2,
				number: "2",
				currency: "بیت کوین",
				type: "واریز",
				amount: "100",
				balance: "0.0065",
				datetime: "1400/1/20",
				situation: "موفق",
				details:
					"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
			},
			{
				id: 3,
				number: "3",
				currency: "بیت کوین",
				type: "واریز",
				amount: "100",
				balance: "0.0065",
				datetime: "1400/1/20",
				situation: "موفق",
				details:
					"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
			},
		],
		tickets: [
			{
				id: 1,
				number: "1",
				title: " عدم انتقال وجه",
				unit: "پیگیری سفارش",
				situation: "در حال بررسی",
				datetime: "1400/2/30",
				details: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
			},
		],
	},
};

// Notification data
const notifications = API.user_info.notifications;
//*********************************** Deposit Function ***********************************//
const digital_currencies_arr = API.digital_currency_info;
const user_api = API.user_info;
let wallet_address;
let binance_wallet_address;
let currency_id;
let currency_persian_name;
let qr_code;
let binance_qr_code;
let smartchain_qr_code;
const Deposit = () => {
	// Crypto deposit class
	class Crypto_deposit {
		constructor(crypto_value, txid_link, file) {
			this.crypto_value = crypto_value;
			this.txid_link = txid_link;
			this.file = file;
		}
	}
	const crypto_data = () => {
		const crypto_obj = new Crypto_deposit(
			currency_value,
			txid_value,
			file_value
		);
		console.log(crypto_obj);
	};
	// Using params to send data from app.js to deposit page of each currency inside Wallet.js
	let { name } = useParams();
	// Get the currency id and wallet address from api and fetch it
	digital_currencies_arr.map((item) => {
		if (item.name == { name }.name) {
			wallet_address = item.address;
			currency_id = item.id;
			binance_wallet_address = item.tag_address_binance;
			currency_persian_name = item.persian_name;
			qr_code = item.qr_code;
			binance_qr_code = item.binance_qr_code;
			smartchain_qr_code = item.smartchain_qr_code;
		}
	});
	// Currency deposit title
	const currency_deposit_title =
		"واریز" + " " + currency_persian_name + " - " + website_name;
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
	const [qr_magnify, set_qr_magnify] = useState(false);
	const [currency_qr_code, set_curency_qr_code] = useState(qr_code);
	const [binance_currency_qr_code, set_binance_curency_qr_code] =
		useState(binance_qr_code);
	const [smartchain_currency_qr_code, set_smartchain_curency_qr_code] =
		useState(smartchain_qr_code);
	const [qrcode, set_qrcode] = useState(currency_qr_code);
	const [file_value, set_file_value] = useState("");
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
			set_qrcode(currency_qr_code);
		} else if (e.target.id == 2) {
			// change address input
			set_address_input(
				digital_currencies_arr[currency_id - 1].address_binance
			);
			// change network link style
			set_network_style(false);
			set_binance__network_style(true);
			set_binance_smc_network_style(false);
			set_qrcode(binance_currency_qr_code);
		} else {
			// change address input
			set_address_input(
				digital_currencies_arr[currency_id - 1].address_smartchain
			);
			// change network link style
			set_network_style(false);
			set_binance__network_style(false);
			set_binance_smc_network_style(true);
			set_qrcode(smartchain_currency_qr_code);
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
		// Checks both of them and shows success message
		if (currency_value !== "" && txid_value !== "") {
			set_success_message(true);
			crypto_data();
		}
	};
	// This function opens txid modal
	const txid_modal = () => {
		set_modal_toggle(true);
	};
	// This function closes txid modal
	const close_modal = () => {
		set_modal_toggle(false);
	};
	// This function magnifies qrcode image
	const magnify = (e) => {
		set_qr_magnify(true);
	};

	// Here is what we see inside each deposit page
	return (
		<div className="deposit-page-container component_box_shadow">
			{digital_currencies_arr.map((item, index) => {
				if (item.name == { name }.name) {
					return (
						<div key={index}>
							{/* Page title */}
							<Helmet>
								<title>{currency_deposit_title}</title>
							</Helmet>
							{/* Modal box container */}
							{modal_toggle ? (
								<div className="modal-box-container component_box_shadow">
									<span className="modal-box-header">TxID چیست؟</span>
									<p
										className="modal-box-description"
										style={{ width: "100%" }}
									>
										لینک تراکنش یا همان TxID یک عبارت 64 کاراکتری بوده که ترکیبی
										از اعداد و حروف است و جهت رهگیری تراکنش استفاده می شود.
										بعنوان مثال: 3fc9153b7bdffcdf
										ae092092320612c9c3c94351f600d80ad75f3915909b488b ممکن است
										TxID را کمی با تأخیر دریافت نمایید، لذا پس از انجام تراکنش
										چند دقیقه صبر کرده و پس از دریافت درخواست را ثبت نمایید.
										چنان چه TxID را به درستی وارد نکرده باشید امکان صحت سنجی
										خودکار وجود نخواهد داشت بنابراین ممکن است تأیید درخواست شما
										بیش از حد معمول زمان نیاز داشته باشد. دقت نمایید هنگامی که
										شما انتقال را انجام می دهید، مقداری نیز به عنوان کارمزد توسط
										سرویس دهنده کیف پول شما کسر می شود، اما شما می بایست مقداری
										که هنگام انتقال وارد کرده اید را در بخش واریز به ما وارد
										نمایید.
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
							) : null}
							{/* Modal QR Code  */}
							{qr_magnify ? (
								<div className="modal-box-container component_box_shadow">
									<div>
										<img
											src={qrcode}
											style={{
												width: "100%",
											}}
										/>
									</div>
									<button
										className="modal-box-btn"
										onClick={() => {
											set_qr_magnify(false);
										}}
									>
										{" "}
										بستن
									</button>
								</div>
							) : null}
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
								<img
									src={qrcode}
									onClick={(e) => {
										magnify(e);
									}}
								/>
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
									<label htmlFor="form-upload">
										<span>انتخاب فایل</span>
									</label>
									<input
										type="file"
										name="form-upload"
										className="deposit-file-input"
										onChange={(e) => {
											set_file_value(e.target.value);
										}}
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
								</div>
								{/* Success message */}
								{success_message ? (
									<div className="success-message-container">
										<span className="success-message">
											درخواست شما با موفقیت ثبت شد
										</span>
									</div>
								) : null}
								<hr />
							</form>
							{/* Notice Container */}
							<div className="deposit-notice-container">
								<p className="deposit-notice-header">
									<img src="https://img.icons8.com/emoji/36/000000/warning-emoji.png" />{" "}
									نکات و هشدارها
								</p>
								<p>
									برای واریز {item.persian_name} به ما، ابتدا میزان{" "}
									{item.persian_name} مورد نظر را جهت واریز در فیلد مقدار{" "}
									{item.persian_name} وارد نمایید، پس از آگاهی از مقدار معادل آن
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
	let transfer_network_default;
	// Crypto withdrawal class
	function Crypto_withdrawal(
		crypto_value,
		transfer_network,
		wallet_value,
		tag_address_value
	) {
		this.crypto_value = crypto_value;
		this.transfer_network = transfer_network;
		this.wallet_value = wallet_value;
		this.tag_address_value = tag_address_value;
	}
	const crypto_data = () => {
		const crypto_obj = new Crypto_withdrawal(
			currency_value,
			transfer_network,
			wallet_value,
			tag_address_value
		);
		console.log(crypto_obj);
	};
	// Using params to send data from app.js to withdrawal page of each currency inside Wallet.js
	let { name } = useParams();
	// Get the currency id and wallet address from api and fetch it
	digital_currencies_arr.map((item) => {
		if (item.name == { name }.name) {
			wallet_address = item.address;
			currency_id = item.id;
			binance_wallet_address = item.tag_address_binance;
			currency_persian_name = item.persian_name;
		}
	});
	// Currency withdrawal title
	const currency_withdrawal_title =
		"برداشت" + " " + currency_persian_name + " - " + website_name;
	// States
	const [currency_value, set_currency_value] = useState("");
	const [currency_input, set_currency_input] = useState(true);
	const [wallet_value, set_wallet_value] = useState("");
	const [wallet_input, set_wallet_input] = useState(true);
	const [tag_address_value, set_tag_address_value] = useState("");
	const [tag_address_input, set_tag_address_input] = useState(true);
	const [success_message, set_success_message] = useState(false);
	const [drop_down_check, set_drop_down_check] = useState(false);
	const [transfer_network, set_transfer_network] = useState(
		transfer_network_default
	);

	// States Functions
	// This Function Gets Currency Input's Value
	const currency_value_getter = (e) => {
		set_currency_value(e.target.value);
	};
	// This Function Gets Wallet Input's Value
	const wallet_value_getter = (e) => {
		set_wallet_value(e.target.value);
	};
	//  This Function Gets Tag Wallet Input's value
	const tag_address_value_getter = (e) => {
		set_tag_address_value(e.target.value);
	};
	// This Function Checks The Form
	const form_checker = (e) => {
		e.preventDefault();
		// Currency input
		if (currency_value !== "") {
			set_currency_input(true);
		} else {
			set_currency_input(false);
		}
		// Wallet input
		if (wallet_value !== "") {
			set_wallet_input(true);
		} else {
			set_wallet_input(false);
		}
		// Tag address input
		if (tag_address_value !== "") {
			set_tag_address_input(true);
		} else {
			set_tag_address_input(false);
		}
		if (currency_value !== "" && wallet_value !== "") {
			set_success_message(true);
			crypto_data();
		}
	};
	// This function toggles tag address input
	const toggle_tag_input = (e) => {
		if (e.target.value == "شبکه بایننس (BNP2)") {
			set_drop_down_check(true);
		} else {
			set_drop_down_check(false);
		}
	};
	// Here is what we see inside each withdrawal page
	return (
		<div className="deposit-page-container component_box_shadow">
			{digital_currencies_arr.map((item, index) => {
				if (item.name == { name }.name) {
					return (
						<div key={index}>
							{/* Page title */}
							<Helmet>
								<title>{currency_withdrawal_title}</title>
							</Helmet>
							{/* Page Header */}
							<p className="deposit-header">
								{" "}
								<TrendingDownIcon />
								برداشت {item.persian_name}
							</p>
							{/*  currency icon container */}
							<div className="deposit-currency-icon-container">
								<img src={item.icon_source} />
							</div>
							{/* Form */}
							<form action="" className="deposit-form">
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
								</div>
								{currency_input ? (
									""
								) : (
									<span className="error-message">
										مقدار {item.persian_name} را درج کنید
									</span>
								)}
								<div className="deposit-currency-value-description">
									<p>
										موجودی قابل برداشت:
										<span> 0</span>
										{item.abbr}
									</p>
									<p>برداشت روزانه رمز ارز: معادل 0 از 0 تومان</p>
								</div>
								{/* Transfer Network Container */}
								<div className="withdrawal-transfer-network-container">
									<p>شبکه انتقال</p>
									<select
										onChange={(e) => {
											toggle_tag_input(e);
											set_transfer_network(e.target.value);
										}}
									>
										<option selected disabled value="">
											شبکه انتقال را انتخاب کنید
										</option>
										<option>
											{
												(transfer_network_default = `	شبکه ${item.persian_name} (${item.abbr})`)
											}
										</option>
										<option>شبکه بایننس (BNP2)</option>
										<option>بایننس اسمارت چین (BNP20)</option>
									</select>
								</div>
								{/* Network Wage */}
								<div className="withdrawal-network-wage-container">
									<p>کارمزد شبکه</p>
									<div className="withdrawal-network-wage">
										<span>0.0002{item.abbr}</span>
									</div>
									<div className="withdrawal-network-wage-description">
										<p>
											کارمزد انتقال مربوط به ثبت تراکنش در شبکه‌ی بیت کوین بوده
											و وبسایت ما در آن ذینفع نیست.
										</p>
										<p>
											اگر آدرس کیف پول شما در باینسس باشد کارمزد تراکنش صفر
											خواهد بود.
										</p>
									</div>
								</div>
								{/* Currency Wallet Address Container */}
								<div className="withdrawal-currency-wallet-address-container">
									<p>آدرس کیف پول مقصد یا گیرنده</p>
									<input
										type="text"
										placeholder="آدرس کیف پول"
										onChange={(e) => {
											wallet_value_getter(e);
										}}
										className={wallet_input ? "" : "error-input-border"}
									/>
									{wallet_input ? (
										""
									) : (
										<span className="error-message">
											آدرس کیف پول را درج کنید
										</span>
									)}
									<p>
										نکته مهم:درج کردن آدرس اشتباه ممکن است باعث از دست رفتن
										منابع مالی شما شود.
									</p>
								</div>
								{/* Tag Wallet Address Container */}
								{drop_down_check ? (
									<div className="withdrawal-currency-wallet-address-container">
										<p>تگ/ممو آدرس کیف پول مقصد یا گیرنده </p>
										<input
											type="text"
											placeholder=" تگ آدرس کیف پول "
											onChange={(e) => {
												tag_address_value_getter(e);
											}}
											className={tag_address_input ? "" : "error-input-border"}
										/>
										{tag_address_input ? (
											""
										) : (
											<span className="error-message">
												تگ آدرس کیف پول را درج کنید
											</span>
										)}
									</div>
								) : (
									""
								)}
								<div className="deposit-submit-btn-container">
									<button
										type="submit"
										onClick={(e) => {
											form_checker(e);
										}}
									>
										{" "}
										ثبت درخواست
									</button>
								</div>
								{/* Success message */}
								{success_message ? (
									<div className="success-message-container">
										<span className="success-message">
											درخواست شما با موفقیت ثبت شد
										</span>
									</div>
								) : null}
								<hr />
							</form>
							{/* Notice Container */}
							<div className="deposit-notice-container">
								<p className="deposit-notice-header">
									<img src="https://img.icons8.com/emoji/36/000000/warning-emoji.png" />{" "}
									نکات و هشدارها
								</p>
								<p>
									برای واریز {item.persian_name} به ما، ابتدا میزان{" "}
									{item.persian_name} مورد نظر را جهت واریز در فیلد مقدار{" "}
									{item.persian_name} وارد نمایید، پس از آگاهی از مقدار معادل آن
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
// Routing System in App.js
// AppLayout is for not allowing layout.js to render inside login-signup pages.
const AppLayout = () => (
	<>
		<Layout
			user_api={user_api}
			currencies_api={digital_currencies_arr}
			website_name={website_name}
			notifications={notifications}
		></Layout>
		<Routes>
			<Route
				path="/"
				element={
					<Dashboard
						user_info={user_api}
						currencies_api={digital_currencies_arr}
						page_title={dashboard_title}
					/>
				}
			/>
			<Route
				path="wallets"
				element={
					<Wallets
						data={digital_currencies_arr}
						user_info={user_api}
						page_title={wallets_title}
					/>
				}
			/>
			<Route path="wallets/deposit/:name" element={<Deposit />} />
			<Route path="wallets/withdrawal/:name" element={<Withdrawal />} />
			<Route
				path="wallets/deposit/toman"
				element={
					<Toman_deposit
						user_info={user_api}
						page_title={toman_deposit_title}
					/>
				}
			/>
			<Route
				path="wallets/withdrawal/toman"
				element={
					<Toman_withdrawal
						user_info={user_api}
						page_title={toman_withdrawal_title}
					/>
				}
			/>
			<Route
				path="crypto-transactions"
				element={<Crypto_transactions page_title={crypto_transactions_title} />}
			/>
			<Route
				path="rial-transactions"
				element={<Rial_transactions page_title={rial_transactions_title} />}
			/>
			<Route
				path="tickets"
				element={<Tickets page_title={tickets_title} user_info={user_api} />}
			/>
			<Route
				path="buy"
				element={<Buy data={digital_currencies_arr} page_title={buy_title} />}
			/>
			<Route
				path="sell"
				element={<Sell data={digital_currencies_arr} page_title={sell_title} />}
			/>
			<Route
				path="orders"
				element={<Orders page_title={orders_title} user_info={user_api} />}
			/>
			<Route
				path="credit-cards"
				element={
					<Credit_cards user_info={user_api} page_title={credit_cards_title} />
				}
			/>
			<Route
				path="invitation"
				element={<Invitation page_title={invitation_title} />}
			/>
			<Route
				path="authentication"
				element={
					<Authentication user_info={user_api} page_title={auth_title} />
				}
			/>
			<Route
				path="password"
				element={<Password user_info={user_api} page_title={password_title} />}
			/>
			<Route
				path="two-factor-authentication"
				element={
					<Two_factor_authentication
						user_info={user_api}
						page_title={two_factor_auth_title}
					/>
				}
			/>
		</Routes>
	</>
);

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="*" element={<_404 page_title={_404_title} />} />
				<Route path="/login" element={<Login page_title={login_title} />} />
				<Route path="sign-up" element={<Sign_up page_title={signup_title} />} />
				<Route
					path="/*"
					element={
						<AppLayout
							website_name={website_name}
							notifications={notifications}
						/>
					}
				>
					<Route
						path="/*"
						element={
							<Dashboard
								user_info={user_api}
								currencies_api={digital_currencies_arr}
								page_title={dashboard_title}
							/>
						}
					/>
					<Route
						path="wallets"
						element={
							<Wallets
								data={digital_currencies_arr}
								user_info={user_api}
								page_title={wallets_title}
							/>
						}
					/>
					<Route path="wallets/deposit/:name" element={<Deposit />} />
					<Route path="wallets/withdrawal/:name" element={<Withdrawal />} />
					<Route
						path="wallets/deposit/toman"
						element={
							<Toman_deposit
								user_info={user_api}
								page_title={toman_deposit_title}
							/>
						}
					/>
					<Route
						path="wallets/withdrawal/toman"
						element={
							<Toman_withdrawal
								user_info={user_api}
								page_title={toman_withdrawal_title}
							/>
						}
					/>
					<Route
						path="crypto-transactions"
						element={
							<Crypto_transactions page_title={crypto_transactions_title} />
						}
					/>
					<Route
						path="rial-transactions"
						element={<Rial_transactions page_title={rial_transactions_title} />}
					/>
					<Route
						path="tickets"
						element={
							<Tickets page_title={tickets_title} user_info={user_api} />
						}
					/>
					<Route
						path="buy"
						element={
							<Buy data={digital_currencies_arr} page_title={buy_title} />
						}
					/>
					<Route path="toman-deposit" element={<Toman_deposit />} />
					<Route
						path="toman-withdrawal"
						element={<Toman_withdrawal page_title={toman_withdrawal_title} />}
					/>
					<Route
						path="sell"
						element={
							<Sell data={digital_currencies_arr} page_title={sell_title} />
						}
					/>
					<Route
						path="orders"
						element={<Orders page_title={orders_title} user_info={user_api} />}
					/>
					<Route
						path="credit-cards"
						element={
							<Credit_cards
								user_info={user_api}
								page_title={credit_cards_title}
							/>
						}
					/>
					<Route
						path="invitation"
						element={<Invitation page_title={invitation_title} />}
					/>
					<Route
						path="authentication"
						element={
							<Authentication user_info={user_api} page_title={auth_title} />
						}
					/>
					<Route
						path="password"
						element={
							<Password user_info={user_api} page_title={password_title} />
						}
					/>
					<Route
						path="two-factor-authentication"
						element={
							<Two_factor_authentication
								user_info={user_api}
								page_title={two_factor_auth_title}
							/>
						}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
