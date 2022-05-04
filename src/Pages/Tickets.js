import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
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
import "./tickets.css";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 500,
	dir: "rtl",
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

const rows = [
	{
		id: 1,
		number: "1",
		title: " عدم انتقال وجه",
		unit: "پیگیری سفارش",
		situation: "در حال بررسی",
		datetime: "1400/2/30",
		details: "yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
	},
];
const columns = [
	{ field: "number", headerName: "شماره", width: 110 },
	{
		field: "title",
		headerName: "موضوع",
		width: 150,
		sortable: false,
	},
	{
		field: "unit",
		headerName: "واحد پشتیبانی",
		width: 150,
	},
	{
		field: "situation",
		headerName: "وضعیت",
		width: 110,
	},

	{
		field: "datetime",
		headerName: "تاریخ ثبت",
		description: " تاریخ شمسی ثبت",
		width: 200,
	},
	{
		field: "situation",
		headerName: "وضعیت",
		description: "وضعیت هر رمز ارز",
		width: 160,
	},
	{
		field: "details",
		headerName: "جزییات",
		description: "نمایش جزییات",
		sortable: false,
		width: 160,
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
export default function Tickets() {
	// States
	const [toggle_new_ticket, setToggle_new_ticket] = useState(false);
	const [form_title, set_form_title] = useState("");
	const [form_unit, set_form_unit] = useState("");
	const [form_explain, set_form_explain] = useState("");
	const [check_title, setCheckTitle] = useState(true);
	const [check_unit, setCheckUnit] = useState(true);
	const [check_explain, setCheckExplain] = useState(true);
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	// States functions
	const form_checker = () => {
		// Form Title
		if (form_title !== "") {
			setCheckTitle(true);
		} else {
			setCheckTitle(false);
		}
		// Form Unit
		if (form_unit !== "") {
			setCheckUnit(true);
		} else {
			setCheckUnit(false);
		}
		// Form Explain
		if (form_explain !== "") {
			setCheckExplain(true);
		} else {
			setCheckExplain(false);
		}
		// Check all elements in form and success pop-up
		if (form_title !== "" && form_unit !== "" && form_explain !== "") {
			handleOpen();
		}
	};
	return (
		<div className="tickets-container">
			{/* New Ticket section */}
			<div className="tickets-new-ticket-container">
				{/* New Ticket Title */}
				<div
					className="tickets-new-ticket-title"
					onClick={(e) => {
						setToggle_new_ticket(!toggle_new_ticket);
					}}
				>
					<div className="new-ticket-image">
						<img src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/000000/external-plus-user-interface-tanah-basah-glyph-tanah-basah-2.png" />
					</div>
					<div className="new-ticket-title">
						<sapn> ثبت درخواست جدید</sapn>
					</div>
				</div>
				{/* New Ticket Form */}
				{toggle_new_ticket ? (
					<div className="tickets-new-ticket-form-container">
						{/* Form top container */}
						<div className="tickets-new-ticket-form-top-container">
							{/* Form title part */}
							<div className="new-ticket-form-title">
								<label htmlFor="form-title">عنوان</label>
								<input
									onChange={(e) => {
										set_form_title(e.target.value);
									}}
									className={check_title ? "form-default-border" : "form-alarm"}
									type="text"
									name="form-title"
									id="form-title"
									required
									value={form_title}
									title="عنوان مورد نظرتان را وارد کنید"
								/>
								{check_title ? "" : <span>عنوان خالیست پر کنید</span>}
							</div>
							{/* Form unit part */}
							<div className="new-ticket-form-unit">
								<label htmlFor="form-unit">واحد</label>
								<select
									name="form-unit"
									id="form-unit"
									className={check_unit ? "form-default-border" : "form-alarm"}
									onChange={(e) => {
										set_form_unit(e.target.value);
									}}
									required
								>
									<option value disabled selected className="form-unit-header">
										واحد مورد نظر را انتخاب کنید
									</option>
									<option value="پیگیری سفارش">پیگیری سفارش</option>
									<option value="احراز هویت"> احراز هویت</option>
									<option value="مالی">مالی </option>
									<option value="سایر">سایر </option>
								</select>
								{check_unit ? (
									""
								) : (
									<span>لطفا واحد مورد نظر خود را انتخاب کنید </span>
								)}
							</div>
						</div>
						{/* Form order part */}
						<div className="new-ticket-form-order">
							<label htmlFor="form-order">در خصوص سفارش</label>
							<select name="form-order" id="form-order">
								<option value="">هیچکدام</option>
							</select>
						</div>
						{/* Form explain part */}
						<div className="new-ticket-form-explain">
							<label htmlFor="form-explain">توضیحات</label>
							<textarea
								name="form-explain"
								id="form-explain"
								cols="60"
								rows="10"
								value={form_explain}
								onChange={(e) => {
									set_form_explain(e.target.value);
								}}
								className={check_explain ? "form-default-border" : "form-alarm"}
							></textarea>
							{check_explain ? (
								""
							) : (
								<span>لطفا واحد مورد نظر خود را انتخاب کنید </span>
							)}
						</div>
						{/* ّForm upload file part */}
						<div className="new-ticket-form-upload-file">
							<label htmlFor="">فایل پیوست</label>
							<label htmlFor="form-upload" className="form-upload">
								<span>انتخاب فایل</span>
								<img src="https://img.icons8.com/metro/20/000000/upload.png" />
							</label>
							<input type="file" name="form-upload" id="form-upload" />
							<span className="form-upload-explain">
								پسوندهای مجاز: jpg, jpeg, png, pdf, doc, docx, zip, rar حداکثر
								حجم فایل 5 مگابایت
							</span>
						</div>
						{/* Form submit btn */}
						<div className="new-ticket-form-submit">
							<button
								type="submit"
								name="form-submit"
								id="form-submit"
								value=""
								onClick={() => {
									form_checker();
								}}
							>
								ارسال درخواست
							</button>
						</div>
					</div>
				) : (
					""
				)}
				{/* Pop up modal */}
				<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
				>
					<Box sx={style}>
						<Typography id="modal-modal-title" variant="h6" component="h2">
							درخواست شما با موفقیت ارسال شد
						</Typography>
						<Typography id="modal-modal-description" sx={{ mt: 2 }}>
							کارشناسان ما در اسرع وقت به شما پاسخ میدهند
						</Typography>
					</Box>
				</Modal>
			</div>
			{/* Tickets log section */}
			<div className="tickets-log-container">
				<div className="ticket-log-title">
					<h3>پشتیبانی</h3>
					<p>لیست تیکت های ارسال شده را مشاهده میکنید</p>
				</div>
				<div className="ticket-log-table">
					<div style={{ width: "90%", margin: "auto" }} dir="rtl">
						{/* Title and description part */}
						<div className="crypto_transactions-info-container">
							<div className="crypto_transactions-title-container">
								<p>لیست تراکنش های رمزارز</p>
							</div>
							<div className="crypto_transactions-description-container">
								<p>با کلیک روی عناوین جدول تراکنش مورد نظر خود را پیدا کنید</p>
							</div>
						</div>

						{/* Table */}
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
		</div>
	);
}
