import { useState } from "react";
import TrendingDownIcon from "@material-ui/icons/TrendingDown";
import "./sell.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

// Artificial object about currencies information
const currencies_info = [
	{
		id: 1,
		name: "بیت کوین (bitcoin)",
		icon: "images/crypto-logos/bitcoin.png",
		abbreviation: "BTC",
		world_price: 39309.13,
		website_price: "3000",
		balance: 0,
		in_tomans: 0,
	},
	{
		id: 2,
		name: "اتریوم (ethereum)",
		icon: "images/crypto-logos/ethereum.png",
		abbreviation: "ETH",
		world_price: 39309.13,
		website_price: "90",
		balance: 0,
		in_tomans: 0,
	},
	{
		id: 3,
		name: "تتر (tether)",
		icon: "images/crypto-logos/tether.png",
		abbreviation: "USDT",
		world_price: 39309.13,
		website_price: "5",
		balance: 0,
		in_tomans: 0,
	},
	{
		id: 4,
		name: "دوج کوین (dogecoin)",
		icon: "images/crypto-logos/dogecoin.png",
		abbreviation: "DOGE",
		world_price: 39309.13,
		website_price: "1000000",
		balance: 0,
		in_tomans: 0,
	},
	{
		id: 5,
		name: "ریپل (ripple)",
		icon: "images/crypto-logos/xrp.png",
		abbreviation: "XRP",
		world_price: 39309.13,
		website_price: "1,108",
		balance: 0,
		in_tomans: 0,
	},
];

