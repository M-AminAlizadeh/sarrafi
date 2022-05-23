import "./password.css";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Password() {
	// States
	const [current_password_value, set_current_password_value] = useState("");
	const [current_password_error, set_current_password_error] = useState(false);
	const [new_password_value, set_new_password_value] = useState("");
	const [new_password_error, set_new_password_error] = useState(false);
	const [new_password_repeat_value, set_new_password_repeat_value] =
		useState("");
	const [new_password_repeat_error, set_new_password_repeat_error] =
		useState(false);
	const [check_new_password, set_check_new_password] = useState(false);
	// States function
	const form_checker = () => {
		// Current password
		if (current_password_value == "") {
			set_current_password_error(true);
		} else {
			set_current_password_error(false);
		}
		// New password
		if (new_password_value == "") {
			set_new_password_error(true);
		} else {
			set_new_password_error(false);
		}
		// Repeat new password
		if (new_password_repeat_value == "") {
			set_new_password_repeat_error(true);
		} else {
			set_new_password_repeat_error(false);
		}
		// Checks new password and it's repeat value are same or not
		if (new_password_value !== new_password_repeat_value) {
			set_check_new_password(true);
		} else {
			set_check_new_password(false);
		}
	};
	return (
		// Page Container
		<div className="password-page-container">
			{/* Profile Card */}
			<div className="password-page-profile-card ">
				<div className="password-page-profile-card-inside-div">
					<img
						className="password-page-user-icon"
						src="images/user-icon/user.png"
					/>
					<span className="password-page-user-name">امین علیزاده</span>
					<span className="password-page-user-phone-number">09050287419</span>
				</div>
				{/* List Container */}
				<div className="password-page-menu-container">
					<ul>
						<Link
							to="/authentication"
							className="password-page-profile-menu-link"
						>
							<li className="password-page-list-item">اطلاعات و احراز هویت</li>
						</Link>
						<Link
							className="password-page-profile-menu-link"
							to="/credit-cards"
						>
							<li className="password-page-list-item">کارت های بانکی</li>
						</Link>
						<li className="password-page-list-item profile-menu-active">
							کلمه عبور
						</li>
						<Link
							className="password-page-profile-menu-link"
							to="/two-factor-authentication"
						>
							<li className="password-page-list-item">ورود دو مرحله‌ای</li>
						</Link>
					</ul>
				</div>
			</div>
			{/* Left Side */}
			<div className="password-page-left-side component_box_shadow">
				<p>
					در صورت لزوم می‌توانید از طریق این صفحه کلمه عبور خود را تغییر دهید.
					<br />
					سعی کنید کلمه عبور پیچیده ای انتخاب کنید و با سایر حساب های شما در
					سایت های دیگر یکسان نباشد.
					<br /> به منظور افزایش سطح ایمنی حساب کاربری خود می توانید ورود دو
					مرحله ای را نیز فعال کنید.
				</p>
				{/* Input Container */}
				<div className="password-page-input-container">
					<div>
						<label htmlFor="first-password-input">رمز عبور فعلی</label>
						<input
							id="first-password-input"
							type="password"
							placeholder="رمز‌ فعلی"
							className={`password-page-password-input ${
								current_password_error ? "error-input-border" : null
							}`}
							onChange={(e) => {
								set_current_password_value(e.target.value);
							}}
						/>
						{current_password_error ? (
							<span className="error-message">رمز فعلی را وارد کنید</span>
						) : null}
					</div>
					<div>
						<label htmlFor="second-password-input">رمز عبور جدید</label>
						<input
							id="second-password-input"
							type="password"
							placeholder="رمز‌ جدید"
							className={`password-page-password-input ${
								new_password_error ? "error-input-border" : null
							}`}
							onChange={(e) => {
								set_new_password_value(e.target.value);
							}}
						/>
						{new_password_error ? (
							<span className="error-message">رمز عبور جدید را وارد کنید</span>
						) : null}
					</div>
					<div>
						<label htmlFor="third-password-input">تکرار رمز جدید</label>
						<input
							id="third-password-input"
							type="password"
							placeholder="تکرار‌ رمز‌ جدید"
							className={`password-page-password-input ${
								new_password_repeat_error ? "error-input-border" : null
							}`}
							onChange={(e) => {
								set_new_password_repeat_value(e.target.value);
							}}
						/>
						{new_password_repeat_error ? (
							<span className="error-message">رمز عبور جدید را وارد کنید</span>
						) : null}
						{check_new_password ? (
							<span className="error-message">
								تکرار رمز عبور با رمز عبور یکسان نیست
							</span>
						) : null}
					</div>
					{/* Submit Button */}
					<input
						className="password-page-submit-button"
						type="submit"
						value="ثبت تغییرات"
						onClick={() => {
							form_checker();
						}}
					/>
				</div>
			</div>
		</div>
	);
}
