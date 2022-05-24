import "./authentication.css";
import { useState } from "react";
import { Calendar, DatePicker } from "react-persian-datepicker";
export default function Authentication() {
	const style = {
		border: "1px solid red",
	};
	const [level_1, set_level_1] = useState(true);
	const [level_2, set_level_2] = useState(false);

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

	return (
		// Page Container
		<div className="authentication-container component_box_shadow">
			<DatePicker styles={style} />
			{/* Header */}
			<p className="authentication-header">سطوح کاربری و احراز هویت</p>
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
						<div
							className="authentication-level-one-first-row"
							style={{ flexDirection: "row" }}
						>
							<div>
								<label htmlFor="name">نام</label>
								<input type="text"></input>
							</div>
							<div>
								<label htmlFor="last-name">نام خانوادگی</label>
								<input type="text"></input>
							</div>
						</div>
						<div
							className="authentication-level-one-second-row"
							style={{ flexDirection: "row" }}
						>
							<div>
								<label htmlFor="ID">کد ملی</label>
								<input type="number"></input>
							</div>
							<div>
								<label htmlFor="name">نام پدر</label>
								<input type="text"></input>
							</div>
						</div>
						<div>
							<label htmlFor="name">
								تاریخ تولد (هجده سال به بالا امکان ثبت وجود دارد)
							</label>
						</div>

						<div>
							<input type="submit" value="ثبت اطلاعات"></input>
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
					<p>
						با کلیک بر روی باکس زیر تصویر را آپلود و یا تصویر را بر روی باکس زیر
						درگ(بکشید و بندازید) کنید
					</p>
					<input type="file"></input>
					<input type="submit" value="ثبت تصویر"></input>
				</div>
			) : (
				""
			)}
		</div>
	);
}
