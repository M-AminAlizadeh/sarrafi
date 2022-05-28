import { useState } from "react";
import "./notification.css";
import { Link } from "react-router-dom";

export default function Notification(props) {
	const noti = props.notifications;
	return (
		<div className="notification-container component_box_shadow">
			{/* Numbers of notifications */}
			<div className="notification-numbers-container">
				<span>تعداد اعلانات:</span>
				<span>{noti.length}</span>
			</div>
			{/* show each message */}
			{noti.length == 0 ? (
				<div className="notification-empty-text-container">
					اعلانی موجود نیست
				</div>
			) : (
				noti.map((item) => {
					return (
						<div>
							<div className="notification-row">
								<p>{item.title}</p>
								<p>{`${item.body.slice(0, 49)} ...`}</p>
							</div>
						</div>
					);
				})
			)}
		</div>
	);
}
