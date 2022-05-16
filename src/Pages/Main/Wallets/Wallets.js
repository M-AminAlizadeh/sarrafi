import { useState } from "react";
import { Link } from "react-router-dom";
import "./wallets.css";

const Wallets = (props) => {
	const currencies_info = props.data;
	// States
	const [api, set_api] = useState(currencies_info);
	// States functions
	// This function filter currencies name when user type in searchbox
	const filter_currency = (e) => {
		const user_input = e.target.value;
		const filtered_list = currencies_info.filter((item) => {
			return item.persian_name.includes(user_input);
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
				{/* {console.log(api)} */}
				{/* Toman  */}
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
								<Link to={`deposit/${item.name}`}>
									<button className="deposit">واریز</button>
								</Link>
								<Link to={`withdrawal/${item.name}`}>
									<button className="withdrawl">برداشت</button>
								</Link>
								<Link to="/crypto-transactions">
									<button className="history">تاریخچه</button>
								</Link>
							</div>
						</div>
					);
				})}
			</div>
			{/* <Paper dir="rtl">
				<h3 className="wallets-header">لیست کیف پول های شما</h3>
				<SearchBar
					style={{
						width: "300px",
						direction: "rtl",
						borderRadius: "15px",
						marginRight: "100px",
						margin: "20px",
						border: "1px solid #555",
						fontFamily: "Vazirmatn",
					}}
					value={searched}
					placeholder="جستجو"
					onChange={(searchVal) => requestSearch(searchVal)}
					onCancelSearch={() => cancelSearch()}
				/>
				<TableContainer>
					<Table className={classes.table} aria-label="simple table" dir="rtl">
						<TableBody>
							<TableRow
								style={{
									width: "100%",
									border: "1px solid #7367F0",
									backgroundColor: "#E4E2F7",
								}}
							>
								<TableCell
									component="th"
									className=""
									scope="row"
									align="right"
								>
									<p style={{ fontSize: "20px" }}> تومان</p>
								</TableCell>
								<TableCell
									component="th"
									className=""
									scope="row"
									align="right"
								>
									<img
										className="wallets-crypto-image"
										src="images/crypto-logos/iran.png"
									></img>
								</TableCell>
								<TableCell
									component="th"
									className=""
									scope="row"
									align="right"
								>
									<div style={{ fontSize: "20px", color: "#7468F0" }}>
										موجودی : <span className="wallets-user-balance">0</span>{" "}
										تومان
									</div>
								</TableCell>
								<TableCell
									component="th"
									className=""
									scope="row"
									align="right"
								>
									<div>{""} </div>
								</TableCell>
								<TableCell
									align="right"
									className=""
									style={{
										textAlign: "left",
										width: "500px",
									}}
								>
									<Link to="/toman-deposit">
										<Button
											style={{
												backgroundColor: "#28C76F",
												border: "none",
												padding: "10px 50px",
												marginLeft: "10px",
											}}
											className="wallets-button"
											size="sm"
											active
										>
											واریز
										</Button>
									</Link>
									<Link to="/toman-withdrawal">
										<Button
											style={{
												backgroundColor: "#EA5455",
												border: "none",
												padding: "10px 50px",
												marginLeft: "10px",
											}}
											className="wallets-button"
											size="sm"
											active
										>
											برداشت
										</Button>
									</Link>
								</TableCell>
							</TableRow>
							{rows.map((row) => (
								<TableRow key={row.name}>
									<TableCell
										component="th"
										scope="row"
										align="right"
										style={{ width: "100px" }}
									>
										{row.persian_name} ({row.name})
									</TableCell>
									<TableCell align="right" style={{ width: "100px" }}>
										<img
											src={row.icon_source}
											className="wallets-crypto-image"
										/>
									</TableCell>
									<TableCell align="center">
										<p>قیمت جهانی :{row.world_price} دلار</p>
										<p>قیمت سایت ما :{row.website_price} تومان</p>
									</TableCell>
									<TableCell align="center">
										<p>موجودی : {row.balance}</p>
										<p>معادل : {row.in_tomans} تومان</p>
									</TableCell>
									<TableCell
										align="right"
										className=""
										style={{
											textAlign: "left",
											width: "500px",
										}}
									>
										<Link to={`deposit/${row.name}`}>
											<Button
												style={{
													backgroundColor: "#28C76F",
													border: "none",
													padding: "10px 50px",
													marginLeft: "10px",
												}}
												className="wallets-button"
												size="sm"
												active
											>
												واریز
											</Button>
										</Link>
										<Link to={`withdrawal/${row.name}`}>
											<Button
												style={{
													backgroundColor: "#EA5455",
													border: "none",
													padding: "10px 50px",
													marginLeft: "10px",
												}}
												className="wallets-button"
												size="sm"
												active
											>
												برداشت
											</Button>
										</Link>

										<Link to="/crypto-transactions">
											<Button
												style={{
													backgroundColor: "#7367F0",
													border: "none",
													padding: "10px 50px",
													marginLeft: "10px",
												}}
												className="wallets-button"
												size="sm"
												active
											>
												تاریخچه
											</Button>
										</Link>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</Paper> */}
		</div>
	);
};

export default Wallets;
