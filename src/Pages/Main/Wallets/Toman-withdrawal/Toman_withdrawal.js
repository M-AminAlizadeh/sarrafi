import { useState } from "react";
import TrendingDownIcon from "@material-ui/icons/TrendingDown";
import "./toman-withdrawal.css";

export default function Toman_withdrawal(props) {
	const user_credit_cards_list = props.user_info.credit_cards;
	// States
	const [toman_input, set_toman_input] = useState("");
	const [credit_card, set_credit_card] = useState("");
	const [success_message, set_success_message] = useState(false);
	const [error_message_input, set_error_message_input] = useState(false);
	const [error_message_credit_card, set_error_message_credit_card] =
		useState(false);
	//States functions
	// This function changes the toman value by user input
	const toman_value = (e) => {
		const user_input = e.target.value;
		set_toman_input(user_input);
	};
	// This function changes credit card name by user selection
	const select_credit_card = (e) => {
		set_credit_card(e.target.value);
	};
	// This function checks the form
	const form_checker = (e) => {
		e.preventDefault();
		// Toman Input
		if (toman_input == "") {
			set_error_message_input(true);
		} else {
			set_error_message_input(false);
		}
		// Credit Card
		if (credit_card == "") {
			set_error_message_credit_card(true);
		} else {
			set_error_message_credit_card(false);
		}
		// Success message
		if (credit_card !== "" && toman_input !== "") {
			set_success_message(true);
		} else {
			set_success_message(false);
		}
	};

	return (
		<div className="toman-deposit-container" dir="rtl">
			{/* Toman Bank portal Container */}
			<div className="toman-deposit-right-side component_box_shadow">
				<p className="deposit-header">
					{" "}
					<TrendingDownIcon />
					افزایش موجودی
				</p>
				{/* Balance Div */}
				<div className="deposit-form-crypto-balance">
					قابل برداشت: <span>0</span> تومان
				</div>
				<span>حداقل مبلغ قابل برداشت 50,000 تومان است.</span>
				{/* Form */}
				<form className="toman-deposit-form">
					<div className="toman-portal-header">
						<span>واریز از درگاه</span>
					</div>
					<div className="toman-deposit-value">
						<span>مبلغ</span>
						<input
							type="number"
							placeholder="مبلغ به تومان"
							className={error_message_input ? "error-input-border" : ""}
							onChange={(e) => {
								toman_value(e);
							}}
						/>
					</div>
					{error_message_input ? (
						<span className="error-message">مبلغ را درج کنید</span>
					) : (
						""
					)}
					<div
						className={`toman-withdrawal-credit-cards-container
						`}
					>
						<span>کارت بانکی جهت واریز:</span>
						<select
							name=""
							id="credit-cards"
							className={error_message_credit_card ? "error-input-border" : ""}
							onChange={(e) => {
								select_credit_card(e);
							}}
						>
							<option disabled selected value="false">
								کارت بانکی مورد نظر را انتخاب کنید
							</option>
							{user_credit_cards_list.map((card) => {
								return (
									<>
										<option value={card.bank_name}>{card.bank_name}</option>
									</>
								);
							})}
						</select>
						{error_message_credit_card ? (
							<span className="error-message">کارت بانکی را انتخاب کنید</span>
						) : (
							""
						)}
					</div>
					<div className="toman-deposit-explain">
						<span>توضیحات اضافه</span>
						<textarea cols="60" rows="5"></textarea>
					</div>
					<div className="deposit-submit-btn-container">
						<button
							type="submit"
							onClick={(e) => {
								form_checker(e);
							}}
						>
							ثبت و پرداخت
						</button>
					</div>
					{/* Success message */}
					{success_message ? (
						<div className="success-message-container">
							<span className="success-message">
								درخواست شما با موفقیت ثبت شد
							</span>
						</div>
					) : null}
				</form>
			</div>
			{/* Toman notice container */}
			<div className="toman-deposit-left-side">
				<p> نکات و هشدارها</p>
				<hr />
				<ul>
					<li>
						دقت نمایید پس از ثبت درخواست، امکان لغو درخواست وجود نداشته و وجه
						درخواستی بلافاصله از کیف پول شما کسر می گردد.
					</li>
					<li>
						پس از ثبت، درخواست شما به واحد مالی اعلام شده و مبلغ درخواستی به
						حساب بانکی شما واریز خواهد شد.
					</li>
					<li>
						برای پیگیری درخواست میتوانید به بخش تیکت ها و یا لیست تراکنش ها
						مراجعه کنید.
					</li>
					<li>
						از تاریخ شنبه مورخه ۴ مرداد ماه تمامی سفارت فروش و برداشت به بانک
						های غیر از ملی و ملت بصورت پایا واریز خواهد شد اما هر کاربر روزانه 1
						بار حق برداشت بصورت کارت به کارت تا سقف 300,000 تومان برای هر بانکی
						را دارد.
					</li>
					<li>
						سفارشات فروش و برداشت از کیف پول به مقصد بانک آینده زیر ۲۰ دقیقه
						انجام خواهد شد‌.
					</li>
					<li>
						مابقی بانک ها طبق سیکل پایا بانک مرکزی طی فرمول ذیل به حساب واریز
						میشود.
					</li>
					<li>از ساعت 00:00 تا 10:30 صبح ساعت 11:15 صبح واریز میشود.</li>
					<li>از 10:31 تا 12:00 ساعت 14:00 واریز میشود.</li>
					<li>
						از 12:01 ظهر تا 23:59 فردای آن روز ساعت 04:00 صبح واریز میشود.
					</li>
					<li>
						توصیه میشود برای دریافت آنی وجه از بانک آینده استفاده نمایید‌. با
						تشکر
					</li>
				</ul>
			</div>
		</div>
	);
}
