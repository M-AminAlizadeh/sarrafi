import React from "react";
import TrendingDownIcon from "@material-ui/icons/TrendingDown";
import "./sell.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
export default function Sell() {
	return (
		<div className="sell-page-container" style={{ display: "flex" }}>
			<div
				className="sell-page-article"
				style={{
					flex: 1,
					boxShadow: " 0 0 20px #555",
					border: "3px solid #fff",
					backgroundColor: "#fff",
					borderRadius: "20px",
					padding: "20px",
					margin: "10px",
				}}
			>
				<h4 dir="rtl"> راهنمای فروش</h4>
				<hr />
				<ul className="sell-page-list" dir="rtl">
					<li>
						کارمزد پرداختی از سوی شما برای تراکنش های رمز ارز ها کارمزد شبکه ارز
						مدنظر میباشد و مجموعه ما از این کارمزد نفعی ندارد
					</li>
					<br />
					<li>
						اخیرا ویروس و تروجان تغییر دهنده آدرس در زمانی کپی کردن آن گسترش
						یافته است.حتما در پس از کپی ادرس خود و اعمال آن در کادر کیف ارز مد
						نظر دقت فرمائید و آن را با ادرس خود مقایسه نمائید.
					</li>
					<br />
					<li>
						از آنجایی که تراکنش های رمز ارز ها غیر قابل بازگشت است، چنانچه آدرس
						عمومی شخص دریافت کننده اعتبار را به اشتباه اعلام کنید، تراکنش ارسال
						شده قابل بازگشت نخواهد بود. بنابراین توصیه می کنیم پیش از ثبت سفارش،
						از آدرس عمومی (Public Address) دریافت کننده مطمئن شوید.
					</li>
					<br />
					<li>
						با توجه به غیر قابل برگشت بودن تراکنش رمز ارز ها امکان لغو تراکنش یا
						بازگشت دادن وجه پس از انجام امکان پذیر نیست.
					</li>
					<br />
					<li>
						به این دلیل که ارز های رمزنگاری شده تحت تاثیر برخی از عوامل ممکن است
						صعود یا سقوط ارزش را به صورت ناگهانی تجربه کنند، مجموعه ما همانگونه
						که منفعتی در قبال افزایش ارزش آن نمی برد، مسئولیتی هم در قبال سقوط
						قیمت آن نخواهد داشت.
					</li>
					<br />
					<li>
						مجموعه ما تنها در مورد پرداخت مبلغ سفارش مسئولیت دارد و وظیفه پیگیری
						های بعدی سفارش، برعهده شماست.
					</li>
					<br />
					<li>
						در هنگام خرید فقط مجاز به پرداخت با کارت‌های تایید شده در سایت
						می‌باشید، در غیر این‌صورت وجه پرداختی به صورت اتوماتیک به کارت
						واریزی عودت داده خواهد شد.
					</li>
					<br />
					<li>
						پیش از ثبت درخواست و پرداخت وجه، از میزان ارز وارد شده اطمینان حاصل
						نمایید.
					</li>
					<br />
					<li>
						خرید رمز ارز ها فقط از طریق کیف پول انجام میشود و خرید از درگاه برای
						رمز ارز ها امکان پذیر نیست و بایستی ابتدا از طریق درگاه کیف پول خود
						را شارژ کنید.
					</li>
					<br />
					<li>
						وبسایت ما برای سایت هایی که فعالیت آن ها بر خلاف قوانین جمهوری
						اسلامی ایران است خدماتی ارائه نمیدهد
					</li>
				</ul>
			</div>
			<div
				className="sell-page-input-container"
				dir="rtl"
				style={{
					flex: "2",
					boxShadow: " 0 0 20px #555",
					border: "3px solid #fff",
					backgroundColor: "#fff",
					borderRadius: "20px",
					padding: "10px",
					margin: "10px",
				}}
			>
				<h4>
					<TrendingDownIcon></TrendingDownIcon> فروش ارز
				</h4>
				<div
					style={{
						width: "100%",
						textAlign: "center",
						padding: "20px",
						backgroundColor: "#EAE8FD",
						color: "#887DF2",
						fontSize: "17px",
						borderRadius: "5px",
					}}
				>
					مبلغ دریافتی:<span>0</span> تومان
				</div>
				<div className="sell-page-input-container-first-row">
					<span>انتخاب ارز</span>
					<input className="sell-page-input"></input>
					<div
						style={{
							// border: "1px solid red",
							display: "flex",
							width: "50%",
							justifyContent: "space-around",
							marginTop: "-20px",
							marginRight: "10px",
						}}
					>
						<p>قیمت هر واحد</p>
						<p>
							<span>1,126,045,150</span> تومان
						</p>
					</div>
				</div>
				<hr />
				<div>
					<span>مقدار ارز</span>
					<input type="number" className="sell-page-input"></input>

					<br></br>
					<span style={{ position: "relative", bottom: "20px", right: "30px" }}>
						موجودی قابل تبدیل کیف پول :{" "}
						<span style={{ color: "#FFA956" }}>#0</span>
					</span>
				</div>

				<div>
					<p style={{ margin: "10px" }}>توضیحات اضافه</p>
					<textarea
						rows="8"
						cols="66"
						style={{
							marginRight: "70px",
							border: "1px solid #D9D9D9",
							padding: "10px",
							color: "#5f5f5f",
							fontSize: "14px",
							overflow: "auto",
							borderRadius: "5px",
						}}
					></textarea>
				</div>
				<div>
					<div style={{ display: "flex" }}>
						<p>نحوه دریافت : </p>
						<p>واریز به کیف پول</p>
					</div>
					<p
						style={{
							backgroundColor: "#F1F2F4",
							color: "#BABFC7",
							padding: "10px",
							textAlign: "center",
							borderRadius: "5px",
						}}
					>
						خرید و فروش فقط از طریق کیف پول تومانی شما انجام میشود. برای افزایش
						موجودی به بخش
						<Link
							to="/wallets"
							style={{ textDecoration: "none", color: "#5E50EE" }}
						>
							{" "}
							کیف پول تومانی
						</Link>{" "}
						رجوع کنید.
					</p>
				</div>
				<Button size="lg">ثبت و پرداخت</Button>
			</div>
		</div>
	);
}
