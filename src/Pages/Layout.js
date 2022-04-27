// All The Imports
import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import NotificationsActiveOutlinedIcon from "@material-ui/icons/NotificationsActiveOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import AccountBalanceWalletOutlinedIcon from "@material-ui/icons/AccountBalanceWalletOutlined";
import AccountBalanceOutlinedIcon from "@material-ui/icons/AccountBalanceOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import TrendingDownIcon from "@material-ui/icons/TrendingDown";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import DnsOutlinedIcon from "@material-ui/icons/DnsOutlined";
import ListRoundedIcon from "@material-ui/icons/ListRounded";
import ChangeHistoryRoundedIcon from "@material-ui/icons/ChangeHistoryRounded";
import FlashOnRoundedIcon from "@material-ui/icons/FlashOnRounded";
import CreditCardRoundedIcon from "@material-ui/icons/CreditCardRounded";
import PersonOutlineRoundedIcon from "@material-ui/icons/PersonOutlineRounded";
import PowerSettingsNewRoundedIcon from "@material-ui/icons/PowerSettingsNewRounded";
import ClearRoundedIcon from "@material-ui/icons/ClearRounded";
import "./layout.css";
// Expand Functionality Imports
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import AdjustIcon from "@material-ui/icons/Adjust";

const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	appBar: {
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginRight: drawerWidth,
	},
	title: {
		flexGrow: 1,
	},
	hide: {
		display: "none",
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	drawerHeader: {
		display: "flex",
		alignItems: "center",
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: "flex-start",
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginRight: -drawerWidth,
	},
	contentShift: {
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginRight: 0,
	},
}));

