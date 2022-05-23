import "./credit-cards.css";
import React from "react";
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

// Table Data **********************************************
const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
});

function createData(number, card_number, account_number, shaba, state) {
	return { number, card_number, account_number, shaba, state };
}

const rows = [
	createData(
		1,
		6274881116801407,
		"0200858411607627488",
		"IR62 0530 0000 0020 0858 4116 07",
		"ثبت شده"
	),
	createData(
		2,
		6274881116801407,
		"0200858411607627488",
		"IR62 0530 0000 0020 0858 4116 07",
		"ثبت شده"
	),
];
// Table Data **********************************************

export default function Credit_cards() {
	const [checked, setChecked] = React.useState(false);
	const handleChange = (event) => {
		setChecked(event.target.checked);
	};

	// Table style ###############
	const classes = useStyles();
	// Table style ###############
	return (
		// Page Container
		<div className="credit-cards-container">
			{/* Right Side */}
			<div className="credit-cards-profile-card">
				<div className="credit-cards-profile-card-inside-div">
					<img
						className="credit-cards-user-icon"
						src="images/user-icon/user.png"
					/>
					<span className="credit-cards-user-name">امین علیزاده</span>
					<span className="credit-cards-user-phone-number">09050287419</span>
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
								<label>شماره کارت</label>
								<input
									className="credit-cards-input"
									type="number"
									placeholder="شماره کارت"
								/>
								<label>شماره حساب</label>
								<input
									className="credit-cards-input"
									type="number"
									placeholder="شماره حساب"
								/>
								<br />
								<label>شماره شبا </label>
								<input
									className="credit-cards-input"
									type="number"
									placeholder="شماره شبا بدون IR"
								/>
								<label>نام بانک</label>
								<select
									className="credit-cards-input credit-cards-select-box"
									type="number"
									value="نام بانک"
								>
									<option selected disabled>
										انتخاب بانک
									</option>
									<option>بانک ملی</option>
									<option>بانک ملت</option>
									<option>بانک مسکن</option>
									<option>بانک آینده</option>
									<option>بانک صادرات</option>
								</select>
								<br />
								<input
									type="submit"
									value="فعال سازی"
									className="credit-cards-submit-button"
								/>
							</div>
						) : (
							""
						)}
					</div>
				</div>
				<hr />
				<div className="credit-cards-table-container">
					{/* Table Starts &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& */}
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
					{/* Table Ends &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& */}
				</div>
			</div>
		</div>
	);
}
