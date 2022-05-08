import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import SearchBar from "material-ui-search-bar";
import "./wallets.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
});

const Demo = () => {
	const classes = useStyles();

	const originalRows = [
		{
			name: "بیت کوین (bitcoin)",
			icon: "images/crypto-logos/bitcoin.png",
			world_price: 39309.13,
			website_price: "1,108,517,466",
			balance: 0,
			in_tomans: 0,
		},
		{
			name: "اتریوم (ethereum)",
			icon: "images/crypto-logos/ethereum.png",
			world_price: 39309.13,
			website_price: "1,108,517,466",
			balance: 0,
			in_tomans: 0,
		},
		{
			name: "تتر (tether)",
			icon: "images/crypto-logos/tether.png",
			world_price: 39309.13,
			website_price: "1,108,517,466",
			balance: 0,
			in_tomans: 0,
		},
		{
			name: "دوج کوین (dogecoin)",
			icon: "images/crypto-logos/dogecoin.png",
			world_price: 39309.13,
			website_price: "1,108,517,466",
			balance: 0,
			in_tomans: 0,
		},
		{
			name: "ریپل (ripple)",
			icon: "images/crypto-logos/xrp.png",
			world_price: 39309.13,
			website_price: "1,108,517,466",
			balance: 0,
			in_tomans: 0,
		},
		{
			name: "لایت کوین (litecoin)",
			icon: "images/crypto-logos/litecoin.png",
			world_price: 39309.13,
			website_price: "1,108,517,466",
			balance: 0,
			in_tomans: 0,
		},
		{
			name: "بیتکوین کش (bitcoin cash)",
			icon: "images/crypto-logos/bitcoin-cash.png",
			world_price: 39309.13,
			website_price: "1,108,517,466",
			balance: 0,
			in_tomans: 0,
		},
		{
			name: "ترون (tron)",
			icon: "images/crypto-logos/tron.png",
			world_price: 39309.13,
			website_price: "1,108,517,466",
			balance: 0,
			in_tomans: 0,
		},
		{
			name: "بایننس کوین (binance coin)",
			icon: "images/crypto-logos/bnb.png",
			world_price: 39309.13,
			website_price: "1,108,517,466",
			balance: 0,
			in_tomans: 0,
		},
		{
			name: "چین لینک (chainlink)",
			icon: "images/crypto-logos/chainlink.png",
			world_price: 39309.13,
			website_price: "1,108,517,466",
			balance: 0,
			in_tomans: 0,
		},
		{
			name: "پولکادات (polkadot)",
			icon: "images/crypto-logos/polkadot.png",
			world_price: 39309.13,
			website_price: "1,108,517,466",
			balance: 0,
			in_tomans: 0,
		},
		{
			name: "زی کش (zcash)",
			icon: "images/crypto-logos/zcash.png",
			world_price: 39309.13,
			website_price: "1,108,517,466",
			balance: 0,
			in_tomans: 0,
		},
		{
			name: "مونرو (monero)",
			icon: "images/crypto-logos/monero.png",
			world_price: 39309.13,
			website_price: "1,108,517,466",
			balance: 0,
			in_tomans: 0,
		},
		{
			name: "ایاس (eos)",
			icon: "images/crypto-logos/eos.png",
			world_price: 39309.13,
			website_price: "1,108,517,466",
			balance: 0,
			in_tomans: 0,
		},
		{
			name: "اتریوم کلاسیک (ethereum classic)",
			icon: "images/crypto-logos/ethereum-classic.png",
			world_price: 39309.13,
			website_price: "1,108,517,466",
			balance: 0,
			in_tomans: 0,
		},
		{
			name: "کاردانو (cardano)",
			icon: "images/crypto-logos/cardano.png",
			world_price: 39309.13,
			website_price: "1,108,517,466",
			balance: 0,
			in_tomans: 0,
		},
		{
			name: "کازماس (cosmos)",
			icon: "images/crypto-logos/cosmos.png",
			world_price: 39309.13,
			website_price: "1,108,517,466",
			balance: 0,
			in_tomans: 0,
		},
		{
			name: "کوانتوم (qtum)",
			icon: "images/crypto-logos/qtum.png",
			world_price: 39309.13,
			website_price: "1,108,517,466",
			balance: 0,
			in_tomans: 0,
		},
		{
			name: "الگورند (algorand)",
			icon: "images/crypto-logos/algorand.png",
			world_price: 39309.13,
			website_price: "1,108,517,466",
			balance: 0,
			in_tomans: 0,
		},
		{
			name: "استلار (stellar)",
			icon: "images/crypto-logos/stellar.png",
			world_price: 39309.13,
			website_price: "1,108,517,466",
			balance: 0,
			in_tomans: 0,
		},
		{
			name: "آیوتا (iota)",
			icon: "images/crypto-logos/iota.png",
			world_price: 39309.13,
			website_price: "1,108,517,466",
			balance: 0,
			in_tomans: 0,
		},
		{
			name: "ترو یو اس دی (true usd)",
			icon: "images/crypto-logos/trueusd.png",
			world_price: 39309.13,
			website_price: "1,108,517,466",
			balance: 0,
			in_tomans: 0,
		},
		{
			name: "هارمونی (harmony)",
			icon: "images/crypto-logos/harmony.png",
			world_price: 39309.13,
			website_price: "1,108,517,466",
			balance: 0,
			in_tomans: 0,
		},
		{
			name: "بایننس یو اس دی (binance usd)",
			icon: "images/crypto-logos/binance.png",
			world_price: 39309.13,
			website_price: "1,108,517,466",
			balance: 0,
			in_tomans: 0,
		},
		{
			name: "هولو (holo)",
			icon: "images/crypto-logos/holo.png",
			world_price: 39309.13,
			website_price: "1,108,517,466",
			balance: 0,
			in_tomans: 0,
		},
		{
			name: "انجین کوین (enjin coin)",
			icon: "images/crypto-logos/enjin-coin.png",
			world_price: 39309.13,
			website_price: "1,108,517,466",
			balance: 0,
			in_tomans: 0,
		},
		{
			name: "چیلیز (chilliz)",
			icon: "images/crypto-logos/chiliz.png",
			world_price: 39309.13,
			website_price: "1,108,517,466",
			balance: 0,
			in_tomans: 0,
		},
		{
			name: "توموچین (tomochain)",
			icon: "images/crypto-logos/tomochain.png",
			world_price: 39309.13,
			website_price: "1,108,517,466",
			balance: 0,
			in_tomans: 0,
		},
		{
			name: "فایل کوین (filecoin)",
			icon: "images/crypto-logos/filecoin.png",
			world_price: 39309.13,
			website_price: "1,108,517,466",
			balance: 0,
			in_tomans: 0,
		},
		{
			name: "نئو (neo)",
			icon: "images/crypto-logos/neo.png",
			world_price: 39309.13,
			website_price: "1,108,517,466",
			balance: 0,
			in_tomans: 0,
		},
		{
			name: "دسنترالند (decentraland)",
			icon: "images/crypto-logos/decentraland.png",
			world_price: 39309.13,
			website_price: "1,108,517,466",
			balance: 0,
			in_tomans: 0,
		},
		{
			name: "پنکیک سواپ (pancakeswap)",
			icon: "images/crypto-logos/pancakeswap.png",
			world_price: 39309.13,
			website_price: "1,108,517,466",
			balance: 0,
			in_tomans: 0,
		},
		{
			name: "آنتولوژی (ontology)",
			icon: "images/crypto-logos/ontology.png",
			world_price: 39309.13,
			website_price: "1,108,517,466",
			balance: 0,
			in_tomans: 0,
		},
		{
			name: "ویوز (waves)",
			icon: "images/crypto-logos/waves.png",
			world_price: 39309.13,
			website_price: "1,108,517,466",
			balance: 0,
			in_tomans: 0,
		},
		{
			name: "سوایپ (swipe)",
			icon: "images/crypto-logos/swipe.png",
			world_price: 39309.13,
			website_price: "1,108,517,466",
			balance: 0,
			in_tomans: 0,
		},
		{
			name: "یونی سواپ (uniswap)",
			icon: "images/crypto-logos/uniswap.png",
			world_price: 39309.13,
			website_price: "1,108,517,466",
			balance: 0,
			in_tomans: 0,
		},
		{
			name: "وی چین (vechain)",
			icon: "images/crypto-logos/vechain.png",
			world_price: 39309.13,
			website_price: "1,108,517,466",
			balance: 0,
			in_tomans: 0,
		},
		{
			name: "وان اینچ (1inch)",
			icon: "images/crypto-logos/1inch.png",
			world_price: 39309.13,
			website_price: "1,108,517,466",
			balance: 0,
			in_tomans: 0,
		},
		{
			name: "شیبا (shiba)",
			icon: "images/crypto-logos/shiba.png",
			world_price: 39309.13,
			website_price: "1,108,517,466",
			balance: 0,
			in_tomans: 0,
		},
		{
			name: "هدرا هشگراف (hedera hbar)",
			icon: "images/crypto-logos/hedera-hbar.png",
			world_price: 39309.13,
			website_price: "1,108,517,466",
			balance: 0,
			in_tomans: 0,
		},
		{
			name: "ماتیک (matic)",
			icon: "images/crypto-logos/matic.png",
			world_price: 39309.13,
			website_price: "1,108,517,466",
			balance: 0,
			in_tomans: 0,
		},
		{
			name: "سولانا (solana)",
			icon: "images/crypto-logos/solana.png",
			world_price: 39309.13,
			website_price: "1,108,517,466",
			balance: 0,
			in_tomans: 0,
		},
		{
			name: "تتا (theta)",
			icon: "images/crypto-logos/theta.png",
			world_price: 39309.13,
			website_price: "1,108,517,466",
			balance: 0,
			in_tomans: 0,
		},
		{
			name: "تا فیول (tfuel)",
			icon: "images/crypto-logos/tfuel.png",
			world_price: 39309.13,
			website_price: "1,108,517,466",
			balance: 0,
			in_tomans: 0,
		},
		{
			name: "یو اس دی کوین (usd coin)",
			icon: "images/crypto-logos/usd-coin.png",
			world_price: 39309.13,
			website_price: "1,108,517,466",
			balance: 0,
			in_tomans: 0,
		},
		{
			name: "کیپ نتورک (keep network)",
			icon: "images/crypto-logos/keep-network.png",
			world_price: 39309.13,
			website_price: "1,108,517,466",
			balance: 0,
			in_tomans: 0,
		},
		{
			name: "پرلین (perlin)",
			icon: "images/crypto-logos/perlin.png",
			world_price: 39309.13,
			website_price: "1,108,517,466",
			balance: 0,
			in_tomans: 0,
		},
		{
			name: "اینترنت کامپیوتر (internet computer)",
			icon: "images/crypto-logos/internet-computer.png",
			world_price: 39309.13,
			website_price: "1,108,517,466",
			balance: 0,
			in_tomans: 0,
		},
		{
			name: "فانتوم (fantom)",
			icon: "images/crypto-logos/fantom.png",
			world_price: 39309.13,
			website_price: "1,108,517,466",
			balance: 0,
			in_tomans: 0,
		},
		{
			name: "اسموت لاو پوشن (smooth love potion)",
			icon: "images/crypto-logos/smooth-love-potion.png",
			world_price: 39309.13,
			website_price: "1,108,517,466",
			balance: 0,
			in_tomans: 0,
		},
		{
			name: "دی وای دی ایکس (dydx)",
			icon: "images/crypto-logos/dydx.png",
			world_price: 39309.13,
			website_price: "1,108,517,466",
			balance: 0,
			in_tomans: 0,
		},
		{
			name: "گالا (gala)",
			icon: "images/crypto-logos/gala.png",
			world_price: 39309.13,
			website_price: "1,108,517,466",
			balance: 0,
			in_tomans: 0,
		},
		{
			name: "اکسی اینفینیتی (axie infinity)",
			icon: "images/crypto-logos/axie-infinity.png",
			world_price: 39309.13,
			website_price: "1,108,517,466",
			balance: 0,
			in_tomans: 0,
		},
		{
			name: "آواکس (avax)",
			icon: "images/crypto-logos/avax.png",
			world_price: 39309.13,
			website_price: "1,108,517,466",
			balance: 0,
			in_tomans: 0,
		},
		{
			name: "بیت تورنت (bittorrent)",
			icon: "images/crypto-logos/bittorrent.png",
			world_price: 39309.13,
			website_price: "1,108,517,466",
			balance: 0,
			in_tomans: 0,
		},
	];

	const [rows, setRows] = useState(originalRows);
	const [searched, setSearched] = useState("");

	const requestSearch = (searchedVal) => {
		const filteredRows = originalRows.filter((row) => {
			return row.name.toLowerCase().includes(searchedVal.toLowerCase());
		});
		setRows(filteredRows);
	};

	const cancelSearch = () => {
		setSearched("");
		requestSearch(searched);
	};

	return (
		<div className="wallets-container">
			<Paper dir="rtl">
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
										{row.name}
									</TableCell>
									<TableCell align="right" style={{ width: "100px" }}>
										<img src={row.icon} className="wallets-crypto-image" />
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
			</Paper>
		</div>
	);
};

export default Demo;