export default function Sell() {
	/////////////////////// States
	const [dropdown, set_drop_down] = useState(false);
	const [api_data, set_api_data] = useState(currencies_info);
	const [currency_icon, set_currency_icon] = useState(currencies_info[0].icon);
	const [currency_name, set_currency_name] = useState(currencies_info[0].name);
	const [currency_abbr, set_currency_abbr] = useState(currencies_info[0].abbr);
	const [currency_price_toman, set_currency_price_toman] = useState(
		currencies_info[0].website_price
	);
	const [selected, set_selected] = useState("");
	const [currency_value, set_currency_value] = useState("");
	const [toman_value, set_toman_value] = useState("");
	const [warning, set_warning] = useState(true);
	/////////////////////// States functions
	// this function just toggle dropdown list
	const toggle_dropdown = () => {
		dropdown ? set_drop_down(false) : set_drop_down(true);
	};
	// this function shows all currencies inside dropdown list and when click on each item replace the currency info and hide dropdown list
	const fetch_currency = (e) => {
		set_drop_down(false);
		currencies_info.map((currency) => {
			if (e.target.id == currency.id) {
				set_currency_name(currency.name);
				set_currency_icon(currency.icon);
				set_currency_price_toman(currency.website_price);
				set_currency_abbr(currency.abbreviation);
			}
		});
	};
	// this function filter items base on user input value
	const filter_currency = (e) => {
		const filtered = currencies_info.filter((currency) => {
			return currency.name.includes(e.target.value);
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
	// this function is for checking form
	const check_form = () => {
		if (toman_value == "") {
			set_warning(false);
		} else {
			set_warning(true);
		}
	};
	return (
		<div className="buy-page-container" style={{ display: "flex" }}>
			<div
				className="buy-page-article"
				style={{
					flex: 1,
					boxShadow: " 0 0 20px #555",
					border: "3px solid #fff",
					backgroundColor: "#fff",
					borderRadius: "20px",
					padding: "20px",
					margin: "10px",
				}}
			>
				<h4 dir="rtl"> راهنمای خرید{currency_name}</h4>
				<hr />
				<ul className="buy-page-list" dir="rtl">
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
						صعود یا سقوط ارزش را به صورت ناگهانی تجربه کنند، مجموعه ما همانگونه
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
			</div>
			<div
				className="buy-page-input-container"
				dir="rtl"
				style={{
					flex: "2",
					boxShadow: " 0 0 20px #555",
					border: "3px solid #fff",
					backgroundColor: "#fff",
					borderRadius: "20px",
					padding: "10px",
					margin: "10px",
				}}
			>
				<h4>
					<TrendingDownIcon></TrendingDownIcon> خرید ارز
				</h4>
				<div
					style={{
						width: "100%",
						textAlign: "center",
						padding: "20px",
						backgroundColor: "#EAE8FD",
						color: "#887DF2",
						fontSize: "17px",
						borderRadius: "5px",
					}}
				>
					مبلغ پرداختی:<span>{toman_value}</span> تومان
				</div>
				{/* Select currency part */}
				<div className="currency-selection-container">
					<span>انتخاب ارز</span>
					{/* Main div */}
					<div className="buy-page-input" onClick={toggle_dropdown}>
						{/* currency logo */}
						<div className="currency-logo">
							<img src={currency_icon} width="30px" />
						</div>
						{/* currency name in persian */}
						<span className="currency-name">{currency_name}</span>
						{/* currency dropdown icon */}
						<div className="currency-dropdown">
							<img
								className={dropdown ? "toggle-drop-down-icon" : ""}
								src="https://img.icons8.com/ios-glyphs/30/000000/chevron-up.png"
							/>
						</div>
					</div>
					{/* Drop down list */}
					{dropdown ? (
						<div className="drop-down-list-container">
							{/* Search box */}
							<div className="search-box-container">
								<input
									type="search"
									name="search-bar"
									id="search-bar"
									placeholder="جستجو بر اساس اسم..."
									onChange={(e) => {
										filter_currency(e);
									}}
								/>
							</div>
							{api_data.map((currency) => {
								return (
									<div
										className="drop-down-list"
										onClick={(e) => {
											fetch_currency(e);
										}}
										id={currency.id}
									>
										<div class="right-side" id={currency.id}>
											<img src={currency.icon} width="20px" id={currency.id} />
											<span id={currency.id}>{currency.name}</span>
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
					) : (
						""
					)}
				</div>
				<div
					style={{
						// border: "1px solid red",
						display: "flex",
						width: "50%",
						justifyContent: "space-around",
						marginRight: "10px",
					}}
				>
					<p>
						قیمت هر واحد<span className="currency-name">{currency_name}:</span>
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
					<span>مقدار ارز</span>
					<div
						className={`currency-value-container ${warning ? "" : "warning"}`}
					>
						<label htmlFor="">مقدار {currency_name}</label>
						<img src={currency_icon} alt={currency_name} width="20px" />
						<input
							type="number"
							className="buy-page-input currency-input-output-value"
							onChange={handle_conversion}
							onFocus={(e) => {
								set_selected("currency");
							}}
							value={currency_value}
						/>
						<span className="currency-abbr">{currency_abbr}</span>
					</div>
					<br></br>
					<span>موجودی قابل تبدیل کیف پول {currency_name}:</span>
				</div>
				<div
					style={{
						width: "100%",
						textAlign: "center",
						padding: "10px",
						backgroundColor: "#EAE8FD",
						color: "#887DF2",
						fontSize: "15px",
						borderRadius: "5px",
					}}
				>
					نکته: در رمز ارزها مقدار خریداری شده به کیف پول رمز ارز شما اضافه
					میشود.
				</div>
				<div>
					<p style={{ margin: "10px" }}>توضیحات اضافه</p>
					<textarea
						rows="8"
						cols="66"
						style={{
							marginRight: "70px",
							border: "1px solid #D9D9D9",
							padding: "10px",
							color: "#5f5f5f",
							fontSize: "14px",
							overflow: "auto",
							borderRadius: "5px",
						}}
					></textarea>
				</div>
				<div>
					<div style={{ display: "flex" }}>
						<p>نحوه پرداخت : </p>
						<p>
							کیف پول (موجودی : <span>0</span>)
						</p>
					</div>
					<p
						style={{
							backgroundColor: "#F1F2F4",
							color: "#BABFC7",
							padding: "10px",
							textAlign: "center",
							borderRadius: "5px",
						}}
					>
						خرید و فروش فقط از طریق کیف پول تومانی شما انجام میشود. برای افزایش
						موجودی به بخش
						<Link
							to="/wallets"
							style={{ textDecoration: "none", color: "#5E50EE" }}
						>
							کیف پول تومانی
						</Link>
						رجوع کنید.
					</p>
				</div>
				<Button size="lg" onClick={check_form}>
					ثبت و پرداخت
				</Button>
			</div>
		</div>
	);
}
