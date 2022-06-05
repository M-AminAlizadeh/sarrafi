import { useState } from "react";
import { Link } from "react-router-dom";
import "./toman-deposit.css";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import { Helmet } from "react-helmet";
export default function Toman_deposit(props) {
	const user_info = props.user_info;
	// toman deposit class
	class Toman_deposit {
		constructor(toman_value, description) {
			this.toman_value = toman_value;
			this.description = description;
		}
	}
	const Toman_deposit_data = () => {
		const toman_data = new Toman_deposit(toman_input, description_value);
		console.log(toman_data);
	};
	// States
	const [toman_input, set_toman_input] = useState("");
	const [success_message, set_success_message] = useState(false);
	const [error_message, set_error_message] = useState(false);
	const [description_value, set_description_value] = useState("");
	//States functions
	// This function changes the toman value by user input
	const toman_value = (e) => {
		const user_input = e.target.value;
		set_toman_input(user_input);
	};
	// This function checks the form
	const form_checker = (e) => {
		e.preventDefault();
		if (toman_input === "") {
			set_error_message(true);
			set_success_message(false);
		} else {
			set_error_message(false);
			set_success_message(true);
			Toman_deposit_data();
		}
	};
	return (
		<div className="toman-deposit-container" dir="rtl">
			<Helmet>
				<title>{props.page_title}</title>
			</Helmet>
			{/* Toman Bank portal Container */}
			<div className="toman-deposit-right-side component_box_shadow">
				<p className="deposit-header">
					{" "}
					<TrendingUpIcon />
					افزایش موجودی
				</p>
				{/* Balance Div */}
				<div className="deposit-form-crypto-balance">
					موجودی: <span>{user_info.balance.rial_balance}</span> تومان
				</div>
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
							className={error_message ? "error-input-border" : ""}
							onChange={(e) => {
								toman_value(e);
							}}
						/>
					</div>
					{error_message ? (
						<span className="error-message">مبلغ را درج کنید</span>
					) : (
						""
					)}
					<div className="toman-deposit-explain">
						<span>توضیحات اضافه</span>
						<textarea
							cols="60"
							rows="5"
							onChange={(e) => {
								set_description_value(e.target.value);
							}}
						></textarea>
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
						موجودی کیف پول به شما این امکان را می دهد تا در مواردی که درگاه
						بانکی مشکل دارد سریعتر خرید کنید و هر بار نیاز به وارد کردن اطلاعات
						حساب بانکی نباشد.
					</li>
					<li>
						جهت استفاده از موجودی کیف پول در هنگام پرداخت فاکتور، می بایست گزینه
						پرداخت با «کیف پول» را انتخاب نمایید.
					</li>
					<li>
						تنها زمانی می توانید از اعتبار کیف پول برای پرداخت فاکتور استفاده
						کنید که کیف پول شما موجودی کافی داشته باشد.
					</li>
					<li>
						چنان چه کیف پول خود را توسط چندین کارت بانکی شارژ می کنید، به منظور
						جلوگیری از تأخیر در انجام سفارش، اطلاعات کارت بانکی خود را در بخش
						<Link to="/credit-cards"> کارت های بانکی من </Link> ثبت نمایید.
					</li>
				</ul>
			</div>
		</div>
	);
}
