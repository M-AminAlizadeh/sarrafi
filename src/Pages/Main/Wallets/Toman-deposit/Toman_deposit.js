import React from "react";
import { Link } from "react-router-dom";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
export default function Toman_deposit() {
	return (
		<div className="toman-deposit-container" dir="rtl">
			<div className="toman-deposit-right-side">
				<h4>
					{" "}
					<TrendingUpIcon /> افزایش موجودی
				</h4>
				<div>
					موجودی: <span>0</span> تومان
				</div>
				<span>واریز از درگاه</span>
				<div>
					<span>مبلغ</span>
					<input type="number" />
				</div>
				<div>
					<span>توضیحات اضافه</span>
					<textarea></textarea>
				</div>
				<input type="submit" value="ثبت و پرداخت" />
			</div>
			<div className="toman-deposit-left-side">
				<h4> نکات و هشدارها</h4>
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
						<Link to="credit-cards">کارت های بانکی من</Link> ثبت نمایید.
					</li>
				</ul>
			</div>
		</div>
	);
}
