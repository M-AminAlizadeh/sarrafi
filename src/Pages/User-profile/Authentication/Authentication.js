import "./authentication.css";
import { useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { Helmet } from "react-helmet";

export default function Authentication(props) {
	// authentication class
	class Authentication {
		constructor(
			user_name,
			user_last_name,
			user_parent_name,
			user_identication,
			user_birth_date
		) {
			this.user_name = user_name;
			this.user_last_name = user_last_name;
			this.user_parent_name = user_parent_name;
			this.user_identication = user_identication;
			this.user_birth_date = user_birth_date;
		}
	}
	const authentication_data = () => {
		const authentication_user_data = new Authentication(
			user_name,
			user_last_name,
			user_parent_name,
			user_identication,
			user_birth_date
		);
		console.log(authentication_user_data);
	};

	const style = {
		border: "1px solid red",
	};
	// States
	const [level_1, set_level_1] = useState(true);
	const [level_2, set_level_2] = useState(false);
	const [user_name, set_user_name] = useState("");
	const [user_name_warning, set_user_name_warning] = useState(false);
	const [user_last_name, set_user_last_name] = useState("");
	const [user_last_name_warning, set_user_last_name_warning] = useState(false);
	const [user_parent_name, set_user_parent_name] = useState("");
	const [user_parent_name_warning, set_user_parent_name_warning] =
		useState(false);
	const [user_identication, set_user_identication] = useState("");
	const [user_identication_warning, set_user_identication_warning] =
		useState(false);
	// اینا موندن
	const [user_birth_date, set_user_birth_date] = useState("");
	const [user_birth_date_warning, set_user_birth_date_warning] =
		useState(false);
	// state functions
	const display_1 = () => {
		// display level one
		set_level_1(true);
		// hide level two
		set_level_2(false);
	};
	const display_2 = () => {
		// display level two
		set_level_2(true);
		// hide level one
		set_level_1(false);
	};
	// this function check the Form
	const form_checker = () => {
		if (user_name == "") {
			set_user_name_warning(true);
		} else {
			set_user_name_warning(false);
		}
		if (user_last_name == "") {
			set_user_last_name_warning(true);
		} else {
			set_user_last_name_warning(false);
		}
		if (user_identication == "") {
			set_user_identication_warning(true);
		} else {
			set_user_identication_warning(false);
		}
		if (user_parent_name == "") {
			set_user_parent_name_warning(true);
		} else {
			set_user_parent_name_warning(false);
		}
		if (user_birth_date == "") {
			set_user_birth_date_warning(true);
		} else {
			set_user_birth_date_warning(false);
		}
		if (
			user_name !== "" &&
			user_last_name !== "" &&
			user_identication !== "" &&
			user_parent_name !== ""
			// user_birth_date !== ""
		) {
			authentication_data();
		}
	};

	return (
		<div className="authentication-container component_box_shadow">
			<Helmet>
				<title>{props.page_title}</title>
			</Helmet>
			<h4>سطوح کاربری و احراز هویت</h4>
			<p>
				در این قسمت میتوانید احراز هویت خود را تکمیل نمایید و برای ارتقاء سطح
				کاربری خود فقط باید اطلاعات آن سطح را تکمیل نمایید.
			</p>

			<div className="authentication-level-number-container">
				<p className="authentication-big-number">{level_1 ? "۱" : "۲"}</p>
				<p>
					حساب کاربری شما در سطح
					<span> {level_1 ? `"یک"` : `"دو"`}</span> قراردارد.
				</p>
				<hr />
			</div>
			<p className="authentication-list-header">
				امکانات و محدودیت های سطح یک:
			</p>
			<ul>
				<li>خرید و فروش و ترید بی نهایت رمز ارزها</li>
				<li>ممنوع بودن برداشت رمز ارزها</li>
				<li>ممنوع بودن خرید ارز دیجیتال</li>
			</ul>
			<hr className="authentication-line-after-ul" />
			<p className="authentication-header">سطوح کاربری و احراز هویت</p>
			<p>
				در هر سطح توضیحات و اطلاعات خواسته شده قابل مشاهده و تکمیل کردن است.
			</p>
			<div className="authentication-levels-container">
				<div
					className={`authentication-progress-line ${
						level_1 ? "half" : "full"
					}`}
				></div>
				<div className="authentication-gray-bar"></div>
				<div
					className={`authentication-levels btn-level-one ${
						level_1 || level_2 ? "active-border" : ""
					} ${level_1 ? "active" : ""}`}
					id="1"
					onClick={() => {
						display_1();
					}}
				>
					<span>سطح یک</span>
				</div>
				<div
					className={`authentication-levels btn-level-two ${
						level_2 ? "active-border" : ""
					} ${level_2 ? "active" : ""}`}
					id="2"
					onClick={() => {
						display_2();
					}}
				>
					<span>سطح دو</span>
				</div>
			</div>
			<hr />
			{level_1 ? (
				<div className="level-one-cotainer levels-info-container">
					<p>
						برای سطح یک فقط میبایست مشخصات زیر را تکمیل نمایید و همچنین برای
						خرید از درگاه باید در قسمت کارت های بانکی، یک کارت بانکی ثبت کنید.
					</p>
					<p className="authentication-list-header">
						امکانات و محدودیت های سطح یک:
					</p>
					<ul>
						<li>خرید و فروش و ترید بی نهایت رمز ارزها</li>
						<li>ممنوع بودن برداشت رمز ارزها</li>
						<li>ممنوع بودن خرید ارز دیجیتال</li>
					</ul>
					<div className="authentication-level-one-input-container">
						<div className="authentication-level-one-first-row">
							<div className="authentication-level-one-name-input-container">
								<label htmlFor="name">نام</label>
								<input
									type="text"
									onChange={(e) => {
										set_user_name(e.target.value);
									}}
									className={user_name_warning ? "error-input-border" : null}
								></input>
							</div>
							<div className="authentication-level-one-last-name-input-container">
								<label htmlFor="last-name">نام خانوادگی</label>
								<input
									type="text"
									onChange={(e) => {
										set_user_last_name(e.target.value);
									}}
									className={
										user_last_name_warning ? "error-input-border" : null
									}
								></input>
							</div>
						</div>
						<div className="authentication-level-one-second-row">
							<div>
								<label htmlFor="ID">کد ملی</label>
								<input
									type="number"
									className={`authentication-level-one-id-input-container ${
										user_identication_warning ? "error-input-border" : null
									}`}
									onChange={(e) => {
										set_user_identication(e.target.value);
									}}
								></input>
							</div>
							<div className="authentication-level-one-parent-name-input-container">
								<label htmlFor="name">نام پدر</label>
								<input
									type="text"
									onChange={(e) => {
										set_user_parent_name(e.target.value);
									}}
									className={
										user_parent_name_warning ? "error-input-border" : null
									}
								></input>
							</div>
						</div>
						<div className="authentication-level-one-datepicker-container">
							<label htmlFor="name">
								تاریخ تولد (هجده سال به بالا امکان ثبت وجود دارد)
							</label>
							<br />
							<DatePicker
								calendar={persian}
								locale={persian_fa}
								className="date-picker"
								placeholder="تاریخ تولدتان  را وارد کنید"
							/>
						</div>

						<div>
							<input
								type="submit"
								value="ثبت اطلاعات"
								onClick={() => {
									form_checker();
								}}
							></input>
						</div>
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
					<p className="authentication-header">امکانات و محدودیت های سطح دو:</p>
					<ul>
						<li>خرید ارز دیجیتال با محدودیت روزانه 7,000,000 تومان</li>
						<li>ممنوع بودن برداشت رمز ارزها</li>
					</ul>
					<p className="authentication-level-two-contract-paragraph">
						متن قرارداد:<br></br> "احراز هویت جهت خرید ارز های دیجیتال از سایت
						<br></br> نام و نام خانوادگی :<br></br> شماره موبایل :<br></br>
						اینجانب تمامی قوانین وبسایت را خوانده و می پذیرم همچنین از خدمات
						برای انجام هیچگونه فعالیت خلاف قوانین جمهوری اسلامی ایران برای مثال
						( قمار و شرطبندی ، پولشویی و کلاهبرداری ) استفاده نخواهم کرد. حساب
						کاربری و حساب بانکی اینجانب در اختیار خودم بوده و هیچ شخص ثالثی به
						آن دسترسی ندارد. در صورت انجام موارد غیرقانونی تمامی عواقب آن به
						عهده اینجانب می باشد."
					</p>
					<hr className="authentication-level-two-hr" />
					<p className="authentication-level-two-notice">
						نکات :<br></br>- منظور از سلفی این است که چهره شما نیز مشخص باشد به
						همراه قرارداد و کارت شناسایی.<br></br> - حتما با دوربین پشت گوشی
						عکسبرداری کنید تا متون در عکس برعکس نیوفتد.<br></br> - تصویر خوانا و
						واضح باشد ، توصیه میشود در عکسبرداری از یک شخص دیگر کمک بخواهید و
						ایشان از شما عکس بگیرد.
					</p>
					<div className="authentication-level-two-modal-button">
						نمایش تصویر نمونه
					</div>
					<div className="authentication-level-two-input-container">
						<p>با کلیک بر روی باکس زیر تصویر را آپلود کنید</p>
						<input type="file"></input>
						<input
							className="authentication-level-two-submit-button"
							type="submit"
							value="ثبت تصویر"
						></input>
					</div>
				</div>
			) : (
				""
			)}
		</div>
	);
}
