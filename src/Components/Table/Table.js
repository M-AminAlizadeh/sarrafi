import { useState } from "react";
import "./table.css";
export default function Table(props) {
	const currencies_info = props.currencies_api;
	return (
		<div className="table-container component_box_shadow">
			<table>
				{/* Table header */}
				<tr className="table-header">
					<th>ارز</th>
					<th>نام ارز</th>
					<th>قیمت خرید از ما </th>
					<th>قیمت فروش به ما </th>
					<th>موجودی</th>
				</tr>
				{/* Each currency row */}
				{currencies_info.map((item) => {
					return (
						<>
							<tr className="table-each-currency-row">
								<td>
									<img
										src={item.icon_source}
										alt={item.name}
										width="30px"
										height="40px"
									/>
								</td>
								<td>{item.persian_name}</td>
								<td>{item.world_price}</td>
								<td>{item.website_price}</td>
								<td>{item.our_inventory}</td>
							</tr>
						</>
					);
				})}
			</table>
		</div>
	);
}
