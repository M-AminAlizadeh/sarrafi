import { useEffect, useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "./sign-up.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";
import { Cookies } from "react-cookie";

const url = "https://api-vercel.iran.liara.run/user/register";
// const client = axios.create({
// 	baseURL: "https://api-vercel.iran.liara.run/user/login",
// });

// const client_code = axios.create({
// 	baseURL: "https://api-vercel.iran.liara.run/user/verifyLogin",
// });

const cookies = new Cookies();

export default function Signup(props) {
	// signup class
	class Signup {
		constructor(
			firstName,
			lastName,
			nationalCode,
			dateBirth,
			fatherName,
			email,
			phoneNumber
		) {
			this.firstName = firstName;
			this.lastName = lastName;
			this.nationalCode = nationalCode;
			this.dateBirth = dateBirth;
			this.fatherName = fatherName;
			this.email = email;
			this.phoneNumber = phoneNumber;
		}
	}
	const signup_data = () => {
		const signup_user_data = new Signup(
			firstName,
			lastName,
			nationalCode,
			dateBirth,
			fatherName,
			email,
			phoneNumber
		);
		console.log(signup_user_data);
	};

	// code class
	// class Code {
	// 	constructor(smsCode, phoneNumber) {
	// 		this.smsCode = smsCode;
	// 		this.phoneNumber = phoneNumber;
	// 	}
	// }

	// const code_data = () => {
	// 	const user_code_data = new Code(code_input, phoneNumber);
	// 	console.log(user_code_data);
	// };
	// States
	const [firstName, set_firstName] = useState("");
	const [lastName, set_lastName] = useState("");
	const [nationalCode, set_nationalCode] = useState("");
	const [fatherName, set_fatherName] = useState("");
	const [dateBirth, setValue] = useState("");
	const [email, set_email] = useState("");
	const [phoneNumber, set_phoneNumber] = useState("");
	const [code_input, set_code_input] = useState("");
	const [cell_phone_warning, set_cell_phone_warning] = useState("");
	const [code_warning, set_code_warning] = useState("");
	const [posts, setPosts] = useState([]);
	const [codes, setCodes] = useState([]);

	// States functions
	const check_form = async (e) => {
		e.preventDefault();
		signup_data();
		try {
			const resp = await axios.post(url, {
				firstName,
				lastName,
				nationalCode,
				dateBirth,
				fatherName,
				email,
				phoneNumber,
			});
			console.log(resp.data);
		} catch (error) {
			console.log(error);
		}
		// Cellphone input
		// if (cell_phone_input !== "") {
		// 	set_cell_phone_warning(false);
		// 	signup_data();
		// } else {
		// 	set_cell_phone_warning(true);
		// }
		// Get code
		// post_phoneNumber(cell_phone_input);
	};

	// const post_phoneNumber = (cell_phone_input) => {
	// 	client
	// 		.post("", {
	// 			phoneNumber: cell_phone_input,
	// 		})
	// 		.then((res) => {
	// 			console.log(res.data.err);
	// 			if (res.data.ok === true) {
	// 				setPosts([res.data, ...posts]);
	// 			} else {
	// 				set_cell_phone_warning(res.data.err);
	// 			}
	// 		});
	// };

	// const send_code = (code_input) => {
	// 	client_code
	// 		.post("", {
	// 			smsCode: code_input,
	// 			phoneNumber: cell_phone_input,
	// 		})
	// 		.then((res) => {
	// 			setCodes([res.data, ...codes]);
	// 			console.log(res);
	// 			if (res.data.ok == true) {
	// 				const token = res.data.Token;
	// 				cookies.set("x-auth-token", token);
	// 			} else {
	// 				set_code_warning();
	// 			}
	// 		});
	// };

	return (
		// Page Container
		<div className="whole-signup-container">
			<Helmet>
				<title>{props.page_title}</title>
			</Helmet>
			<div
				className="signup-page-main-card-container component_box_shadow"
				dir="rtl"
			>
				<div className="signup-page-item-container">
					<h2 className="log-in">ثبت نام</h2>
				</div>
				<div className="signup-page-item-container">
					<p>
						ضمن مطالعه قوانین و شرایط استفاده از سایت لطفا فرم زیر را پر کنید
					</p>
				</div>
				<form>
					<div className="signup-page-form-input">
						{/* FirstName */}
						<label htmlFor="firstName" className="label">
							نام
						</label>
						<input
							type="text"
							id="firstName"
							className="signup-page-input"
							onChange={(e) => {
								set_firstName(e.target.value);
							}}
						/>
						{/* LastName */}
						<label htmlFor="lastName" className="label">
							نام خانوادگی
						</label>
						<input
							type="text"
							id="lastName"
							className="signup-page-input"
							onChange={(e) => {
								set_lastName(e.target.value);
							}}
						/>
						{/* nationalCode */}
						<label htmlFor="nationalCode" className="label">
							کد ملی
						</label>
						<input
							type="text"
							id="nationalCode"
							className="signup-page-input"
							onChange={(e) => {
								set_nationalCode(e.target.value);
							}}
						/>
						{/* BirthDate*/}
						<label className="label">تاریخ تولد</label>
						<DatePicker
							calendar={persian}
							locale={persian_fa}
							className="date-picker"
							placeholder="تاریخ تولدتان  را وارد کنید"
							value={dateBirth}
							onChange={setValue}
						/>
						{/* FatherName */}
						<label htmlFor="fatherName" className="label">
							نام پدر
						</label>
						<input
							type="text"
							id="fatherName"
							className="signup-page-input"
							onChange={(e) => {
								set_fatherName(e.target.value);
							}}
						/>
						{/* Email*/}
						<label htmlFor="email" className="label">
							ایمیل
						</label>
						<input type="email" id="email" className="signup-page-input" />
						{/* PhoneNumber */}
						<label htmlFor="phoneNumber" className="label">
							موبایل<span className="mandatory-sign">*</span>
						</label>
						<input
							type="number"
							id="phoneNumber"
							className={`signup-page-input ${
								cell_phone_warning ? "error-input-border" : null
							}`}
							onChange={(e) => {
								set_phoneNumber(e.target.value);
							}}
						/>
						<br />
						{/* کد دریافتی
						<input
							className="signup-page-number-input"
							type="number"
							onChange={(e) => {
								set_code_input(e.target.value);
							}}
						/> */}
						{/* <button
							className="signup-page-submit-button"
							onClick={(e) => {
								e.preventDefault();
								code_data();
								send_code(code_input);
							}}
							style={{
								marginBottom: "0px",
								textAlign: "center",
								width: "95%",
							}}
						>
							ارسال کد
						</button> */}
					</div>
					<div className="sign-up-links-container">
						<button
							className="signup-page-submit-button"
							onClick={(e) => {
								check_form(e);
							}}
						>
							ثبت نام
						</button>
						<Link to="/login">
							<button type="submit" className="signup-page-submit-button">
								ورود
							</button>
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
}
