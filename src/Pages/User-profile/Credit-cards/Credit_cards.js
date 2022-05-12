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
		<div
			className="credit-cards-container"
			dir="rtl"
			style={{ display: "flex", flexWrap: "wrap" }}
		>
			<div
				className="credit-cards-profile-card"
				style={{
					flex: "1",
					direction: "rtl",
					margin: "10px",
					border: "3px solid #fff",
					boxShadow: " 0 0 20px #555",
					borderRadius: "20px",
					color: "#626262",
					height: "400px",
				}}
			>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<img
						src="images/user-icon/user.png"
						style={{ width: "100px", padding: "5px" }}
					/>
					<span className="" style={{ padding: "5px" }}>
						امین علیزاده
					</span>
					<span className="" style={{ padding: "5px" }}>
						09050287419
					</span>
				</div>
				<div className="credit-cards-menu-container">
					<ul
						style={{
							listStyle: "none",
							padding: "20px",
							fontSize: "18px",
						}}
					>
						<Link
							to="/authentication"
							style={{ textDecoration: "none", color: "#626262" }}
						>
							<li className="credit-cards-list-item">اطلاعات و احراز هویت</li>
						</Link>
						<Link
							to="/credit-cards"
							style={{ textDecoration: "none", color: "#626262" }}
						>
							<li className="credit-cards-list-item active">کارت های بانکی</li>
						</Link>
						<Link
							to="/password"
							style={{ textDecoration: "none", color: "#626262" }}
						>
							<li className="credit-cards-list-item">کلمه عبور</li>
						</Link>
						<Link
							to="/two-factor-authentication"
							style={{ textDecoration: "none", color: "#626262" }}
						>
							<li className="credit-cards-list-item">ورود دو مرحله‌ای</li>
						</Link>
					</ul>
				</div>
			</div>
			{/* left side */}
			<div
				className="credit-cards-left-side"
				style={{
					flex: "3",
					direction: "rtl",
					margin: "10px",
					border: "3px solid #fff",
					boxShadow: " 0 0 20px #555",
					borderRadius: "20px",
					padding: "20px",
				}}
			>
				<p style={{ fontSize: "16px", color: "#626262" }}>
					جهت دریافت خدمات و سرویس های وب سایت به صورت آنی، می بایست شماره کارت
					بانکی که خرید را توسط آن انجام می دهید ثبت نمایید.
				</p>
				<div
					style={{ border: "1px solid #7367F0" }}
					className="add-credit-card-container"
				>
					<div className={`${checked ? "" : "unchecked"}`}>
						<Checkbox
							checked={checked}
							onChange={handleChange}
							inputProps={{ "aria-label": "primary checkbox" }}
						/>
						<span>افزودن کارت بانکی</span>
						{checked ? (
							<div className="credit-cards-first-row-input-container">
								<label>شماره کارت</label>
								<input
									className="credit-cards-input"
									type="number"
									placeholder="شماره کارت"
									style={{ textAlign: "center" }}
								/>
								<label>شماره حساب</label>
								<input
									className="credit-cards-input"
									type="number"
									placeholder="شماره حساب"
									style={{ textAlign: "center" }}
								/>
								<label>شماره شبا بدون IR</label>
								<input
									className="credit-cards-input"
									type="number"
									placeholder="شماره شبا بدون IR"
									style={{ textAlign: "center" }}
								/>
								<label>نام بانک</label>
								<select
									className="credit-cards-input"
									type="number"
									value="نام بانک"
									style={{ textAlign: "center" }}
								>
									<option value="" selected disabled>
										انتخاب بانک
									</option>
									<option>بانک ملی</option>
									<option>بانک ملت</option>
									<option>بانک مسکن</option>
									<option>بانک آینده</option>
									<option>بانک صادرات</option>
								</select>
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
				<div
					style={{ marginTop: "20px" }}
					className="credit-cards-table-container"
				>
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
