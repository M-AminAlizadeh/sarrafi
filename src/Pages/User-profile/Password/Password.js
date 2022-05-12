import "./password.css";
import { Link } from "react-router-dom";
export default function Password() {
	return (
		<div
			className="password-page-container"
			dir="rtl"
			style={{ display: "flex", flexWrap: "wrap" }}
		>
			<div
				className="password-page-profile-card"
				style={{
					flex: "1",
					border: "1px solid red",
					direction: "rtl",
					margin: "10px",
					border: "3px solid #fff",
					boxShadow: " 0 0 20px #555",
					borderRadius: "20px",
					color: "#626262",
					height: "400px",
				}}
			>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<img
						src="images/user-icon/user.png"
						style={{ width: "100px", padding: "5px" }}
					/>
					<span className="" style={{ padding: "5px" }}>
						امین علیزاده
					</span>
					<span className="" style={{ padding: "5px" }}>
						09050287419
					</span>
				</div>
				<div className="password-page-menu-container">
					<ul
						style={{
							listStyle: "none",
							padding: "20px",
							fontSize: "18px",
						}}
					>
						<Link
							to="/authentication"
							style={{ textDecoration: "none", color: "#626262" }}
						>
							<li className="password-page-list-item">اطلاعات و احراز هویت</li>
						</Link>
						<Link
							to="/credit-cards"
							style={{ textDecoration: "none", color: "#626262" }}
						>
							<li className="password-page-list-item">کارت های بانکی</li>
						</Link>
						<li className="password-page-list-item active">کلمه عبور</li>
						<Link
							to="/two-factor-authentication"
							style={{ textDecoration: "none", color: "#626262" }}
						>
							<li className="password-page-list-item">ورود دو مرحله‌ای</li>
						</Link>
					</ul>
				</div>
			</div>
			<div
				className="password-page-left-side"
				style={{
					flex: "3",
					border: "1px solid red",
					direction: "rtl",
					margin: "10px",
					border: "3px solid #fff",
					boxShadow: " 0 0 20px #555",
					borderRadius: "20px",
					padding: "20px",
					fontSize: "16px",
					color: "#626262",
					lineHeight: "1.8em",
				}}
			>
				<p>
					در صورت لزوم می‌توانید از طریق این صفحه کلمه عبور خود را تغییر دهید.
					<br />
					سعی کنید کلمه عبور پیچیده ای انتخاب کنید و با سایر حساب های شما در
					سایت های دیگر یکسان نباشد.
					<br /> به منظور افزایش سطح ایمنی حساب کاربری خود می توانید
					<span style={{ color: "blue", cursor: "pointer" }}>
						ورود دو مرحله ای
					</span>{" "}
					را نیز فعال کنید.
				</p>
				<div
					className="password-page-input-container"
					style={{ textAlign: "center", margin: "100px" }}
				>
					<div>
						<label htmlFor="first-password-input">رمز عبور فعلی</label>
						<input
							id="first-password-input"
							type="password"
							placeholder="رمز‌ فعلی"
							className="password-page-password-input"
						></input>
					</div>
					<div>
						<label htmlFor="second-password-input">رمز عبور جدید</label>
						<input
							id="second-password-input"
							type="password"
							placeholder="رمز‌ جدید"
							className="password-page-password-input"
						></input>
					</div>
					<div>
						<label htmlFor="third-password-input">تکرار رمز جدید</label>
						<input
							id="third-password-input"
							type="password"
							placeholder="تکرار‌ رمز‌ جدید"
							className="password-page-password-input"
						></input>
					</div>
					<input
						className="password-page-submit-button"
						type="submit"
						value="ثبت تغییرات"
						style={{ borderRadius: "15px", outline: "none", margin: "20px" }}
					></input>
				</div>
			</div>
		</div>
	);
}
