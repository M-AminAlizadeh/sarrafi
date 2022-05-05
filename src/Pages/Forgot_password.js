import React from "react";
import "./forgot-password.css";
import { Link } from "react-router-dom";

export default function Forgot_password() {
	return (
		<div className="whole-forgot-password-container">
			<div
				className="forgot-password-page-image-container"
				style={{
					width: "50%",
					height: "53vh",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<img
					src="images/illustrations/Password_Isometric.png"
					style={{ width: "50%" }}
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
							className="forgot-password-page-number-input"
						></input>
					</div>
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
						>
							بازیابی رمز
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
