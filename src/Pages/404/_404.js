import React from "react";
import { Helmet } from "react-helmet";
import "./404.css";
import { Link } from "react-router-dom";
export default function _404(props) {
	return (
		<div>
			<Helmet>
				<title>{props.page_title}</title>
			</Helmet>
			<div class="err_page">
				<div class="err_page_left">
					<img src="images/illustrations/404.svg" />
				</div>
				<div class="err_page_right">
					<h1>۴۰۴</h1>
					<h4>به نظر گم شدی</h4>
					<p>برای بازگشت به داشبورد دکمه پایین را کلیک کنید</p>
					<Link to="/">
						<button class="err_btn">داشبورد</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
