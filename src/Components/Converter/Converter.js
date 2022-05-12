import { useState } from "react";
import "./converter.css";

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
export default function Converter() {
	// States
	const [api_data, set_api_data] = useState(currencies_info);
	const [toggle_drop_down, set_toggle_drop_down] = useState(false);
	const [currency_name, set_currency_name] = useState(currencies_info[0].name);
	const [currency_icon, set_currency_icon] = useState(currencies_info[0].icon);
	const [currency_value, set_currency_value] = useState(
		currencies_info[0].website_price
	);
	const [unit_value, set_unit_value] = useState();
	const [toman_value, set_toman_value] = useState();
	// States funcitons
	// This function toggle the dropdown
	const toggle = () => {
		toggle_drop_down ? set_toggle_drop_down(false) : set_toggle_drop_down(true);
	};
	// This funciton choose each currency and fetch its data and display it in dropdown box
	const choose_currency = (e) => {
		set_toggle_drop_down(false);
		api_data.map((item) => {
			if (e.target.id == item.id) {
				set_currency_name(item.name);
				set_currency_icon(item.icon);
				set_currency_value(item.website_price);
				set_toman_value(item.website_price);
			}
		});
	};
	// This funciton filter the currencies while user typing
	const filter_items = (e) => {
		// console.log(e.target.value);
		const user_input = e.target.value;
		const filtered_list = currencies_info.filter((item) => {
			return item.name.includes(user_input);
		});
		set_api_data(filtered_list);
	};
	// This function covert unit to toman
	const unit_to_toman_converter = (e) => {
		set_unit_value(e.target.value);
		set_toman_value(e.target.value * currency_value);
	};
	// This function covert toman to unit
	const toman_to_unit_converter = (e) => {
		set_unit_value(e.target.value / currency_value);
		set_toman_value(e.target.value);
	};
	return (
		<div className="converter-container">
			<div className="converter-inner-container">
				<fieldset className="converter-choose-currency">
					<legend>انتخاب ارز</legend>
					{/* Dropdown box */}
					<div className="converter-drop-down-box" onClick={toggle}>
						{/* Currency icon */}
						<div className="currency-icon-container">
							<img src={currency_icon} alt={currency_name} width="50px" />
						</div>
						{/* Currency persian name */}
						<div className="currency-persian-name-container">
							<span className="currency-persian-name">{currency_name}</span>
						</div>
						{/* Currency chevron down */}
						{toggle_drop_down ? (
							<div className="currency-chevron-container">
								<img src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/000000/external-chevron-arrows-tanah-basah-basic-outline-tanah-basah-2.png" />
							</div>
						) : (
							<div className="currency-chevron-container">
								<img src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/000000/external-chevron-arrows-tanah-basah-basic-outline-tanah-basah-4.png" />
							</div>
						)}
					</div>
					{/* Dropdown itself */}
					{toggle_drop_down ? (
						<div className="converter-drop-down">
							{/* Searchbar */}
							<input
								type="search"
								name=""
								id=""
								placeholder="جستجو بر اساس اسم یا نماد..."
								onChange={(e) => {
									filter_items(e);
								}}
							/>
							{api_data.map((item) => {
								return (
									<div
										className="drop-down-row"
										onClick={(e) => {
											choose_currency(e);
										}}
										id={item.id}
									>
										<img
											id={item.id}
											src={item.icon}
											alt={item.name}
											width="20px"
										/>
										<span id={item.id} className="currency-name">
											{item.name}
										</span>
										<span id={item.id} className="currency-abbr">
											{item.abbreviation}
										</span>
										<span id={item.id} className="currency-price">
											قیمت خرید:
											{item.website_price}تومان
										</span>
									</div>
								);
							})}
						</div>
					) : (
						""
					)}
				</fieldset>
				{/* Converter Unit */}
				<fieldset className="converter-unit">
					<legend>واحد</legend>
					<input
						type="number"
						className="converter-unit-input"
						value={unit_value}
						onChange={(e) => {
							unit_to_toman_converter(e);
						}}
					/>
				</fieldset>
				{/* Converter Toman */}
				<fieldset className="converter-toman">
					<legend>تومان</legend>
					<input
						type="number"
						className="converter-toman-input"
						value={toman_value}
						onChange={(e) => {
							toman_to_unit_converter(e);
						}}
					/>
				</fieldset>
			</div>
		</div>
	);
}
