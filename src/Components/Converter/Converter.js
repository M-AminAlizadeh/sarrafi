import { useState } from "react";
import { Link } from "react-router-dom";
import "./converter.css";

export default function Converter(props) {
	const currencies_info = props.currencies_api;
	// States
	const [api_data, set_api_data] = useState(currencies_info);
	const [toggle_drop_down, set_toggle_drop_down] = useState(false);
	const [currency_name, set_currency_name] = useState(
		currencies_info[0].persian_name
	);
	const [currency_icon, set_currency_icon] = useState(
		currencies_info[0].icon_source
	);
	const [currency_value, set_currency_value] = useState(
		currencies_info[0].website_price
	);
	const [unit_value, set_unit_value] = useState(1);
	const [toman_value, set_toman_value] = useState(
		currencies_info[0].website_price
	);
	// States functions
	// This function toggle the dropdown
	const toggle = () => {
		toggle_drop_down ? set_toggle_drop_down(false) : set_toggle_drop_down(true);
	};
	// This funciton choose each currency and fetch its data and display it in dropdown box
	const choose_currency = (e) => {
		set_toggle_drop_down(false);
		api_data.map((item) => {
			if (e.target.id == item.id) {
				set_currency_name(item.persian_name);
				set_currency_icon(item.icon_source);
				set_currency_value(item.website_price);
				set_unit_value(1);
				set_toman_value(item.website_price);
			}
		});
	};
	// This funciton filter the currencies while user typing
	const filter_items = (e) => {
		// console.log(e.target.value);
		const user_input = e.target.value;
		const filtered_list = currencies_info.filter((item) => {
			return (
				item.persian_name.includes(user_input) ||
				item.name.toLowerCase().includes(user_input.toLowerCase()) ||
				item.abbr.toLowerCase().includes(user_input.toLowerCase())
			);
		});
		set_api_data(filtered_list);
	};
	// This function covert unit to toman
	const unit_to_toman_converter = (e) => {
		// console.log(typeof e.target.value);
		console.log(toman_value);
		set_unit_value(Number(e.target.value));
		set_toman_value(Number(e.target.value) * Number(currency_value));
	};
	// This function covert toman to unit
	const toman_to_unit_converter = (e) => {
		set_unit_value(Number(e.target.value) / Number(currency_value));
		set_toman_value(Number(e.target.value));
	};
	return (
		<div className="converter-container component_box_shadow">
			<div className="converter-inner-container">
				<div class="converter-top-row">
					{/* Converter Choose Currency */}
					<fieldset className="converter-choose-currency">
						<legend>انتخاب ارز:</legend>
						{/* Dropdown box */}
						<div className="converter-drop-down-box" onClick={toggle}>
							{/* Currency icon */}
							<div className="converter-currency-icon-container">
								<img
									src={currency_icon}
									alt={currency_name}
									width="30px"
									height="30px"
								/>
							</div>
							{/* Currency persian name */}
							<div className="currency-persian-name-container">
								<span className="currency-persian-name">{currency_name}</span>
							</div>
							{/* Currency chevron down */}
							<div
								className={`converter-currency-chevron-container ${
									toggle_drop_down ? "chevron-container-toggle" : null
								}`}
							>
								<img src="https://img.icons8.com/ios-glyphs/24/000000/chevron-up.png" />
							</div>
							{/* Dropdown itself */}
							{toggle_drop_down ? (
								<div className="converter-drop-down component_box_shadow">
									{/* Searchbar */}
									<input
										type="search"
										placeholder="جستجو بر اساس اسم یا نماد..."
										onChange={(e) => {
											filter_items(e);
										}}
									/>
									{api_data.map((item) => {
										return (
											// Dropdown Row
											<div
												className="converter-drop-down-row"
												onClick={(e) => {
													choose_currency(e);
												}}
												id={item.id}
											>
												{/* Dropdown right side */}
												<div className="converter-drop-down-right-side">
													{/* Currency icon */}
													<img
														id={item.id}
														src={item.icon_source}
														alt={item.persian_name}
														width="20px"
													/>
													{/* Currency persian name */}
													<span id={item.id} className="currency-name">
														{item.persian_name}
													</span>{" "}
													{/* Currency abbreviation */}
													<span id={item.id} className="currency-abbr">
														({item.abbr})
													</span>
												</div>
												{/* Dropdown left side */}
												<div
													id={item.id}
													className="converter-drop-down-left-side"
												>
													<span>قیمت خرید:</span>
													{/* Currency price */}
													<span className="currency-price">
														{item.website_price}تومان
													</span>
												</div>
											</div>
										);
									})}
								</div>
							) : null}
						</div>
					</fieldset>
					{/* Converter Unit */}
					<fieldset className="converter-choose-currency converter-unit">
						<legend>واحد:</legend>
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
					<fieldset className="converter-choose-currency converter-toman">
						<legend>تومان:</legend>
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
				<div class="converter-bottom-row">
					{/* Converter btns */}
					<div>
						<button className="converter-btn converter-sell-btn">
							<Link to="sell">فروش</Link>
						</button>
					</div>
					<div>
						<button className="converter-btn converter-buy-btn">
							<Link to="buy">خرید</Link>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
