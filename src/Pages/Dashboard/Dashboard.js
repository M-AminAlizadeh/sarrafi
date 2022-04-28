import React from "react";
import "./dashboard.css";
import { Link } from "react-router-dom";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
export default function Dashboard() {
	{
		/* Chart Data */
	}
	const data01 = [
		{ name: "بیت کوین", value: 4 },
		{ name: "تتر", value: 3 },
		{ name: "اتریوم", value: 3 },
		{ name: "زی کش", value: 2 },
		{ name: "اینترنت کامپیوتر", value: 2.78 },
		{ name: " فانتوم", value: 1.89 },
	];
	{
		// Table Data
	}

	const useStyles = makeStyles({
		table: {
			minWidth: 650,
		},
	});

	function createData(logo, name, buy_price, sell_price, inventory) {
		return { logo, name, buy_price, sell_price, inventory };
	}

	const rows = [
		createData(
			<img src="images/crypto-logos/bitcoin.png"></img>,
			"بیت کوین",
			1110416164,
			1098768442,
			4.0
		),
		createData(
			<img src="images/crypto-logos/ethereum.png"></img>,
			"اتریوم",
			0,
			0,
			0
		),
		createData(
			<img src="images/crypto-logos/tether.png"></img>,
			" تتر",
			16.0,
			24,
			6.0
		),
		createData(
			<img src="images/crypto-logos/dogecoin.png"></img>,
			"دوج کوین",
			3.7,
			67,
			4.3
		),
		createData(
			<img src="images/crypto-logos/xrp.png"></img>,
			"ریپل",
			16.0,
			49,
			3.9
		),
		createData(
			<img src="images/crypto-logos/litecoin.png"></img>,
			"لایت کوین",
			16.0,
			49,
			3.9
		),
		createData(
			<img src="images/crypto-logos/bitcoin-cash.png"></img>,
			"بیت کوین کش",
			16.0,
			49,
			3.9
		),
		createData(
			<img src="images/crypto-logos/tron.png"></img>,
			"ترون",
			16.0,
			49,
			3.9
		),
		createData(
			<img src="images/crypto-logos/bnb.png"></img>,
			"بایننس کوین",
			16.0,
			49,
			3.9
		),
		createData(
			<img src="images/crypto-logos/chainlink.png"></img>,
			"چین لینک",
			16.0,
			49,
			3.9
		),
		createData(
			<img src="images/crypto-logos/polkadot.png"></img>,
			"پولکادات",
			16.0,
			49,
			3.9
		),
		createData(
			<img src="images/crypto-logos/zcash.png"></img>,
			"زی کش",
			16.0,
			49,
			3.9
		),
		createData(
			<img src="images/crypto-logos/monero.png"></img>,
			"مونرو",
			16.0,
			49,
			3.9
		),
		createData(
			<img src="images/crypto-logos/eos.png"></img>,
			"ایاس",
			16.0,
			49,
			3.9
		),
		createData(
			<img src="images/crypto-logos/ethereum-classic.png"></img>,
			"اتریوم کلاسیک",
			16.0,
			49,
			3.9
		),
		createData(
			<img src="images/crypto-logos/cardano.png"></img>,
			"کاردانو",
			16.0,
			49,
			3.9
		),
		createData(
			<img src="images/crypto-logos/cosmos.png"></img>,
			"کازماس",
			16.0,
			49,
			3.9
		),
		createData(
			<img src="images/crypto-logos/qtum.png"></img>,
			"کوانتوم",
			16.0,
			49,
			3.9
		),
		createData(
			<img src="images/crypto-logos/algorand.png"></img>,
			"الگورند",
			16.0,
			49,
			3.9
		),
		createData(
			<img src="images/crypto-logos/stellar.png"></img>,
			"استلار",
			16.0,
			49,
			3.9
		),
		createData(
			<img src="images/crypto-logos/iota.png"></img>,
			"ایوتا",
			16.0,
			49,
			3.9
		),
		createData(
			<img src="images/crypto-logos/trueusd.png"></img>,
			"ترو یو اس دی",
			16.0,
			49,
			3.9
		),
		createData(
			<img src="images/crypto-logos/harmony.png"></img>,
			"هارمونی",
			16.0,
			49,
			3.9
		),
		createData(
			<img src="images/crypto-logos/binance.png"></img>,
			"بایننس یو اس دی",
			16.0,
			49,
			3.9
		),
		createData(
			<img src="images/crypto-logos/holo.png"></img>,
			"هولو",
			16.0,
			49,
			3.9
		),
		createData(
			<img src="images/crypto-logos/enjin-coin.png"></img>,
			"انجین کوین",
			16.0,
			49,
			3.9
		),
		createData(
			<img src="images/crypto-logos/chiliz.png"></img>,
			"	چیلیز",
			16.0,
			49,
			3.9
		),
		createData(
			<img src="images/crypto-logos/tomochain.png"></img>,
			"توموچین",
			16.0,
			49,
			3.9
		),
		createData(
			<img src="images/crypto-logos/filecoin.png"></img>,
			"فایل کوین	",
			16.0,
			49,
			3.9
		),
		createData(
			<img src="images/crypto-logos/neo.png"></img>,
			"نئو",
			16.0,
			49,
			3.9
		),
		createData(
			<img src="images/crypto-logos/decentraland.png"></img>,
			"دسنترالند",
			16.0,
			49,
			3.9
		),
		createData(
			<img src="images/crypto-logos/pancakeswap.png"></img>,
			" پنکیک سواپ	",
			16.0,
			49,
			3.9
		),
		createData(
			<img src="images/crypto-logos/ontology.png"></img>,
			" آنتولوژی",
			16.0,
			49,
			3.9
		),
		createData(
			<img src="images/crypto-logos/waves.png"></img>,
			"ویوز",
			16.0,
			49,
			3.9
		),
		createData(
			<img src="images/crypto-logos/swipe.png"></img>,
			"سوایپ",
			16.0,
			49,
			3.9
		),
		createData(
			<img src="images/crypto-logos/uniswap.png"></img>,
			"یونی سواپ	",
			16.0,
			49,
			3.9
		),
		createData(
			<img src="images/crypto-logos/vechain.png"></img>,
			"وی چین	",
			16.0,
			49,
			3.9
		),
		createData(
			<img src="images/crypto-logos/1inch.png"></img>,
			"وان اینچ	",
			16.0,
			49,
			3.9
		),
		createData(
			<img src="images/crypto-logos/shiba.png"></img>,
			"شیبا",
			16.0,
			49,
			3.9
		),
		createData(
			<img src="images/crypto-logos/hedera-hbar.png"></img>,
			"هدرا هشگراف	",
			16.0,
			49,
			3.9
		),
		createData(
			<img src="images/crypto-logos/matic.png"></img>,
			"ماتیک",
			16.0,
			49,
			3.9
		),
		createData(
			<img src="images/crypto-logos/solana.png"></img>,
			"سولانا	",
			16.0,
			49,
			3.9
		),
		createData(
			<img src="images/crypto-logos/theta.png"></img>,
			"تتا",
			16.0,
			49,
			3.9
		),
		createData(
			<img src="images/crypto-logos/tfuel.png"></img>,
			"تا فیول",
			16.0,
			49,
			3.9
		),
		createData(
			<img src="images/crypto-logos/usd-coin.png"></img>,
			"یو اس دی کوین",
			16.0,
			49,
			3.9
		),
		createData(
			<img src="images/crypto-logos/keep-network.png"></img>,
			"کیپ نتورک",
			16.0,
			49,
			3.9
		),
		createData(
			<img src="images/crypto-logos/perlin.png"></img>,
			"پرلین",
			16.0,
			49,
			3.9
		),
		createData(
			<img src="images/crypto-logos/internet-computer.png"></img>,
			"اینترنت کامپیوتر",
			16.0,
			49,
			3.9
		),
		createData(
			<img src="images/crypto-logos/fantom.png"></img>,
			"فانتوم",
			16.0,
			49,
			3.9
		),
		createData(
			<img src="images/crypto-logos/smooth-love-potion.png"></img>,
			"اسموت لاو پوشن	",
			16.0,
			49,
			3.9
		),
		createData(
			<img src="images/crypto-logos/dydx.png"></img>,
			"دی وای دی ایکس	",
			16.0,
			49,
			3.9
		),
		createData(
			<img src="images/crypto-logos/gala.png"></img>,
			"گالا",
			16.0,
			49,
			3.9
		),
		createData(
			<img src="images/crypto-logos/axie-infinity.png"></img>,
			"اکسی اینفینیتی	",
			16.0,
			49,
			3.9
		),
		createData(
			<img src="images/crypto-logos/avax.png"></img>,
			"آواکس",
			16.0,
			49,
			3.9
		),
		createData(
			<img src="images/crypto-logos/bittorrent.png"></img>,
			"	بیت تورنت",
			16.0,
			49,
			3.9
		),
		createData(
			<img src="images/crypto-logos/PerfectMoney.png"></img>,
			"پرفکت مانی",
			16.0,
			49,
			3.9
		),

		createData(
			<img src="images/crypto-logos/PerfectMoney.png"></img>,
			"ووچر پرفکت مانی",
			16.0,
			49,
			3.9
		),
		createData(
			<img src="images/crypto-logos/webmoney.png"></img>,
			"وب مانی",
			16.0,
			49,
			3.9
		),
		createData(
			<img src="images/crypto-logos/paypal.png"></img>,
			"پی پل",
			16.0,
			49,
			3.9
		),
		createData(
			<img src="images/crypto-logos/skrill.png"></img>,
			"اسکریل",
			16.0,
			49,
			3.9
		),
	];

	const classes = useStyles();

	return (
		// Whole Dashboard Container
		<div className="dashboard-container">
			{/* User Info And Chart Container */}
			<div className="dashboard-user-info-and-chart-container">
				{/* User Info */}
				<div className="dashboard-user-info-container">
					<div className="dashboard-user-info-upper-level">
						<div className="dashboard-user-image-container">
							<img
								className="dashboard-user-image"
								src="images/user-icon/user.png"
								alt="user-profile-image"
							/>
						</div>
						<div className="dashboard-user-name">امین علیزاده</div>
						<div className="dashboard-user-phone-number">09050287419</div>
					</div>
					<div className="dashboard-user-info-table-container">
						<h6 className="dashboard-user-info-header">
							سطح حساب کاربری شما:
							<span className="dashboard-user-authentication-level">1</span>
						</h6>
						<table className="dashboard-user-info-table">
							<tr>
								<td className="daily-crypto-withdrawals">
									برداشت روزانه رمز ارز
								</td>
								<td>
									<span>0</span> تومان از <span>0</span> میلیون تومان
								</td>
							</tr>
							<tr>
								<td className="daily-crypto-purchase">
									خرید روزانه ارز دیجیتال
								</td>
								<td>
									<span>0</span> تومان از <span>0</span> میلیون تومان
								</td>
							</tr>
							<tr>
								<td className="crypto-transaction-limitation">
									محدودیت معامله رمز ارز
								</td>
								<td className="crypto-transaction-limitation-status">
									محدودیتی وجود ندارد
								</td>
							</tr>
							<tr>
								<td className="crypto-buying-limitation">
									محدودیت خرید رمز ارز
								</td>
								<td className="crypto-buying-limitation-status">
									محدودیتی وجود ندارد
								</td>
							</tr>
							<tr>
								<td className="crypto-and-rial-deposit-limitation">
									محدودیت واریز ریالی و رمز ارز
								</td>
								<td className="crypto-and-rial-deposit-limitation-status">
									محدودیتی وجود ندارد
								</td>
							</tr>
						</table>
					</div>
					<p className="dashboard-user-info-profile-link-container">
						برای افزایش سطح کاربری خود به قسمت
						<Link
							to="authentication"
							className="dashboard-user-info-profile-link"
						>
							{" "}
							پروفایل و سطح کاربری{" "}
						</Link>
						مراجعه کنید.
					</p>
				</div>
				{/* Dashboard Chart */}

				<div className="dashboard-chart-container">
					<h4 className="dashboard-chart-header">نمودار دارایی های شما</h4>
					<ResponsiveContainer width="100%" height="100%">
						<PieChart width={400} height={400}>
							<Pie
								className="dashboard-chart-pie"
								dataKey="value"
								isAnimationActive={true}
								data={data01}
								cx="50%"
								cy="50%"
								outerRadius={100}
								fill="#28C76F"
								label
							/>
							<Tooltip />
						</PieChart>
					</ResponsiveContainer>
					<div className="dashboard-chart-info">
						<div className="dashboard-rial-wallet-balance">
							<p style={{ textAlign: "center" }}>موجودی کیف پول ریالی</p>
							<p style={{ textAlign: "center" }}>
								<span>0</span> تومان
							</p>
						</div>
						<div className="dashboard-chart-info-bottom-level">
							<div className="dashboard-crypto-value-in-tomans">
								<p>ارزش تومانی کیف پول های رمز ارز</p>
								<p style={{ textAlign: "center" }}>
									<span>0</span> تومان
								</p>
							</div>
							<div className="dashboard-crypto-value-in-dollars">
								<p>ارزش دلاری کیف پول های رمز ارز</p>
								<p style={{ textAlign: "center" }}>
									<span>0</span> دلار
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Dashboard Table */}
			<div className="dashboard-table-container">
				<TableContainer component={Paper}>
					<Table
						className={classes.table}
						aria-label="simple table"
						dir="rtl"
						textAlign="right"
					>
						<TableHead style={{ backgroundColor: "#F8F8F8" }}>
							<TableRow>
								<TableCell style={{ textAlign: "right" }}>ارز</TableCell>
								<TableCell align="right" style={{ textAlign: "right" }}>
									{" "}
									نام ارز
								</TableCell>
								<TableCell align="right">قیمت خرید از ما </TableCell>
								<TableCell align="right">قیمت فروش به ما </TableCell>
								<TableCell align="right">موجودی</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{rows.map((row) => (
								<TableRow
									key={row.logo}
									className="dashboard-table-rows-hover-effect"
								>
									<TableCell
										component="th"
										scope="row"
										style={{
											textAlign: "right",
											fontSize: "16px",
										}}
									>
										{row.logo}
									</TableCell>
									<TableCell
										style={{ textAlign: "right", fontSize: "16px" }}
										align="right"
									>
										{row.name}
									</TableCell>
									<TableCell align="right" style={{ fontSize: "16px" }}>
										{row.buy_price}
									</TableCell>
									<TableCell align="right" style={{ fontSize: "16px" }}>
										{row.sell_price}
									</TableCell>
									<TableCell align="right" style={{ fontSize: "16px" }}>
										{row.inventory}
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</div>
		</div>
	);
}
