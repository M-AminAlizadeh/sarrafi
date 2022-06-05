import { React, useState } from "react";
import "./forgot-password.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Forgot_password(props) {
	// forgot password class
	class Forgot_password {
		constructor(phone_number) {
			this.phone_number = phone_number;
		}
	}
	const forgot_password_data = () => {
		const forgot_password_user_data = new Forgot_password(cell_phone_input);
		console.log(forgot_password_user_data);
	};
	// States
	const [cell_phone_input, set_cell_phone_input] = useState("");
	const [password_warning, set_password_warning] = useState("");
	// States functions
	const check_form = (e) => {
		e.preventDefault();
		if (cell_phone_input !== "") {
			set_password_warning(false);
			forgot_password_data();
		} else {
			set_password_warning(true);
		}
	};
	return (
		<div className="whole-forgot-password-container">
			<Helmet>
				<title>{props.page_title}</title>
			</Helmet>
			<div className="forgot-password-page-image-container">
				<img
					src="images/illustrations/Password_Isometric.png"
					className="forgot-password-page-image"
				/>
			</div>
			<div className="forgot-password-page-main-card-container" dir="rtl">
				<div className="signup-page-item-container">
					<h2 className="log-in"> فراموشی رمز عبور</h2>
				</div>
				<div className="forgot-password-page-item-container"></div>
				<div className="forgot-password-page-item-container">
					<p>جهت بازیابی رمز عبور لطفا شماره موبایل خود را درج کنید:</p>
				</div>
				<form>
					<div className="forgot-password-page-form-input">
						<label htmlFor="email" className="label">
							موبایل
						</label>
						<input
							type="number"
							className={`forgot-password-page-number-input ${
								password_warning ? "error-input-border" : null
							}`}
							onChange={(e) => {
								set_cell_phone_input(e.target.value);
							}}
						/>
					</div>
					{password_warning ? (
						<span className="error-message">
							شماره موبایل را بدرستی درج کنید
						</span>
					) : (
						""
					)}
					<div className="display-space-between"></div>
					<div>
						<Link to="/login">
							<button
								type="submit"
								className="forgot-password-page-submit-button"
							>
								ورود
							</button>
						</Link>

						<button
							className="forgot-password-page-submit-button"
							style={{ float: "left" }}
							onClick={(e) => {
								check_form(e);
							}}
						>
							بازیابی رمز
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
