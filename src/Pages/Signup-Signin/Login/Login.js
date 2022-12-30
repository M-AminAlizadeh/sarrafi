import { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import { Helmet } from "react-helmet";
import axios from "axios";
import { Cookies } from "react-cookie";

const login_url = "https://api-vercel.iran.liara.run/user/login";
const verify_login_url = "https://api-vercel.iran.liara.run/user/verifyLogin";

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
	const [phoneNumber, set_phoneNumber] = useState("");
	const [phoneNumber_warning, set_phoneNumber_warning] = useState("");
	const [smsCode, set_smsCode] = useState("");
	const [smsCode_warning, set_smsCode_warning] = useState("");
	// Send phoneNumber to server and get the response
	const send_phoneNumber = async (e) => {
		e.preventDefault();
		try {
			const resp = await axios.post(login_url, { phoneNumber });
			console.log(resp.data);
			set_phoneNumber_warning(resp.data.msg);
		} catch (error) {
			console.log(error);
		}
	};
	// Send smsCode to server and get the response
	const send_smsCode = async (e) => {
		e.preventDefault();
		try {
			const resp = await axios.post(verify_login_url, { smsCode });
			console.log(resp.data);
			set_smsCode_warning(resp.data.msg);
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
						{/* phoneNumber */}
						<label htmlFor="phoneNumber" className="label">
							موبایل
						</label>
						<input
							id="phoneNumber"
							type="number"
							className={`login-page-number-input ${
								phoneNumber_warning ? "error-input-border" : null
							}`}
							onChange={(e) => {
								set_phoneNumber(e.target.value);
							}}
						/>
						{phoneNumber_warning ? (
							<span style={{ color: "red" }}>{phoneNumber_warning}</span>
						) : null}
						<button
							className="login-page-submit-button"
							onClick={(e) => {
								send_phoneNumber(e);
							}}
						>
							دریافت کد
						</button>
						{/* smsCode */}
						<label htmlFor="smsCode" className="label">
							کد پیامک
						</label>
						<input
							id="smsCode"
							type="number"
							className={`login-page-number-input ${
								smsCode_warning ? "error-input-border" : null
							}`}
							onChange={(e) => {
								set_smsCode(e.target.value);
							}}
						/>
						{smsCode_warning ? (
							<span style={{ color: "red" }}>{smsCode_warning}</span>
						) : null}
						<button
							className="login-page-submit-button"
							onClick={(e) => {
								send_smsCode(e);
							}}
						>
							ارسال کد
						</button>
					</div>
				</form>
				<Link to="/sign-up">
					{/* signUp Button */}
					<button className="login-page-register-btn">
						اگر هنوز ثبت نام نکردی اینجا کلیک کن
					</button>
				</Link>
			</div>
		</div>
	);
}
