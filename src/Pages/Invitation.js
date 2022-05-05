import { Copyright } from "@material-ui/icons";
import { useState } from "react";
import "./invitation.css";
import {
	DataGrid,
	gridPageCountSelector,
	gridPageSelector,
	useGridApiContext,
	useGridSelector,
	Toolbar,
} from "@mui/x-data-grid";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";

// Table columns
const columns = [
	{ field: "number", headerName: "شماره", width: 100 },
	{
		field: "name",
		headerName: "نام و فامیل",
		width: 200,
		sortable: false,
	},
	{
		field: "membership",
		headerName: "عضویت",
		width: 200,
		sortable: false,
	},
	{
		field: "commission",
		headerName: "پورسانت شما",
		width: 200,
	},
	{
		field: "number-of-purchases",
		headerName: "تعداد خرید",
		width: 200,
	},
	{
		field: "datetime",
		headerName: "تاریخ ثبت",
		description: " تاریخ شمسی ثبت",
		width: 200,
	},
];

// Table rows
const rows = [
	{
		id: 1,
		number: "1",
		name: "علی",
		commission: 200000,
		datetime: "1400/1/20",
		membership: "طلایی",
		"number-of-purchases": 3,
	},
	{
		id: 2,
		number: "2",
		name: "رضا",
		commission: 300000,
		datetime: "1400/8/20",
		membership: "برنزی",
		"number-of-purchases": 4,
	},
	{
		id: 3,
		number: "3",
		name: "امیر",
		commission: 400000,
		datetime: "1400/6/20",
		membership: "طلایی",
		"number-of-purchases": 1,
	},
	{
		id: 4,
		number: "4",
		name: "امین",
		commission: 600000,
		datetime: "1399/7/17",
		membership: "طلایی",
		"number-of-purchases": 7,
	},
];

// Pagination
function CustomPagination() {
	const apiRef = useGridApiContext();
	const page = useGridSelector(apiRef, gridPageSelector);
	const pageCount = useGridSelector(apiRef, gridPageCountSelector);

	return (
		<Pagination
			color="primary"
			variant="outlined"
			shape="rounded"
			page={page + 1}
			count={pageCount}
			renderItem={(props2) => <PaginationItem {...props2} disableRipple />}
			onChange={(event, value) => apiRef.current.setPage(value - 1)}
			dir="rtl"
			style={{ textAlign: "right" }}
		/>
	);
}

export default function Invitation() {
	const [text, set_text] = useState("کلیک و کپی");
	const [text_2, set_text_2] = useState("کلیک و کپی");

	const copy = (e) => {
		set_text("کپی شد");
		return navigator.clipboard.writeText(53054);
	};
	const copy_2 = () => {
		set_text_2("کپی شد");
		return navigator.clipboard.writeText("https://panel.exonyx.ir/ref/53054");
	};
	return (
		<div
			className="invitation-container"
			style={{ backgroundColor: "#F8F8F8" }}
		>
			<div
				className="invitation-page-first-row"
				style={{
					display: "flex",
					justifyContent: "space-evenly",
					backgroundColor: "#fff",
					border: "3px solid #fff",
					borderRadius: "20px",
					margin: "20px",
					boxShadow: " 0 0 20px #555",
					flexWrap: "wrap",
				}}
			>
				<div className="invitation-col">
					<img src="https://img.icons8.com/doodle/96/000000/pie-chart--v1.png" />
					<div dir="rtl">
						<span className="invitation-span">0</span>
						<span>تومان</span>
					</div>
					<p>میانگین پورسانت هر سفارش</p>
				</div>
				<div className="invitation-col">
					<img src="https://img.icons8.com/doodle/96/000000/mine-cart.png" />
					<div dir="rtl">
						<span className="invitation-span">0</span>
						<span>تومان</span>
					</div>
					<p>مبلغ کل پروسانت</p>
				</div>
				<div className="invitation-col">
					<img src="https://img.icons8.com/doodle/96/000000/graph-report.png" />
					<span className="invitation-span">0</span>
					<p>تعداد کل سفارشات</p>
				</div>
				<div className="invitation-col">
					<img src="https://img.icons8.com/doodle/96/000000/group.png" />
					<span className="invitation-span">0</span>
					<p>تعداد کاربر معرفی شده</p>
				</div>
			</div>
			<div
				className="invitation-page-second-row"
				style={{
					border: "3px solid #fff",
					borderRadius: "20px",
					margin: "20px",
					boxShadow: " 0 0 20px #555",
				}}
			>
				<p
					style={{
						fontSize: "20px",
						color: "#636363",
						direction: "rtl",
						margin: "20px",
					}}
				>
					معرفی و درآمد از اکس اونیکس
				</p>
				<p
					dir="rtl"
					style={{ fontSize: "16px", color: "#636363", margin: "20px" }}
				>
					با معرفی اکس اونیکس به دوستان خود از هر بار خرید دوستانتان پورسانت
					دریافت کنید.
				</p>
				<div
					style={{
						display: "flex",
						justifyContent: "space-evenly",
						fontSize: "18px",
						color: "#7367F0",
						padding: "20px",
						margin: "10px",
						borderRadius: "10px",
						borderColor: "#7367F0",
						flexWrap: "wrap",
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
						<p className="smaller">کد معرفی برای ثبت نام از طریق اپلیکیشن:</p>
						<div
							className="invitation-link-and-number tooltip-x"
							style={{ cursor: "pointer" }}
							onClick={(e) => copy(e)}
						>
							<span className="tooltiptext-x">{text}</span>
							<img src="https://img.icons8.com/dusk/30/000000/copy.png" /> 53054
						</div>
					</div>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<p className="smaller">
							لینک عضویت از طریق سایت و بدون وارد کردن کد معرف:
						</p>
						<span
							className="invitation-link-and-number tooltip-x"
							style={{ cursor: "pointer" }}
							onClick={() => copy_2()}
						>
							<span className="tooltiptext-x">{text_2}</span>
							<img src="https://img.icons8.com/dusk/30/000000/copy.png" />{" "}
							https://panel.exonyx.ir/ref/53054
						</span>
					</div>
				</div>
				<p dir="rtl" style={{ margin: "20px" }}>
					تا این لحظه <span>{rows.length}</span> نفر معرفی کرده اید.{" "}
					<span style={{ color: "#1795A4", cursor: "pointer" }}>
						لیست دوستان معرفی شده
					</span>
				</p>

				<p
					dir="rtl"
					style={{ margin: "20px", fontSize: "20px", color: "#555" }}
				>
					جدول خرید های دوستان معرفی شده توسط شما
				</p>
				{/* Table */}
				<div style={{ direction: "rtl" }}>
					<DataGrid
						rows={rows}
						columns={columns}
						pageSize={10}
						autoHeight
						style={{ textAlign: "right" }}
						disableColumnMenu
						disableColumnSelector
						disableSelectionOnClick
						toolbar={["pdfExport"]}
						components={{
							Pagination: CustomPagination,
						}}
					/>
				</div>
			</div>
		</div>
	);
}
