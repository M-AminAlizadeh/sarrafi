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
import { Helmet } from "react-helmet";

const columns = [
	{ field: "number", headerName: "شماره", width: 110 },
	{
		field: "currency",
		headerName: "ارز",
		width: 150,
		sortable: false,
	},
	{
		field: "type",
		headerName: "نوع",
		width: 150,
	},
	{
		field: "amount",
		headerName: "مبلغ",
		width: 110,
	},
	{
		field: "balance",
		headerName: "موجودی",
		description: "موجودی شما ",
		width: 160,
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
		width: 300,
	},
];

const rows = [];
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

export default function Orders(props) {
	const orders = props.user_info.orders;
	orders.map((order, index) => {
		rows.push(order);
	});
	console.log(rows);
	return (
		<div className="crypto-transactions-container component_box_shadow">
			<Helmet>
				<title>{props.page_title}</title>
			</Helmet>
			<div style={{ width: "90%", margin: "auto" }} dir="rtl">
				{/* Title and description part */}
				<div className="crypto_transactions-info-container">
					<div className="crypto_transactions-title-container">
						<p> سفارشات</p>
					</div>
					<div className="crypto_transactions-description-container">
						<p>لیست سفارشاتی که ثبت کرده اید را مشاهده میکنید.</p>
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
	);
}
