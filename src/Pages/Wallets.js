import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import SearchBar from "material-ui-search-bar";
import "./wallets.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
});

const Wallets = (props) => {
	const classes = useStyles();

	const originalRows = props.data;

	const [rows, setRows] = useState(originalRows);
	const [searched, setSearched] = useState("");

	const requestSearch = (searchedVal) => {
		const filteredRows = originalRows.filter((row) => {
			return row.name.toLowerCase().includes(searchedVal.toLowerCase());
		});
		setRows(filteredRows);
	};

	const cancelSearch = () => {
		setSearched("");
		requestSearch(searched);
	};

	return (
		<div className="wallets-container">
			<Paper dir="rtl">
				<h3 className="wallets-header">لیست کیف پول های شما</h3>
				<SearchBar
					style={{
						width: "300px",
						direction: "rtl",
						borderRadius: "15px",
						marginRight: "100px",
						margin: "20px",
						border: "1px solid #555",
						fontFamily: "Vazirmatn",
					}}
					value={searched}
					placeholder="جستجو"
					onChange={(searchVal) => requestSearch(searchVal)}
					onCancelSearch={() => cancelSearch()}
				/>
				<TableContainer>
					<Table className={classes.table} aria-label="simple table" dir="rtl">
						<TableBody>
							<TableRow
								style={{
									width: "100%",
									border: "1px solid #7367F0",
									backgroundColor: "#E4E2F7",
								}}
							>
								<TableCell
									component="th"
									className=""
									scope="row"
									align="right"
								>
									<p style={{ fontSize: "20px" }}> تومان</p>
								</TableCell>
								<TableCell
									component="th"
									className=""
									scope="row"
									align="right"
								>
									<img
										className="wallets-crypto-image"
										src="images/crypto-logos/iran.png"
									></img>
								</TableCell>
								<TableCell
									component="th"
									className=""
									scope="row"
									align="right"
								>
									<div style={{ fontSize: "20px", color: "#7468F0" }}>
										موجودی : <span className="wallets-user-balance">0</span>{" "}
										تومان
									</div>
								</TableCell>
								<TableCell
									component="th"
									className=""
									scope="row"
									align="right"
								>
									<div>{""} </div>
								</TableCell>
								<TableCell
									align="right"
									className=""
									style={{
										textAlign: "left",
										width: "500px",
									}}
								>
									<Link to="/toman-deposit">
										<Button
											style={{
												backgroundColor: "#28C76F",
												border: "none",
												padding: "10px 50px",
												marginLeft: "10px",
											}}
											className="wallets-button"
											size="sm"
											active
										>
											واریز
										</Button>
									</Link>
									<Link to="/toman-withdrawal">
										<Button
											style={{
												backgroundColor: "#EA5455",
												border: "none",
												padding: "10px 50px",
												marginLeft: "10px",
											}}
											className="wallets-button"
											size="sm"
											active
										>
											برداشت
										</Button>
									</Link>
								</TableCell>
							</TableRow>
							{rows.map((row) => (
								<TableRow key={row.name}>
									<TableCell
										component="th"
										scope="row"
										align="right"
										style={{ width: "100px" }}
									>
										{row.persian_name} ({row.name})
									</TableCell>
									<TableCell align="right" style={{ width: "100px" }}>
										<img
											src={row.icon_source}
											className="wallets-crypto-image"
										/>
									</TableCell>
									<TableCell align="center">
										<p>قیمت جهانی :{row.world_price} دلار</p>
										<p>قیمت سایت ما :{row.website_price} تومان</p>
									</TableCell>
									<TableCell align="center">
										<p>موجودی : {row.balance}</p>
										<p>معادل : {row.in_tomans} تومان</p>
									</TableCell>
									<TableCell
										align="right"
										className=""
										style={{
											textAlign: "left",
											width: "500px",
										}}
									>
										<Link to={`deposit/${row.name}`}>
											<Button
												style={{
													backgroundColor: "#28C76F",
													border: "none",
													padding: "10px 50px",
													marginLeft: "10px",
												}}
												className="wallets-button"
												size="sm"
												active
											>
												واریز
											</Button>
										</Link>
										<Link to={`withdrawal/${row.name}`}>
											<Button
												style={{
													backgroundColor: "#EA5455",
													border: "none",
													padding: "10px 50px",
													marginLeft: "10px",
												}}
												className="wallets-button"
												size="sm"
												active
											>
												برداشت
											</Button>
										</Link>

										<Link to="/crypto-transactions">
											<Button
												style={{
													backgroundColor: "#7367F0",
													border: "none",
													padding: "10px 50px",
													marginLeft: "10px",
												}}
												className="wallets-button"
												size="sm"
												active
											>
												تاریخچه
											</Button>
										</Link>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</Paper>
		</div>
	);
};

export default Wallets;