export default function Layout() {
	const classes = useStyles();
	const theme = useTheme();
	// Expand Functionality Functions Defined For Drawer And Dropdowns
	// First Dropdown****************************************************************
	const [open, setOpen] = React.useState(false);
	const [expand, setExpand] = React.useState(false);
	// Second Dropdown****************************************************************
	const [expand_2, setExpand_2] = React.useState(false);
	const handleClick_2 = () => {
		setExpand_2(!expand_2);
	};
	// ****************************************************************
	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const handleClick = () => {
		setExpand(!expand);
	};
	// Main Component
	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar
				style={{ backgroundColor: "#fff", color: "#797979" }}
				position="fixed"
				className={clsx(classes.appBar, {
					[classes.appBarShift]: open,
				})}
			>
				<Toolbar>
					<Typography
						variant="h5"
						noWrap
						className={classes.title}
						style={{
							display: "flex",
							justifyContent: "flex-start",
							alignItems: "center",
							fontSize: "14px",
							cursor: "pointer",
						}}
					>
						{/* User Avatar */}
						<Avatar className={classes.orange}>ام</Avatar>
						<div
							className="topbar-user-info"
							style={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
								marginLeft: "10px",
								marginRight: "10px",
							}}
						>
							<span className="topbar-user-name">امین علیزاده</span>
							<span className="topbar-user-phone-number">09050287419</span>
						</div>
						<div className="topbar-icons">
							<NotificationsActiveOutlinedIcon />
						</div>
					</Typography>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="end"
						onClick={handleDrawerOpen}
						className={clsx(open && classes.hide)}
					>
						<MenuIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
			<main
				className={clsx(classes.content, {
					[classes.contentShift]: open,
				})}
			>
				<div className={classes.drawerHeader} />
			</main>
			{/* Drawer Or Sidebar */}
			<Drawer
				className={classes.drawer}
				variant="persistent"
				anchor="right"
				open={open}
				classes={{
					paper: classes.drawerPaper,
				}}
			>
				{/* Website Name and Logo and times icon */}
				<div
					className="sidebar-info"
					style={{
						display: "flex",
						justifyContent: "space-around",
						alignItems: "center",
					}}
				>
					<div className={classes.drawerHeader}>
						<IconButton onClick={handleDrawerClose}>
							<ClearRoundedIcon />
						</IconButton>
					</div>
					<div className="website-name-container">
						<h1
							style={{
								fontSize: "14px",
							}}
						>
							Website Name
						</h1>
					</div>
					<div className="website-logo-container">
						<img
							src="/images/website-logo/website-logo.jpg"
							alt="website logo"
							style={{
								width: "80%",
								borderRadius: "50%",
							}}
						/>
					</div>
				</div>
				<Divider />
				{/* List Starts Here */}
				<List dir="rtl">
					<ListItem style={{ textAlign: "right" }} className="hover-effect">
						<ListItemIcon>
							<HomeOutlinedIcon />
						</ListItemIcon>
						<ListItemText>
							<Link to="/" className="layout-links">
								داشبورد
							</Link>
						</ListItemText>
					</ListItem>
					<ListItem style={{ textAlign: "right" }} className="hover-effect">
						<ListItemIcon>
							<AccountBalanceWalletOutlinedIcon />
						</ListItemIcon>
						<ListItemText>
							<Link to="/wallets" className="layout-links">
								کیف پول ها
							</Link>
						</ListItemText>
					</ListItem>
					{/* First Dropdown */}
					<ListItem
						style={{ textAlign: "right" }}
						className="hover-effect"
						onClick={handleClick}
					>
						<ListItemIcon>
							<AccountBalanceOutlinedIcon />
						</ListItemIcon>
						<Link to="#" className="layout-links">
							تراکنش های کیف پول
						</Link>
						{expand ? (
							<ExpandLess className="expand-icon" />
						) : (
							<ExpandMore className="expand-icon" />
						)}
					</ListItem>
					<Collapse
						in={expand}
						timeout="auto"
						unmountOnExit
						style={{ paddingRight: "15px" }}
					>
						<List component="div" disablePadding>
							<ListItem style={{ textAlign: "right" }} className="hover-effect">
								<ListItemIcon>
									<AdjustIcon />
								</ListItemIcon>
								<Link to="/crypto-transactions" className="layout-links">
									تراکنش های رمز ارز
								</Link>
							</ListItem>
							<ListItem style={{ textAlign: "right" }} className="hover-effect">
								<ListItemIcon>
									<AdjustIcon />
								</ListItemIcon>
								<Link to="/rial-transactions" className="layout-links">
									تراکنش های ریالی
								</Link>
							</ListItem>
						</List>
					</Collapse>
					<ListItem style={{ textAlign: "right" }} className="hover-effect">
						<ListItemIcon>
							<ChatBubbleOutlineOutlinedIcon />
						</ListItemIcon>
						<Link to="/tickets" className="layout-links">
							پشتیبانی
						</Link>
					</ListItem>
				</List>
				<Divider />
				<p
					dir="rtl"
					style={{ paddingRight: "20px", paddingTop: "10px", color: "#A6A6A6" }}
				>
					خرید/فروش
				</p>
				<List dir="rtl">
					<ListItem style={{ textAlign: "right" }} className="hover-effect">
						<ListItemIcon>
							<TrendingDownIcon />
						</ListItemIcon>
						<Link to="/buy" className="layout-links">
							خرید ارز
						</Link>
					</ListItem>
					<ListItem style={{ textAlign: "right" }} className="hover-effect">
						<ListItemIcon>
							<TrendingUpIcon />
						</ListItemIcon>
						<Link to="/sell" className="layout-links">
							فروش ارز
						</Link>
					</ListItem>
					<ListItem style={{ textAlign: "right" }} className="hover-effect">
						<ListItemIcon>
							<DnsOutlinedIcon />
						</ListItemIcon>
						<Link to="/orders" className="layout-links">
							سفارشات
						</Link>
					</ListItem>
				</List>
				<Divider />
				<p
					dir="rtl"
					style={{ paddingRight: "20px", paddingTop: "10px", color: "#A6A6A6" }}
				>
					ترید یا معامله
				</p>
				<List dir="rtl">
					<ListItem style={{ textAlign: "right" }} className="hover-effect">
						<ListItemIcon>
							<ChangeHistoryRoundedIcon />
						</ListItemIcon>
						<Link to="/open-transactions" className="layout-links">
							معاملات باز
						</Link>
					</ListItem>
					<ListItem style={{ textAlign: "right" }} className="hover-effect">
						<ListItemIcon>
							<ListRoundedIcon />
						</ListItemIcon>
						<Link to="trade-logs" className="layout-links">
							تاریخچه معاملات
						</Link>
					</ListItem>
				</List>
				<Divider />
				<p
					dir="rtl"
					style={{ paddingRight: "20px", paddingTop: "10px", color: "#A6A6A6" }}
				>
					حساب کاربری
				</p>
				<List dir="rtl">
					<ListItem style={{ textAlign: "right" }} className="hover-effect">
						<ListItemIcon>
							<CreditCardRoundedIcon />
						</ListItemIcon>
						<Link to="credit-cards" className="layout-links">
							کارت های بانکی
						</Link>
					</ListItem>
					<ListItem style={{ textAlign: "right" }} className="hover-effect">
						<ListItemIcon>
							<FlashOnRoundedIcon />
						</ListItemIcon>
						<Link to="invitation" className="layout-links">
							کسب درآمد
						</Link>
					</ListItem>
					{/* Second Dropdown */}
					<ListItem
						style={{ textAlign: "right" }}
						className="hover-effect"
						onClick={handleClick_2}
					>
						<ListItemIcon>
							<PersonOutlineRoundedIcon />
						</ListItemIcon>
						<Link to="#" className="layout-links">
							حساب کاربری
						</Link>
						{expand_2 ? (
							<ExpandLess className="expand-icon" />
						) : (
							<ExpandMore className="expand-icon" />
						)}
					</ListItem>
					<Collapse
						in={expand_2}
						timeout="auto"
						unmountOnExit
						style={{ paddingRight: "15px" }}
					>
						<List component="div" disablePadding>
							<ListItem style={{ textAlign: "right" }} className="hover-effect">
								<ListItemIcon>
									<AdjustIcon />
								</ListItemIcon>
								<Link to="authentication" className="layout-links">
									سطح‌کاربری ‌و ‌احراز‌هویت
								</Link>
							</ListItem>
							<ListItem style={{ textAlign: "right" }} className="hover-effect">
								<ListItemIcon>
									<AdjustIcon />
								</ListItemIcon>
								<Link to="password" className="layout-links">
									تغییر رمز عبور
								</Link>
							</ListItem>
						</List>
					</Collapse>
					<ListItem style={{ textAlign: "right" }} className="hover-effect">
						<ListItemIcon>
							<PowerSettingsNewRoundedIcon />
						</ListItemIcon>
						<Link to="#" className="layout-links">
							خروج
						</Link>
					</ListItem>
				</List>
			</Drawer>
		</div>
	);
}
