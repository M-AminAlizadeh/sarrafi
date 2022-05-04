import React from "react";
import "./sign-up.css";
import { Link } from "react-router-dom";

export default function Signup() {
	return (
		<div className="whole-signup-container">
			<div
				className="signup-page-image-container"
				style={{
					width: "50%",
					height: "53vh",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<img
					src="https://panel.exonyx.ir/images/pages/register.jpg"
					style={{ width: "50%" }}
				/>
			</div>
			<div className="signup-page-main-card-container" dir="rtl">
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
						<input type="number" className="signup-page-number-input"></input>
					</div>
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
