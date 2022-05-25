import { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {
	// States
	const [cell_phone_input, set_cell_phone_input] = useState("");
	const [password_input, set_password_input] = useState("");
	const [cell_phone_warning, set_cell_phone_warning] = useState("");
	const [password_warning, set_password_warning] = useState("");
	// States functions
	const check_form = (e) => {
		e.preventDefault();
		// Cellphone input
		if (cell_phone_input !== "") {
			set_cell_phone_warning(false);
		} else {
			set_cell_phone_warning(true);
		}
		// Password input
		if (password_input !== "") {
			set_password_warning(false);
		} else {
			set_password_warning(true);
		}
	};
	return (
		// Page Container
		<div className="whole-login-container">
			{/* Image Container */}
			<div className="login-page-image-container">
				{/* Image Itself */}
				<img
					src="images/main-logo/cointiger.svg"
					className="login-page-image"
				/>
			</div>
			{/* Right Side */}
			<div
				className="login-page-main-card-container component_box_shadow"
				dir="rtl"
			>
				{/* Header Container */}
				<div className="login-page-item-container">
					<h2 className="log-in">ورود</h2>
				</div>
				{/* Sub-Header Container */}
				<div className="login-page-item-container">
					<p>خوش آمدید، لطفا شماره موبایل و کلمه عبور خود را درج کنید</p>
				</div>
				{/* Form */}
				<form>
					<div className="login-page-form-input">
						<label htmlFor="number" className="label">
							موبایل
						</label>
						{/* Phone Number Input */}
						<input
							id="number"
							type="number"
							className={`login-page-number-input ${
								cell_phone_warning ? "error-input-border" : null
							}`}
							onChange={(e) => {
								set_cell_phone_input(e.target.value);
							}}
						/>
						{cell_phone_warning ? (
							<span className="error-message">
								شماره موبایل را بدرستی درج کنید
							</span>
						) : (
							""
						)}
					</div>
					{/* Password Input */}
					<div className="login-page-form-input">
						<label htmlFor="password" className="label">
							کلمه عبور
						</label>
						<input
							type="password"
							className={`login-page-password-input ${
								password_warning ? "error-input-border" : null
							}`}
							onChange={(e) => {
								set_password_input(e.target.value);
							}}
						/>
					</div>
					{password_warning ? (
						<span className="error-message">کلمه عبور را بدرستی درج کنید</span>
					) : (
						""
					)}
					<div className="display-space-between">
						{/* Checkbox Container */}
						<div>
							<input type="checkbox"></input>
							<label htmlFor="password" className="chekbox-label">
								مرا به خاطر بسپار
							</label>
						</div>
						<div>
							<Link to="/forgot-password" className="forgot-password-link">
								فراموشی رمز عبور
							</Link>
						</div>
					</div>
					<div>
						{/* Right Button */}
						<button
							type="submit"
							className="login-page-submit-button"
							onClick={(e) => {
								check_form(e);
							}}
						>
							ورود
						</button>
						<Link to="/sign-up">
							{/* Left Button */}
							<button
								className="login-page-submit-button"
								style={{ float: "left" }}
							>
								ثبت نام
							</button>
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
}
