import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

export default function Login() {
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
				<img
					src="https://panel.exonyx.ir/images/logo/logo.png"
					style={{ width: "50%" }}
				/>
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
						<input type="number" className="login-page-number-input"></input>
					</div>
					<div className="login-page-form-input">
						<label htmlFor="password" className="label">
							کلمه عبور
						</label>
						<input
							type="password"
							className="login-page-password-input"
						></input>
					</div>
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
						<button type="submit" className="login-page-submit-button">
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
