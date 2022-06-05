import { useState } from "react";
import "./sign-up.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Signup(props) {
	// signup class
	class Signup {
		constructor(phone_number) {
			this.phone_number = phone_number;
		}
	}
	const signup_data = () => {
		const signup_user_data = new Signup(cell_phone_input);
		console.log(signup_user_data);
	};

	// States
	const [cell_phone_input, set_cell_phone_input] = useState("");
	const [cell_phone_warning, set_cell_phone_warning] = useState("");
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
