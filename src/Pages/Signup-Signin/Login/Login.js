import { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import { Helmet } from "react-helmet";
import axios from "axios";
import { Cookies } from "react-cookie";

const url = "https://api-vercel.iran.liara.run/user/login";

export default function Login(props) {
	// login class
	class Login {
		constructor(phoneNumber) {
			this.phoneNumber = phoneNumber;
		}
	}
	const login_data = () => {
		const login_user_data = new Login(phoneNumber);
		console.log(login_user_data);
	};

	// States
	const [phoneNumber, set_cell_phone_input] = useState("");
	const [cell_phone_warning, set_cell_phone_warning] = useState("");
	// States functions
	const check_form = async (e) => {
		e.preventDefault();
		try {
			const resp = await axios.post(url, { phoneNumber });
			console.log(resp.data);
			set_cell_phone_warning(resp.data.msg);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		// Page Container
		<div className="whole-login-container">
			<Helmet>
				<title>{props.page_title}</title>
			</Helmet>
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
					<p>خوش آمدید، لطفا شماره موبایل خود را وارد کنید</p>
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
					</div>
					{cell_phone_warning ? (
						<span style={{ color: "red" }}>{cell_phone_warning}</span>
					) : (
						""
					)}
					<div className="display-space-between"></div>
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
