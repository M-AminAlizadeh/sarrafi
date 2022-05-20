import { useState } from "react";
import { Link } from "react-router-dom";
import "./wallets.css";

const Wallets = (props) => {
	const currencies_info = props.data;
	const user_info = props.user_info;
	// States
	const [api, set_api] = useState(currencies_info);
	// States functions
	// This function filter currencies name when user type in searchbox
	const filter_currency = (e) => {
		const user_input = e.target.value;
		const filtered_list = currencies_info.filter((item) => {
			return (
				item.persian_name.includes(user_input) ||
				item.name.toLowerCase().includes(user_input.toLowerCase()) ||
				item.abbr.toLowerCase().includes(user_input.toLowerCase())
			);
		});
		set_api(filtered_list);
	};
	return (
		<div className="wallets-container component_box_shadow">
			{/* Header container */}
			<div className="wallets-header-container">
				<span className="wallets-header">لیست کیف پول های شما</span>
			</div>
			{/* Searchbar container */}
			<div className="wallets-search-container">
				<input
					type="search"
					placeholder="جستجو"
					onChange={(e) => {
						filter_currency(e);
					}}
				/>
			</div>
			{/* Currencies container */}
			<div className="wallets-currencies-container">
				{/* Toman container */}
				<div className="wallet-toman-row">
					{/* Toman name container*/}
					<div className="toman-row-info-container">
						{/* Currency icon container */}
						<div className="toman-icon-container">
							<img src="https://img.icons8.com/color/45/000000/iran-circular.png" />
							<span>تومان</span>
						</div>
					</div>
					{/* Toman inventory container */}
					<div className="toman-inventory-container">
						<span>موجودی:{user_info.balance.rial_balance} تومان</span>
					</div>
					{/* Toman btns container */}
					<div className="toman-btns-container">
						<div className="btns-container-sell-buy">
							<Link to={`deposit/toman`}>
								<button className="deposit">واریز</button>
							</Link>
							<Link to={`withdrawal/toman`}>
								<button className="withdrawl">برداشت</button>
							</Link>
						</div>
					</div>
				</div>

				{/* Maping through api */}
				{api.map((item) => {
					return (
						<div className="wallet-currency-row">
							{/* Currency name container*/}
							<div className="currency-row-info-container">
								{/* Currency icon container */}
								<div className="currency-icon-container">
									<img src={item.icon_source} alt={item.name} width="25px" />
								</div>
								{/* Currency names container */}
								<div className="currency-names-container">
									<span className="currency-persian-name">
										{item.persian_name}
									</span>
									<span className="currency-english-name">{item.name}</span>
								</div>
							</div>
							{/* Currency price container */}
							<div className="currency-price-container">
								<span className="currency-world-price">
									قیمت جهانی:{item.world_price}دلار
								</span>
								<span className="currency-website-price">
									قیمت وبسایت:{item.website_price}تومان
								</span>
							</div>
							{/* Currency inventory contaienr */}
							<div className="currency-inventory-container">
								<span className="currency-inventory">
									موجودی: {item.abbr} {item.our_inventory}
								</span>
								<span className="price_in_toman">
									معادل:{item.toman_price} تومان
								</span>
							</div>
							{/* Currency btns container */}
							<div className="currency-btns-container">
								<div className="btns-container-sell-buy">
									<Link to={`deposit/${item.name}`}>
										<button className="deposit">واریز</button>
									</Link>
									<Link to={`withdrawal/${item.name}`}>
										<button className="withdrawl">برداشت</button>
									</Link>
								</div>
								<div className="btns-container-history">
									<Link to="/crypto-transactions">
										<button className="history">تاریخچه</button>
									</Link>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Wallets;
