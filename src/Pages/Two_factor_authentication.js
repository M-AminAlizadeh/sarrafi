import React from "react";
import "./two-factor-authentication.css";
import { Link } from "react-router-dom";
import Checkbox from "@material-ui/core/Checkbox";

export default function Two_factor_authentication() {
	const [checked, setChecked] = React.useState(false);
	const [checked_2, setChecked_2] = React.useState(false);

	const handleChange = (event) => {
		setChecked(event.target.checked);
	};

	const handleChange_2 = (event) => {
		setChecked_2(event.target.checked);
	};

	return (
		<div
			className="two-factor-authentication-container"
			dir="rtl"
			style={{ display: "flex", flexWrap: "wrap" }}
		>
			<div
				className="two-factor-authentication-profile-card"
				style={{
					flex: "1",
					direction: "rtl",
					margin: "10px",
					border: "3px solid #fff",
					boxShadow: " 0 0 20px #555",
					borderRadius: "20px",
					color: "#626262",
					height: "400px",
				}}
			>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<img
						src="images/user-icon/user.png"
						style={{ width: "100px", padding: "5px" }}
					/>
					<span className="" style={{ padding: "5px" }}>
						امین علیزاده
					</span>
					<span className="" style={{ padding: "5px" }}>
						09050287419
					</span>
				</div>
				<div className="two-factor-authentication-menu-container">
					<ul
						style={{
							listStyle: "none",
							padding: "20px",
							fontSize: "18px",
						}}
					>
						<Link
							to="/authentication"
							style={{ textDecoration: "none", color: "#626262" }}
						>
							<li className="two-factor-authentication-list-item">
								اطلاعات و احراز هویت
							</li>
						</Link>
						<Link
							to="/credit-cards"
							style={{ textDecoration: "none", color: "#626262" }}
						>
							<li className="two-factor-authentication-list-item">
								کارت های بانکی
							</li>
						</Link>
						<Link
							to="/password"
							style={{ textDecoration: "none", color: "#626262" }}
						>
							<li className="two-factor-authentication-list-item">کلمه عبور</li>
						</Link>
						<li className="two-factor-authentication-list-item active">
							ورود دو مرحله‌ای
						</li>
					</ul>
				</div>
			</div>
			{/* Left Side */}
			<div
				className="two-factor-authentication-left-side"
				style={{
					flex: "3",
					direction: "rtl",
					margin: "10px",
					border: "3px solid #fff",
					boxShadow: " 0 0 20px #555",
					borderRadius: "20px",
					padding: "20px",
				}}
			>
				<p style={{ fontSize: "16px", color: "#626262" }}>
					به منظور افزایش سطح ایمنی حساب کاربری خود می توانید احراز هویت دو
					مرحله ای را فعال کنید. با فعال کردن این قابلیت حساب کاربری شما در
					برابر حملات هکرها
					<br /> فیشینگ و سوء استفاده افراد سودجو ایمن خواهد بود.
				</p>
				<div style={{ border: "1px solid #7367F0" }}>
					<div
						className={`${checked ? "" : "unchecked"}`}
						style={{ borderBottom: "1px solid #7367F0" }}
					>
						<Checkbox
							checked={checked}
							onChange={handleChange}
							inputProps={{ "aria-label": "primary checkbox" }}
						/>
						<span>احراز هویت دو مرحله ای از طریق کد پیامکی</span>
						{checked ? (
							<div className="two-factor-authentication-first-row-input-container">
								<input
									className="two-factor-authentication-input"
									type="text"
									placeholder="عدد 5 رقمی"
									style={{ textAlign: "center" }}
									maxLength="5"
								/>
								<input
									type="submit"
									value="فعال سازی"
									className="two-factor-authentication-submit-button"
								/>
							</div>
						) : (
							""
						)}
						<p style={{ padding: "15px" }}>
							با فعالسازی این گزینه برای هر بار ورود به شماره موبایلی که ثبت
							کرده اید کد پنج رقمی ارسال میشود و آن کد را باید موقع ورود درج
							کنید.
						</p>
					</div>
					<div className={`${checked_2 ? "" : "unchecked"}`}>
						<Checkbox
							checked={checked_2}
							onChange={handleChange_2}
							inputProps={{ "aria-label": "primary checkbox" }}
						/>
						<span>احراز هویت دو مرحله ای با Google Authenticator</span>
						<p style={{ padding: "15px" }}>
							جهت فعال سازی این قابلیت، مراحل زیر را دنبال کنید:
						</p>
						<ol>
							<li>
								آخرین نسخه Google Authenticator را از گوگل پلی یا اپل استور
								دریافت نمایید.
							</li>
							<li>
								پس از نصب و اجرای برنامه Google Authenticator از طریق یکی از روش
								های زیر، کلید را به برنامه اضافه نمایید.
							</li>
							<p>
								- Scan a barcode (اسکن بارکد): این گزینه را انتخاب کرده و بارکد
								زیر را اسکن نمایید.
							</p>
							<img
								src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX10238032.jpg"
								style={{ width: "200px" }}
								className="darken-image"
							/>
							<p style={{ padding: "15px" }}>
								{" "}
								Enter a provided key (با استفاده از کلید): این گزینه را انتخاب
								کرده و کد زیر را به دقت وارد نمایید.
							</p>
							<p style={{ fontSize: "25px" }} className="x">
								GA3EBY74X7XOA7BL
							</p>
							<li>
								کد دریافتی (عدد 6 رقمی) را در کادر زیر وارد نموده و دکمه فعال
								سازی را کلیک نمایید.
							</li>
						</ol>
						{checked_2 ? (
							<div className="two-factor-authentication-first-row-input-container">
								<input
									className="two-factor-authentication-input"
									type="text"
									placeholder="عدد 6 رقمی"
									style={{ textAlign: "center" }}
									maxLength="5"
								/>
								<input
									type="submit"
									value="فعال سازی"
									className="two-factor-authentication-submit-button"
								/>
							</div>
						) : (
							""
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
