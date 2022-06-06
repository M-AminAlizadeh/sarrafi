import { useState } from "react";
import { Link } from "react-router-dom";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";
import Convertor from "../../../../src/Components/Converter/Converter";
import Table from "../../../../src/Components/Table/Table";
import { Helmet } from "react-helmet";
import "./dashboard.css";

export default function Dashboard(props) {
	const currencies_info = props.currencies_api;
	const user_info = props.user_info;
	const page_title = props.page_title;
	// console.log(user_info);
	/////////////////////// States
	const [dropdown, set_drop_down] = useState(false);
	const [api_data, set_api_data] = useState(currencies_info);
	const [currency_icon, set_currency_icon] = useState(currencies_info[0].icon);
	const [currency_name, set_currency_name] = useState(currencies_info[0].name);
	const [currency_abbr, set_currency_abbr] = useState(currencies_info[0].abbr);
	const [currency_price_toman, set_currency_price_toman] = useState(
		currencies_info[0].website_price
	);
	/////////////////////// States functions
	// this function just toggle dropdown list
	const toggle_dropdown = () => {
		dropdown ? set_drop_down(false) : set_drop_down(true);
		// console.log("hi");
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
	/* Chart Data */
	const data01 = [
		{ name: "بیت کوین", value: 4 },
		{ name: "تتر", value: 3 },
		{ name: "اتریوم", value: 3 },
		{ name: "زی کش", value: 2 },
		{ name: "اینترنت کامپیوتر", value: 2.78 },
		{ name: " فانتوم", value: 1.89 },
	];

	return (
		// Dashboard Container
		<div className="dashboard-container">
			<Helmet>
				<title>{page_title}</title>
			</Helmet>
			{/* Converter */}
			<Convertor currencies_api={currencies_info} />
			{/* User Info And Chart Container*/}
			<div className="dashboard-user-info-and-chart-container component_box_shadow">
				{/* User Info */}
				<div className="dashboard-user-info-container">
					<div className="dashboard-user-info-upper-level">
						<div className="dashboard-user-image-container">
							<img
								className="dashboard-user-image"
								src="https://img.icons8.com/ios-filled/100/49B4AF/user.png"
								alt="user-profile-image"
							/>
						</div>
						<div className="dashboard-user-name">
							{user_info.first_name + " " + user_info.last_name}
						</div>
						<div className="dashboard-user-phone-number">
							{user_info.phone_number}
						</div>
					</div>
					<div className="dashboard-user-info-table-container">
						<h6 className="dashboard-user-info-header">
							سطح حساب کاربری شما:
							<span className="dashboard-user-authentication-level">1</span>
						</h6>
						<table className="dashboard-user-info-table">
							<tbody>
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
							</tbody>
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
			<Table currencies_api={currencies_info} />
		</div>
	);
}
