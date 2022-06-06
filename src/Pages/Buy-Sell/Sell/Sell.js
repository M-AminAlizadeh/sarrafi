import React, { useState } from "react";
import TrendingDownIcon from "@material-ui/icons/TrendingDown";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
export default function Sell(props) {
	const [success_message, set_success_message] = useState(false);

	const currencies_info = props.data;

	// sell currency class
	class Sell_currency {
		constructor(currency_name, currency_value, toman_value, description) {
			this.currency_name = currency_name;
			this.currency_value = currency_value;
			this.toman_value = toman_value;
			this.description = description;
		}
	}
	const sell_send_data = () => {
		const sell_data = new Sell_currency(
			currency_name,
			currency_value,
			toman_value,
			description_value
		);
	};
	/////////////////////// States
	const [dropdown, set_drop_down] = useState(false);
	const [api_data, set_api_data] = useState(currencies_info);
	const [currency_icon, set_currency_icon] = useState(
		currencies_info[0].icon_source
	);
	const [currency_name, set_currency_name] = useState(
		currencies_info[0].persian_name
	);
	const [currency_abbr, set_currency_abbr] = useState(currencies_info[0].abbr);
	const [currency_price_toman, set_currency_price_toman] = useState(
		currencies_info[0].website_price
	);
	const [selected, set_selected] = useState("");
	const [currency_value, set_currency_value] = useState();
	const [toman_value, set_toman_value] = useState("");
	const [description_value, set_description_value] = useState("");
	const [warning, set_warning] = useState(true);
	/////////////////////// States functions
	// this function just toggles dropdown list
	const toggle_dropdown = () => {
		dropdown ? set_drop_down(false) : set_drop_down(true);
	};
	// this function shows all currencies inside dropdown list and when click on each item replace the currency info and hide dropdown list
	const fetch_currency = (e) => {
		set_drop_down(false);
		currencies_info.map((currency) => {
			if (e.target.id == currency.id) {
				set_currency_name(currency.persian_name);
				set_currency_icon(currency.icon_source);
				set_currency_price_toman(currency.website_price);
				set_currency_abbr(currency.abbr);
			}
		});
	};
	// this function filter items base on user input value
	const filter_currency = (e) => {
		const user_input = e.target.value;
		const filtered = currencies_info.filter((currency) => {
			return (
				currency.persian_name.includes(user_input) ||
				currency.name.toLowerCase().includes(user_input.toLowerCase()) ||
				currency.abbr.toLowerCase().includes(user_input.toLowerCase())
			);
		});
		set_api_data(filtered);
	};
	// this function for calculate and show price from currency to Toman and viceversa
	const handle_conversion = (e) => {
		if (selected == "currency") {
			set_currency_value(e.target.value);
			set_toman_value(e.target.value * currency_price_toman);
		} else {
			set_toman_value(e.target.value);
			set_currency_value(e.target.value / currency_price_toman);
		}
	};
	// this function changes user description text
	const fetch_description = (e) => {
		set_description_value(e.target.value);
	};
	// this function is for checking form
	const check_form = () => {
		if (toman_value == "") {
			set_warning(false);
		} else {
			set_warning(true);
		}
		if (toman_value !== "") {
			set_success_message(true);
			sell_send_data();
		}
	};
	return (
		// Page Container
		<div className="buy-page-container">
			<Helmet>
				<title>{props.page_title}</title>
			</Helmet>
			{/* Left Side Container */}
			<div className="buy-page-article">
				{/* Article Header */}
				<p> راهنمای فروش {currency_name}</p>
				<hr />
				{/* Article List */}
				<ul className="buy-page-list">
					<li>
						کارمزد پرداختی از سوی شما برای تراکنش های رمز ارز ها کارمزد شبکه ارز
						مدنظر میباشد و مجموعه ما از این کارمزد نفعی ندارد
					</li>
					<br />
					<li>
						اخیرا ویروس و تروجان تغییر دهنده آدرس در زمانی کپی کردن آن گسترش
						یافته است.حتما در پس از کپی ادرس خود و اعمال آن در کادر کیف ارز مد
						نظر دقت فرمائید و آن را با ادرس خود مقایسه نمائید.
					</li>
					<br />
					<li>
						از آنجایی که تراکنش های رمز ارز ها غیر قابل بازگشت است، چنانچه آدرس
						عمومی شخص دریافت کننده اعتبار را به اشتباه اعلام کنید، تراکنش ارسال
						شده قابل بازگشت نخواهد بود. بنابراین توصیه می کنیم پیش از ثبت سفارش،
						از آدرس عمومی (Public Address) دریافت کننده مطمئن شوید.
					</li>
					<br />
					<li>
						با توجه به غیر قابل برگشت بودن تراکنش رمز ارز ها امکان لغو تراکنش یا
						بازگشت دادن وجه پس از انجام امکان پذیر نیست.
					</li>
					<br />
					<li>
						به این دلیل که ارز های رمزنگاری شده تحت تاثیر برخی از عوامل ممکن است
						صعود یا سقوط ارزش را به صورت ناگهانی تجربه کنند،مجموعه ما همانگونه
						که منفعتی در قبال افزایش ارزش آن نمی برد، مسئولیتی هم در قبال سقوط
						قیمت آن نخواهد داشت.
					</li>
					<br />
					<li>
						مجموعه ما تنها در مورد پرداخت مبلغ سفارش مسئولیت دارد و وظیفه پیگیری
						های بعدی سفارش، برعهده شماست.
					</li>
					<br />
					<li>
						در هنگام خرید فقط مجاز به پرداخت با کارت‌های تایید شده در سایت
						می‌باشید، در غیر این‌صورت وجه پرداختی به صورت اتوماتیک به کارت
						واریزی عودت داده خواهد شد.
					</li>
					<br />
					<li>
						پیش از ثبت درخواست و پرداخت وجه، از میزان ارز وارد شده اطمینان حاصل
						نمایید.
					</li>
					<br />
					<li>
						خرید رمز ارز ها فقط از طریق کیف پول انجام میشود و خرید از درگاه برای
						رمز ارز ها امکان پذیر نیست و بایستی ابتدا از طریق درگاه کیف پول خود
						را شارژ کنید.
					</li>
					<br />
					<li>
						وبسایت ما برای سایت هایی که فعالیت آن ها بر خلاف قوانین جمهوری
						اسلامی ایران است خدماتی ارائه نمیدهد
					</li>
				</ul>
				<hr />
			</div>
			{/* Right side Container */}
			<div className="buy-page-input-container component_box_shadow">
				{/* Right side header */}
				<p className="buy-page-input-container-header">
					<TrendingDownIcon></TrendingDownIcon> فروش ارز
				</p>
				<div className="buy-page-payment-amount">
					مبلغ دریافتی:<span>{toman_value}</span> تومان
				</div>
				<form action="GET">
					{/* Select currency part */}
					<p className="buy-page-currency-selection-header">انتخاب ارز</p>
					<div className="currency-selection-container">
						{/* Main div */}
						<div
							className={`buy-page-select-box ${
								dropdown ? "change-drop-down-color" : ""
							}`}
							onClick={toggle_dropdown}
						>
							{/* currency logo */}
							<div className="buy-page-currency-logo">
								<img src={currency_icon} width="30px" height="30px" />
							</div>
							{/* currency name in persian */}
							<span className="buy-page-currency-name">{currency_name}</span>
							{/* currency dropdown icon */}
							<div className="buy-page-currency-dropdown">
								<img
									className={dropdown ? "toggle-drop-down-icon" : ""}
									src="https://img.icons8.com/ios-glyphs/10/000000/chevron-up.png"
								/>
							</div>
						</div>
						{/* Drop down list */}
						{dropdown ? (
							<div className="drop-down-list-container component_box_shadow">
								{/* Search box */}
								<div className="search-box-container">
									<input
										style={{ cursor: "text" }}
										type="search"
										name="search-bar"
										id="search-bar"
										placeholder="جستجو بر اساس اسم..."
										onChange={(e) => {
											filter_currency(e);
										}}
									/>
								</div>
								{api_data.map((currency, index) => {
									return (
										<div
											className="drop-down-list"
											onClick={(e) => {
												fetch_currency(e);
											}}
											id={currency.id}
											key={index}
										>
											<div className="right-side" id={currency.id}>
												<img
													src={currency.icon_source}
													width="20px"
													height="20px"
													id={currency.id}
												/>
												<span id={currency.id}>
													{currency.persian_name}({currency.name})
												</span>
											</div>
											<div className="left-side" id={currency.id}>
												<span id={currency.id}>قیمت خرید</span>
												<span className="buy-price" id={currency.id}>
													{currency.website_price}تومان
												</span>
											</div>
										</div>
									);
								})}
							</div>
						) : null}
					</div>
					{/* Price of Each Coin */}
					<div className="buy-page-each-coin-price">
						<p>
							قیمت هر واحد
							<span className="currency-name">{currency_name}:</span>
						</p>
						<p>
							<span className="currency-value-in-toman">
								{currency_price_toman}
							</span>
							تومان
						</p>
					</div>
					<hr />
					<div>
						<span className="buy-page-coin-count-header">مقدار ارز</span>
						<div className="buy-page-coin-count-div">
							<div className="buy-page-coin-count-container">
								<label className="buy-page-coin-count-small-header" htmlFor="">
									مقدار {currency_name}
									<img
										src={currency_icon}
										alt={currency_name}
										width="15px"
										height="15px"
									/>
								</label>
								<input
									placeholder={currency_abbr}
									type="number"
									className={`buy-page-currency-count-input  ${
										warning ? "" : "error-input-border"
									}`}
									onChange={handle_conversion}
									onFocus={(e) => {
										set_selected("currency");
									}}
									value={currency_value || ""}
								/>
								<span className="sell-page-span-below-coin-count-input">
									موجودی قابل تبدیل کیف پول {currency_name} :
								</span>
							</div>
							{warning ? (
								""
							) : (
								<span className="buy-page-error-message error-message">
									مقدار را وارد کنید
								</span>
							)}
						</div>
					</div>
					<p className="buy-page-further-description-header">توضیحات اضافه</p>
					<div className="buy-page-text-area-container">
						<textarea
							className="buy-page-text-area"
							rows="5"
							onChange={(e) => {
								fetch_description(e);
							}}
						></textarea>
					</div>
					<div>
						<div className="buy-page-payment-method-container">
							<span>نحوه دریافت : </span>
							<span>واریز به کیف پول</span>
						</div>
						<p className="buy-page-second-notice">
							خرید و فروش فقط از طریق کیف پول تومانی شما انجام میشود. برای
							افزایش موجودی به بخش
							<Link className="buy-page-link" to="/wallets">
								{" "}
								کیف پول تومانی{" "}
							</Link>
							رجوع کنید.
						</p>
					</div>
					{success_message ? (
						<div className="buy-page-success-message success-message-container">
							پرداخت شما با موفقیت انجام شد
						</div>
					) : (
						""
					)}
					<button
						className="buy-page-submit-btn"
						type="submit"
						size="lg"
						onClick={() => {
							check_form();
						}}
					>
						ثبت و پرداخت
					</button>
				</form>
			</div>
		</div>
	);
}
