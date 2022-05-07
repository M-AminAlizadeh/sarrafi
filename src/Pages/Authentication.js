import "./authentication.css";
import { useState } from "react";
export default function Authentication() {
	const [level_1, set_level_1] = useState(true);
	const [level_2, set_level_2] = useState(false);
	const [level_3, set_level_3] = useState(false);
	const [level_4, set_level_4] = useState(false);
	const [level_5, set_level_5] = useState(false);
	const [level_6, set_level_6] = useState(false);

	const display_1 = () => {
		// display level one
		set_level_1(true);
		// hide level two
		set_level_2(false);
		// hide level three
		set_level_3(false);
		// hide level four
		set_level_4(false);
		// hide level five
		set_level_5(false);
		// hide level six
		set_level_6(false);
	};
	const display_2 = () => {
		// display level two
		set_level_2(true);
		// hide level one
		set_level_1(false);
		// hide level three
		set_level_3(false);
		// hide level four
		set_level_4(false);
		// hide level five
		set_level_5(false);
		// hide level six
		set_level_6(false);
	};
	const display_3 = () => {
		// display level three
		set_level_3(true);
		// hide level six
		set_level_6(false);
		// hide level five
		set_level_5(false);
		// hide level four
		set_level_4(false);
		// hide level two
		set_level_2(false);
		// hide level one
		set_level_1(false);
	};
	const display_4 = () => {
		// display level four
		set_level_4(true);
		// hide level six
		set_level_6(false);
		// hide level five
		set_level_5(false);
		// hide level three
		set_level_3(false);
		// hide level two
		set_level_2(false);
		// hide level one
		set_level_1(false);
	};
	const display_5 = () => {
		// display level five
		set_level_5(true);
		// hide level six
		set_level_6(false);
		// hide level four
		set_level_4(false);
		// hide level three
		set_level_3(false);
		// hide level two
		set_level_2(false);
		// hide level one
		set_level_1(false);
	};
	const display_6 = () => {
		// display level six
		set_level_6(true);
		// hide level five
		set_level_5(false);
		// hide level four
		set_level_4(false);
		// hide level three
		set_level_3(false);
		// hide level two
		set_level_2(false);
		// hide level one
		set_level_1(false);
	};

	return (
		<div
			className="authentication-container"
			dir="rtl"
			style={{
				width: "90%",
				margin: "auto",
				border: "3px solid #fff",
				borderRadius: "20px",
				boxShadow: " 0 0 20px #555",
				padding: "20px",
			}}
		>
			<h4>سطوح کاربری و احراز هویت</h4>
			<p>
				در این قسمت میتوانید احراز هویت خود را تکمیل نمایید و برای ارتقاء سطح
				کاربری خود فقط باید اطلاعات آن سطح را تکمیل نمایید.
			</p>

			<div
				style={{
					border: "1px solid red",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<h1>
					{level_1
						? "۱"
						: level_2
						? "۲"
						: level_3
						? "۳"
						: level_4
						? "۴"
						: level_5
						? "۵"
						: "۶"}
				</h1>
				<p>
					حساب کاربری شما در سطح
					<span>
						{" "}
						{level_1
							? "یک"
							: level_2
							? "دو"
							: level_3
							? "سه"
							: level_4
							? "چهار"
							: level_5
							? "پنج"
							: "شش"}
					</span>{" "}
					قراردارد.
				</p>
				<hr style={{ width: "50%" }} />
			</div>
			<p>امکانات و محدودیت های سطح یک:</p>
			<ul>
				<li>خرید و فروش و ترید بی نهایت رمز ارزها</li>
				<li>ممنوع بودن برداشت رمز ارزها</li>
				<li>ممنوع بودن خرید ارز دیجیتال</li>
			</ul>
			<hr />
			<h4>سطوح کاربری و احراز هویت</h4>
			<p>
				در هر سطح توضیحات و اطلاعات خواسته شده قابل مشاهده و تکمیل کردن است.
			</p>
			<div
				className="authentication-levels-container"
				style={{
					display: "flex",
					justifyContent: "space-evenly",
					position: "relative",
				}}
			>
				<div
					className={`${
						level_1
							? "one-sixth"
							: level_2
							? "two-sixth"
							: level_3
							? "three-sixth"
							: level_4
							? "four-sixth"
							: level_5
							? "five-sixth"
							: "six-sixth"
					}`}
					style={{
						border: "1px solid #7367F0",
						width: "90%",
						position: "absolute",
						top: "50%",
						right: "0",
						height: "3px",
						backgroundColor: "#7367F0",
						borderRadius: "10px",
						zIndex: "2",
						transition: "0.4s",
					}}
				></div>
				<div
					style={{
						border: "1px solid #d9d9d9",
						width: "90%",
						position: "absolute",
						top: "50%",
						right: "0",
						height: "3px",
						backgroundColor: "#d9d9d9",
						borderRadius: "10px",
					}}
				></div>
				<div
					className={`authentication-levels btn-level-one ${
						level_1 || level_2 || level_3 || level_4 || level_5 || level_6
							? "active-border"
							: ""
					} ${level_1 ? "active" : ""}`}
					id="1"
					onClick={() => {
						display_1();
					}}
				>
					<p>۱</p>
					<span>سطح یک</span>
				</div>
				<div
					className={`authentication-levels btn-level-two ${
						level_2 || level_3 || level_4 || level_5 || level_6
							? "active-border"
							: ""
					} ${level_2 ? "active" : ""}`}
					id="2"
					onClick={() => {
						display_2();
					}}
				>
					<p>۲</p>
					<span>سطح دو</span>
				</div>
				<div
					className={`authentication-levels btn-level-three ${
						level_3 || level_4 || level_5 || level_6 ? "active-border" : ""
					} ${level_3 ? "active" : ""}`}
					id="3"
					onClick={() => {
						display_3();
					}}
				>
					<p>۳</p>
					<span>سطح سه</span>
				</div>
				<div
					className={`authentication-levels btn-level-four ${
						level_4 || level_5 || level_6 ? "active-border" : ""
					} ${level_4 ? "active" : ""}`}
					id="4"
					onClick={() => {
						display_4();
					}}
				>
					<p>۴</p>
					<span>سطح چهار</span>
				</div>
				<div
					className={`authentication-levels btn-level-five ${
						level_5 || level_6 ? "active-border" : ""
					} ${level_5 ? "active" : ""}`}
					id="5"
					onClick={() => {
						display_5();
					}}
				>
					<p>۵</p>
					<span>سطح پنج</span>
				</div>
				<div
					className={`authentication-levels btn-level-six ${
						level_6 ? "active-border" : ""
					} ${level_6 ? "active" : ""}`}
					id="6"
					onClick={() => {
						display_6();
					}}
				>
					<p>۶</p>
					<span>سطح شش</span>
				</div>
			</div>

			{level_1 ? (
				<div className="level-one-cotainer levels-info-container">
					<p>
						برای سطح یک فقط میبایست مشخصات زیر را تکمیل نمایید و همچنین برای
						خرید از درگاه باید در قسمت کارت های بانکی، یک کارت بانکی ثبت کنید.
					</p>
					<p>امکانات و محدودیت های سطح یک:</p>
					<ul>
						<li>خرید و فروش و ترید بی نهایت رمز ارزها</li>
						<li>ممنوع بودن برداشت رمز ارزها</li>
						<li>ممنوع بودن خرید ارز دیجیتال</li>
					</ul>
					<div className="authentication-level-one-input-container">
						<label htmlFor="name">نام</label>
						<input type="text"></input>
						<label htmlFor="last-name">نام خانوادگی</label>
						<input type="text"></input>
						<label htmlFor="ID">کد ملی</label>
						<input type="number"></input>
						<label htmlFor="name">نام پدر</label>
						<input type="text"></input>
						<label htmlFor="name">
							تاریخ تولد (هجده سال به بالا امکان ثبت وجود دارد)
						</label>
						<input type="text"></input>
						<input type="submit" value="ثبت اطلاعات"></input>
					</div>
				</div>
			) : (
				""
			)}
			{level_2 ? (
				<div className="level-two-container levels-info-container">
					<p>
						برای این سطح باید تصویر سلفی به همراه مدارک شناسایی را ثبت کنید که
						در این مرحله مدراک شما باید توسط پشتیبانی تایید گردد که در کمترین
						زمان ممکن این کار انجام میشود.
					</p>
					<p>امکانات و محدودیت های سطح دو:</p>
					<ul>
						<li>خرید ارز دیجیتال با محدودیت روزانه 7,000,000 تومان</li>
						<li>ممنوع بودن برداشت رمز ارزها</li>
					</ul>
					<p>
						متن قرارداد:<br></br> "احراز هویت جهت خرید ارز های دیجیتال از سایت
						<br></br> نام و نام خانوادگی :<br></br> شماره موبایل :<br></br>
						اینجانب تمامی قوانین وبسایت را خوانده و می پذیرم همچنین از خدمات
						برای انجام هیچگونه فعالیت خلاف قوانین جمهوری اسلامی ایران برای مثال
						( قمار و شرطبندی ، پولشویی و کلاهبرداری ) استفاده نخواهم کرد. حساب
						کاربری و حساب بانکی اینجانب در اختیار خودم بوده و هیچ شخص ثالثی به
						آن دسترسی ندارد. در صورت انجام موارد غیرقانونی تمامی عواقب آن به
						عهده اینجانب می باشد."
					</p>
					<hr />
					<p>
						نکات :<br></br>- منظور از سلفی این است که چهره شما نیز مشخص باشد به
						همراه قرارداد و کارت شناسایی.<br></br> - حتما با دوربین پشت گوشی
						عکسبرداری کنید تا متون در عکس برعکس نیوفتد.<br></br> - تصویر خوانا و
						واضح باشد ، توصیه میشود در عکسبرداری از یک شخص دیگر کمک بخواهید و
						ایشان از شما عکس بگیرد.
					</p>
					<button>نمایش تصویر نمونه</button>
				</div>
			) : (
				""
			)}
			{level_3 ? (
				<div className="level-three-container levels-info-container">
					<h1>سطح ۳</h1>
				</div>
			) : (
				""
			)}
			{level_4 ? (
				<div className="level-four-container levels-info-container">
					<h1>سطح ۴</h1>
				</div>
			) : (
				""
			)}
			{level_5 ? (
				<div className="level-five-container levels-info-container">
					<h1>سطح ۵</h1>
				</div>
			) : (
				""
			)}
			{level_6 ? (
				<div className="level-six-container levels-info-container">
					<h1>سطح ۶</h1>
				</div>
			) : (
				""
			)}
		</div>
	);
}
