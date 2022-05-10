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
		<div className="whole-login-container">
			<div
				className="login-page-image-container"
				style={{
					width: "50%",
					height: "53vh",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<img src="images/main-logo/cointiger.svg" style={{ width: "50%" }} />
			</div>
			<div className="login-page-main-card-container" dir="rtl">
				<div className="login-page-item-container">
					<h2 className="log-in">ورود</h2>
				</div>
				<div className="login-page-item-container"></div>
				<div className="login-page-item-container">
					<p>خوش آمدید، لطفا شماره موبایل و کلمه عبور خود را درج کنید</p>
				</div>
				<form>
					<div className="login-page-form-input">
						<label htmlFor="email" className="label">
							موبایل
						</label>
						<input
							type="number"
							className="login-page-number-input"
							onChange={(e) => {
								set_cell_phone_input(e.target.value);
							}}
						/>
						{cell_phone_warning ? (
							<span className="warning">شماره موبایل را بدرستی درج کنید</span>
						) : (
							""
						)}
					</div>
					<div className="login-page-form-input">
						<label htmlFor="password" className="label">
							کلمه عبور
						</label>
						<input
							type="password"
							className="login-page-password-input"
							onChange={(e) => {
								set_password_input(e.target.value);
							}}
						/>
					</div>
					{password_warning ? (
						<span className="warning">کلمه عبور را بدرستی درج کنید</span>
					) : (
						""
					)}
					<div className="display-space-between">
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
