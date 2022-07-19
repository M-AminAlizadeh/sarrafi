import { useEffect, useState } from "react";
import "./sign-up.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";
import { Cookies } from "react-cookie";

const client = axios.create({
	baseURL: "https://api-vercel.iran.liara.run/user/login",
});

const client_code = axios.create({
	baseURL: "https://api-vercel.iran.liara.run/user/verifyLogin",
});

const cookies = new Cookies();

export default function Signup(props) {
	// signup class
	class Signup {
		constructor(phoneNumber) {
			this.phoneNumber = phoneNumber;
		}
	}
	const signup_data = () => {
		const signup_user_data = new Signup(cell_phone_input);
		console.log(signup_user_data);
	};

	// code class
	class Code {
		constructor(smsCode, phoneNumber) {
			this.smsCode = smsCode;
			this.phoneNumber = phoneNumber;
		}
	}

	const code_data = () => {
		const user_code_data = new Code(code_input, cell_phone_input);
		console.log(user_code_data);
	};
	// States
	const [cell_phone_input, set_cell_phone_input] = useState("");
	const [code_input, set_code_input] = useState("");
	const [cell_phone_warning, set_cell_phone_warning] = useState("");
	const [code_warning, set_code_warning] = useState("");
	const [posts, setPosts] = useState([]);
	const [codes, setCodes] = useState([]);
	// States functions
	const check_form = (e) => {
		e.preventDefault();
		// Cellphone input
		if (cell_phone_input !== "") {
			set_cell_phone_warning(false);
			signup_data();
		} else {
			set_cell_phone_warning(true);
		}
		// Get code
		post_phoneNumber(cell_phone_input);
	};

	const post_phoneNumber = (cell_phone_input) => {
		client
			.post("", {
				phoneNumber: cell_phone_input,
			})
			.then((res) => {
				console.log(res.data.err)
				if(res.data.ok === true){
					setPosts([res.data, ...posts]);
				}else{
					set_cell_phone_warning(res.data.err)
				}
			});
	};
	const send_code = (code_input) => {
		client_code
			.post("", {
				smsCode: code_input,
				phoneNumber: cell_phone_input,
			})
			.then((res) => {
				setCodes([res.data, ...codes]);
				console.log(res);
				if (res.data.ok == true) {
					const token = res.data.Token;
					cookies.set("x-auth-token", token);
				} else {
					set_code_warning();
				}
			});
	};
	return (
		// Page Container
		<div className="whole-signup-container">
			<Helmet>
				<title>{props.page_title}</title>
			</Helmet>
			{/* Image Container */}
			<div className="signup-page-image-container">
				<img
					src="images/illustrations/register.png"
					className="signup-page-image"
				/>
			</div>
			<div
				className="signup-page-main-card-container component_box_shadow"
				dir="rtl"
			>
				<div className="signup-page-item-container">
					<h2 className="log-in">ثبت نام</h2>
				</div>
				<div className="signup-page-item-container"></div>
				<div className="signup-page-item-container">
					<p>
						ضمن مطالعه قوانین و شرایط استفاده از سایت لطفا شماره موبایل خود را
						درج کنید:
					</p>
				</div>
				<form>
					<div className="signup-page-form-input">
						<label htmlFor="email" className="label">
							موبایل
						</label>
						<input
							type="number"
							className={`signup-page-number-input ${
								cell_phone_warning ? "error-input-border" : null
							}`}
							onChange={(e) => {
								set_cell_phone_input(e.target.value);
							}}
						/>
						<input
							type="number"
							onChange={(e) => {
								set_code_input(e.target.value);
							}}
						/>
						<button
							onClick={(e) => {
								e.preventDefault();
								code_data();
								send_code(code_input);
							}}
						>
							ارسال کد
						</button>
					</div>
					{cell_phone_warning ? (
						<span className="error-message">
							شماره موبایل را بدرستی درج کنید
						</span>
					) : (
						""
					)}
					<div className="display-space-between"></div>
					<div>
						<Link to="/login">
							<button type="submit" className="signup-page-submit-button">
								ورود
							</button>
						</Link>
						<Link to="/sign-up">
							<button
								className="signup-page-submit-button"
								style={{ float: "left" }}
								onClick={(e) => {
									check_form(e);
								}}
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
