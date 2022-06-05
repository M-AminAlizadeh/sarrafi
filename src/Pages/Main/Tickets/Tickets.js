import { useState } from "react";
import {
	DataGrid,
	gridPageCountSelector,
	gridPageSelector,
	useGridApiContext,
	useGridSelector,
} from "@mui/x-data-grid";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import { Helmet } from "react-helmet";
import "./tickets.css";

export default function Tickets(props) {
	const orders_list = props.user_info.orders;
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
	// Table rows
	const rows = [];
	props.user_info.tickets.map((item) => {
		rows.push(item);
	});
	// Table columns
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
			field: "details",
			headerName: "جزییات",
			description: "نمایش جزییات",
			sortable: false,
			width: 160,
		},
	];
	// Pagination function
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
	// tickets class
	class Tickets {
		constructor(form_title, form_unit, form_order, form_explain, form_file) {
			this.form_title = form_title;
			this.form_order = form_order;
			this.form_unit = form_unit;
			this.form_explain = form_explain;
			this.form_file = form_file;
		}
	}
	const tickets_form_data = () => {
		const form_data = new Tickets(
			form_title,
			form_unit,
			form_order,
			form_explain,
			form_file
		);
		console.log(form_data);
	};
	// States
	const [toggle_new_ticket, setToggle_new_ticket] = useState(false);
	const [form_title, set_form_title] = useState("");
	const [form_unit, set_form_unit] = useState("");
	const [form_order, set_form_order] = useState("");
	const [form_explain, set_form_explain] = useState("");
	const [form_file, set_form_file] = useState("");
	const [check_title, setCheckTitle] = useState(true);
	const [check_unit, setCheckUnit] = useState(true);
	const [check_explain, setCheckExplain] = useState(true);
	const [success_message, set_success_message] = useState(false);
	// States functions
	// This function checks the form
	const form_checker = (e) => {
		e.preventDefault();
		// Form Title
		form_title !== "" ? setCheckTitle(true) : setCheckTitle(false);
		// Form Unit
		form_unit !== "" ? setCheckUnit(true) : setCheckUnit(false);
		// Form Explain
		form_explain !== "" ? setCheckExplain(true) : setCheckExplain(false);
		// Check all elements in form and success pop-up
		if (form_title !== "" && form_unit !== "" && form_explain !== "") {
			set_success_message(true);
			tickets_form_data();
		}
	};
	return (
		// Tickets container
		<div className="tickets-container">
			<Helmet>
				<title>{props.page_title}</title>
			</Helmet>
			<div class="tickets-components-container">
				{/* New Ticket section */}
				<div className="tickets-new-ticket-container component_box_shadow">
					{/* New Ticket toggle title container*/}
					<div
						className="tickets-new-ticket-toggle-title"
						onClick={(e) => {
							setToggle_new_ticket(!toggle_new_ticket);
						}}
					>
						<div className="new-ticket-image">
							<img src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/000000/external-plus-user-interface-tanah-basah-glyph-tanah-basah-2.png" />
						</div>
						<div className="new-ticket-toggle-title-text-container">
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
										className={`form-title ${
											check_title ? "" : "error-input-border"
										}`}
										type="text"
										name="form-title"
										value={form_title}
										title="عنوان مورد نظرتان را وارد کنید"
									/>
									{check_title ? (
										""
									) : (
										<span className="error-message">عنوان خالیست پر کنید</span>
									)}
								</div>
								{/* Form unit part */}
								<div className="new-ticket-form-unit">
									<label htmlFor="form-unit">واحد</label>
									<select
										name="form-unit"
										className={`form-unit ${
											check_unit ? "" : "error-input-border"
										}`}
										onChange={(e) => {
											set_form_unit(e.target.value);
										}}
										required
									>
										<option
											value
											disabled
											selected
											className="form-unit-header"
										>
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
										<span className="error-message">
											لطفا واحد مورد نظر خود را انتخاب کنید{" "}
										</span>
									)}
								</div>
							</div>
							{/* Form order part */}
							<div className="new-ticket-form-order">
								<label htmlFor="form-order">در خصوص سفارش</label>
								<select
									name="form-order"
									className="form-order"
									onChange={(e) => {
										set_form_order(e.target.value);
									}}
								>
									<option value="هیچکدام" selected>
										هیچکدام
									</option>
									{orders_list.map((item) => {
										return <option value={item.title}>{item.title}</option>;
									})}
								</select>
							</div>
							{/* Form explain part */}
							<div className="new-ticket-form-explain">
								<label htmlFor="form-explain">توضیحات</label>
								<textarea
									name="form-explain"
									cols="60"
									rows="10"
									value={form_explain}
									onChange={(e) => {
										set_form_explain(e.target.value);
									}}
									className={`form-explain ${
										check_explain ? "" : "error-input-border"
									}`}
								></textarea>
								{check_explain ? (
									""
								) : (
									<span className="error-message">
										لطفا واحد مورد نظر خود را انتخاب کنید{" "}
									</span>
								)}
							</div>
							{/* ّForm upload file part */}
							<div className="new-ticket-form-upload-file">
								<label htmlFor="">فایل پیوست</label>
								<label htmlFor="form-upload" className="form-upload">
									<span>انتخاب فایل</span>
									<img src="https://img.icons8.com/metro/20/000000/upload.png" />
								</label>
								<input
									type="file"
									name="form-upload"
									className="form-upload"
									id="form-upload"
									accept="image/*"
									onChange={(e) => {
										set_form_file(e.target.value);
									}}
								/>
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
									className="form-submit"
									value=""
									onClick={(e) => {
										form_checker(e);
									}}
								>
									ارسال درخواست
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
						</div>
					) : (
						""
					)}
				</div>
				{/* Tickets log section(Table) */}
				<div className="tickets-log-container component_box_shadow">
					<div className="tickets-log-title-text-container">
						<sapn className="tickets-log-title">پشتیبانی</sapn>
						<span className="tickets-log-description">
							لیست تیکت های ارسال شده را مشاهده میکنید
						</span>
					</div>
					<div className="ticket-log-table">
						<div>
							{/* Title and description part */}
							<div className="crypto_transactions-info-container">
								{/* <div className="crypto_transactions-title-container">
									<p>لیست تراکنش های رمزارز</p>
								</div> */}
								<div className="crypto_transactions-description-container"></div>
							</div>
							{/* log Table */}
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
		</div>
	);
}
