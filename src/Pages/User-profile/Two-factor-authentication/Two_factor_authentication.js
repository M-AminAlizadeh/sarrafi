import { React, useState } from "react";
import { Link } from "react-router-dom";
import Checkbox from "@material-ui/core/Checkbox";
import "./two-factor-authentication.css";

export default function Two_factor_authentication(props) {
	const user_info = props.user_info;
	// States
	const [checked_sms_auth, set_checked_sms_auth] = useState(false);
	const [checked_google_auth, set_checked_google_auth] = useState(false);
	const [sms_auth_code_value, set_sms_auth_code_value] = useState("");
	const [sms_auth_code_error, set_sms_auth_code_error] = useState(false);
	const [google_auth_code_value, set_google_auth_code_value] = useState("");
	const [google_auth_code_error, set_google_auth_code_error] = useState(false);
	// States functions
	// This function is for toggle sms authentication
	const sms_auth_toggle = (e) => {
		set_checked_sms_auth(e.target.checked);
	};

	// This function is for toggle google authentication
	const google_auth_toggle = (e) => {
		set_checked_google_auth(e.target.checked);
	};
	//
	// This function is for check sms authentication code is empty or not
	const sms_submit = () => {
		if (sms_auth_code_value == "") {
			set_sms_auth_code_error(true);
		} else {
			set_sms_auth_code_error(false);
		}
	};
	// This function is for check google authentication code is empty or not
	const google_submit = () => {
		if (google_auth_code_value == "") {
			set_google_auth_code_error(true);
		} else {
			set_google_auth_code_error(false);
		}
	};

	return (
		<div className="two-factor-authentication-container">
			<div className="two-factor-authentication-profile-card">
				<div className="two-factor-authentication-profile-card-inner-div">
					<img
						className="two-factor-authentication-user-icon"
						src="images/user-icon/user.png"
					/>
					<span className="two-factor-authentication-user-name">
						{user_info.first_name + " " + user_info.last_name}
					</span>
					<span className="two-factor-authentication-user-phone-number">
						{user_info.phone_number}
					</span>
				</div>
				<div className="two-factor-authentication-menu-container">
					<ul>
						<Link
							className="two-factor-authentication-link"
							to="/authentication"
						>
							<li className="two-factor-authentication-list-item">
								اطلاعات و احراز هویت
							</li>
						</Link>
						<Link className="two-factor-authentication-link" to="/credit-cards">
							<li className="two-factor-authentication-list-item">
								کارت های بانکی
							</li>
						</Link>
						<Link className="two-factor-authentication-link" to="/password">
							<li className="two-factor-authentication-list-item">کلمه عبور</li>
						</Link>
						<li className="two-factor-authentication-list-item profile-menu-active">
							ورود دو مرحله‌ای
						</li>
					</ul>
				</div>
			</div>
			{/* Left Side */}
			<div className="two-factor-authentication-left-side component_box_shadow">
				<p>
					به منظور افزایش سطح ایمنی حساب کاربری خود می توانید احراز هویت دو
					مرحله ای را فعال کنید. با فعال کردن این قابلیت حساب کاربری شما در
					برابر حملات هکرها
					<br /> فیشینگ و سوء استفاده افراد سودجو ایمن خواهد بود.
				</p>
				<div className="two-factor-authentication-input-container">
					<div
						className={`${checked_sms_auth ? "" : "unchecked"}`}
						style={{ borderBottom: "1px solid var(--color-primary)" }}
					>
						<Checkbox
							checked={checked_sms_auth}
							onChange={sms_auth_toggle}
							inputProps={{ "aria-label": "primary checkbox" }}
						/>
						<span>احراز هویت دو مرحله ای از طریق کد پیامکی</span>
						{checked_sms_auth ? (
							<div className="two-factor-authentication-first-row-input-container">
								<input
									className={`two-factor-authentication-input ${
										sms_auth_code_error ? "error-input-border" : null
									}`}
									type="text"
									placeholder="عدد 5 رقمی"
									style={{ textAlign: "center" }}
									maxLength="5"
									onChange={(e) => {
										set_sms_auth_code_value(e.target.value);
									}}
								/>
								<input
									type="submit"
									value="فعال سازی"
									className="two-factor-authentication-submit-button"
									onClick={() => {
										sms_submit();
									}}
								/>
								{sms_auth_code_error ? (
									<span className="error-message">رمزی وارد نکرده اید </span>
								) : null}
							</div>
						) : (
							""
						)}
						<p className="two-factor-authentication-paragraph-styles">
							با فعالسازی این گزینه برای هر بار ورود به شماره موبایلی که ثبت
							کرده اید کد پنج رقمی ارسال میشود و آن کد را باید موقع ورود درج
							کنید.
						</p>
					</div>
					<div className={`${checked_google_auth ? "" : "unchecked"}`}>
						<Checkbox
							checked={checked_google_auth}
							onChange={google_auth_toggle}
							inputProps={{ "aria-label": "primary checkbox" }}
						/>
						<span>احراز هویت دو مرحله ای با Google Authenticator</span>
						<p className="two-factor-authentication-paragraph-styles">
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
								className="darken-image two-factor-authentication-barcode-image"
							/>
							<p className="two-factor-authentication-paragraph-styles">
								{" "}
								Enter a provided key (با استفاده از کلید): این گزینه را انتخاب
								کرده و کد زیر را به دقت وارد نمایید.
							</p>
							<p className="two-factor-authentication-code">GA3EBY74X7XOA7BL</p>
							<li>
								کد دریافتی (عدد 6 رقمی) را در کادر زیر وارد نموده و دکمه فعال
								سازی را کلیک نمایید.
							</li>
						</ol>
						{checked_google_auth ? (
							<div className="two-factor-authentication-first-row-input-container">
								<input
									className={`two-factor-authentication-input ${
										google_auth_code_error ? "error-input-border" : null
									}`}
									type="text"
									placeholder="عدد 6 رقمی"
									style={{ textAlign: "center" }}
									maxLength="5"
									onChange={(e) => {
										set_google_auth_code_value(e.target.value);
									}}
								/>
								<input
									type="submit"
									value="فعال سازی"
									className="two-factor-authentication-submit-button"
									onClick={() => {
										google_submit();
									}}
								/>
								{google_auth_code_error ? (
									<span className="error-message">رمزی وارد نکرده اید </span>
								) : null}
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
