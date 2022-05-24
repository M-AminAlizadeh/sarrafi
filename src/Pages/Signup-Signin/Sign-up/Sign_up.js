import { useState } from "react";
import "./sign-up.css";
import { Link } from "react-router-dom";

export default function Signup() {
	// States
	const [cell_phone_input, set_cell_phone_input] = useState("");
	const [cell_phone_warning, set_cell_phone_warning] = useState("");
	// States functions
	const check_form = (e) => {
		e.preventDefault();
		// Cellphone input
		if (cell_phone_input !== "") {
			set_cell_phone_warning(false);
		} else {
			set_cell_phone_warning(true);
		}
	};
	return (
		// Page Container
		<div className="whole-signup-container">
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
							className="signup-page-number-input"
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
