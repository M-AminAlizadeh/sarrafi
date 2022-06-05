import "./credit-cards.css";
import { useState, React } from "react";
import { Link } from "react-router-dom";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Helmet } from "react-helmet";

// Table Data **********************************************

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
});

function createData(number, card_number, account_number, shaba, state) {
	return { number, card_number, account_number, shaba, state };
}
// Table Data **********************************************

export default function Credit_cards(props) {
	const user_info = props.user_info;
	const user_credit_cards = props.user_info.credit_cards;
	const rows = [];
	user_credit_cards.map((cc, index) => {
		rows.push(
			createData(
				++index,
				cc.card_number,
				cc.account_number,
				cc.shaba_number,
				cc.situation
			)
		);
	});

	// credit cards class
	class Credit_cards {
		constructor(card_number, account_number, shaba_number, bank_name) {
			this.card_number = card_number;
			this.account_number = account_number;
			this.shaba_number = shaba_number;
			this.bank_name = bank_name;
		}
	}
	const credit_cards_data = () => {
		const credit_cards_user_data = new Credit_cards(
			card_number,
			account_number,
			shaba_number,
			bank_name
		);
		console.log(credit_cards_user_data);
	};

	// States
	const [checked, setChecked] = useState(false);
	const [card_number, set_card_number] = useState("");
	const [card_number_error, set_card_number_error] = useState(false);
	const [account_number, set_account_number] = useState("");
	const [account_number_error, set_account_number_error] = useState(false);
	const [shaba_number, set_shaba_number] = useState("");
	const [shaba_number_error, set_shaba_number_error] = useState(false);
	const [bank_name, set_bank_name] = useState("");
	const [bank_name_error, set_bank_name_error] = useState(false);
	// States functions
	const handleChange = (event) => {
		setChecked(event.target.checked);
	};
	const form_checker = () => {
		// Card number error
		if (card_number == "") {
			set_card_number_error(true);
		} else {
			set_card_number_error(false);
		}
		// Acccount number error
		if (account_number == "") {
			set_account_number_error(true);
		} else {
			set_account_number_error(false);
		}
		// Shaba number error
		if (shaba_number == "") {
			set_shaba_number_error(true);
		} else {
			set_shaba_number_error(false);
		}
		// Bank name error
		if (bank_name == "") {
			set_bank_name_error(true);
		} else {
			set_bank_name_error(false);
		}
		if (
			card_number !== "" &&
			account_number !== "" &&
			shaba_number !== "" &&
			bank_name !== ""
		) {
			credit_cards_data();
		}
	};
	// Table style ###############
	const classes = useStyles();
	// Table style ###############
	return (
		// Page Container
		<div className="credit-cards-container">
			<Helmet>
				<title>{props.page_title}</title>
			</Helmet>
			{/* Right Side */}
			<div className="credit-cards-profile-card">
				<div className="credit-cards-profile-card-inside-div">
					<img
						className="credit-cards-user-icon"
						src="https://img.icons8.com/ios-filled/100/49B4AF/user.png"
					/>
					<span className="credit-cards-user-name">
						{user_info.first_name + " " + user_info.last_name}
					</span>
					<span className="credit-cards-user-phone-number">
						{user_info.phone_number}
					</span>
				</div>
				<div className="credit-cards-menu-container">
					<ul>
						<Link className="credit-cards-menu-links" to="/authentication">
							<li className="credit-cards-list-item">اطلاعات و احراز هویت</li>
						</Link>
						<Link className="credit-cards-menu-links" to="/credit-cards">
							<li className="credit-cards-list-item profile-menu-active">
								کارت های بانکی
							</li>
						</Link>
						<Link className="credit-cards-menu-links" to="/password">
							<li className="credit-cards-list-item">کلمه عبور</li>
						</Link>
						<Link
							className="credit-cards-menu-links"
							to="/two-factor-authentication"
						>
							<li className="credit-cards-list-item">ورود دو مرحله‌ای</li>
						</Link>
					</ul>
				</div>
			</div>
			{/* left side */}
			<div className="credit-cards-left-side component_box_shadow">
				<p>
					جهت دریافت خدمات و سرویس های وب سایت به صورت آنی، می بایست شماره کارت
					بانکی که خرید را توسط آن انجام می دهید ثبت نمایید.
				</p>
				<div className="credit-cards-add-credit-card-container">
					<div className={`${checked ? "" : "unchecked"}`}>
						<Checkbox
							checked={checked}
							onChange={handleChange}
							inputProps={{ "aria-label": "primary checkbox" }}
						/>
						<span>افزودن کارت بانکی</span>
						{checked ? (
							<div className="credit-cards-input-container">
								<label htmlFor="card-number">شماره کارت</label>
								<input
									className={`credit-cards-input ${
										card_number_error ? "error-input-border" : null
									}`}
									type="number"
									placeholder="شماره کارت"
									id="card-number"
									onChange={(e) => {
										set_card_number(e.target.value);
									}}
								/>
								{card_number_error ? (
									<span className="error-message">
										شماره کارت خالیست پر کنید
									</span>
								) : null}
								<label htmlFor="account-number">شماره حساب</label>
								<input
									className={`credit-cards-input ${
										account_number_error ? "error-input-border" : null
									}`}
									type="number"
									placeholder="شماره حساب"
									id="account-number"
									onChange={(e) => {
										set_account_number(e.target.value);
									}}
								/>
								{account_number_error ? (
									<span className="error-message">
										شماره حساب خالیست پر کنید
									</span>
								) : null}
								<br />
								<label htmlFor="shaba-number">شماره شبا </label>
								<input
									className={`credit-cards-input ${
										shaba_number_error ? "error-input-border" : null
									}`}
									type="number"
									placeholder="شماره شبا بدون IR"
									id="shaba-number"
									onChange={(e) => {
										set_shaba_number(e.target.value);
									}}
								/>
								{shaba_number_error ? (
									<span className="error-message">
										شماره حساب خالیست پر کنید
									</span>
								) : null}
								<label>نام بانک</label>
								<select
									className={`credit-cards-input credit-cards-select-box ${
										bank_name_error ? "error-input-border" : null
									}`}
									defaultValue="انتخاب بانک"
									onChange={(e) => {
										set_bank_name(e.target.value);
									}}
								>
									<option disabled>انتخاب بانک</option>
									<option value="بانک ملی">بانک ملی</option>
									<option value="بانک ملت">بانک ملت</option>
									<option value="بانک مسکن">بانک مسکن</option>
									<option value="بانک آینده">بانک آینده</option>
									<option value="بانک صادرات">بانک صادرات</option>
								</select>
								{bank_name_error ? (
									<span className="error-message">
										هیچ بانکی انتخاب نکرده اید
									</span>
								) : null}
								<br />
								<input
									type="submit"
									value="فعال سازی"
									className="credit-cards-submit-button"
									onClick={() => {
										form_checker();
									}}
								/>
							</div>
						) : (
							""
						)}
					</div>
				</div>
				<hr />
				<div className="credit-cards-table-container">
					{/* Table Starts */}
					<TableContainer
						component={Paper}
						style={{ backgroundColor: "transparent", border: "none" }}
						actions={[
							{
								icon: () => <button>export</button>,
								toolTip: "Export to Excel",
								onClick: () => alert("clicked"),
								isFreeAction: true,
							},
						]}
					>
						<Table className={classes.table} aria-label="simple table">
							<TableHead>
								<TableRow>
									<TableCell align="center">#</TableCell>
									<TableCell align="center">شماره کارت </TableCell>
									<TableCell align="center">شماره حساب </TableCell>
									<TableCell align="center">شبا</TableCell>
									<TableCell align="center">وضعیت</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{rows.map((row) => (
									<TableRow key={row.number}>
										<TableCell
											component="th"
											scope="row"
											align="center"
											width="80"
										>
											{row.number}
										</TableCell>
										<TableCell align="center">{row.card_number}</TableCell>
										<TableCell align="center">{row.account_number}</TableCell>
										<TableCell align="center">{row.shaba}</TableCell>
										<TableCell align="center">{row.state}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
					{/* Table Ends*/}
				</div>
			</div>
		</div>
	);
}
