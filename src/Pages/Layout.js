import React from "react";
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
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
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

const drawerWidth = 240;

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
	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

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
						<Avatar className={classes.orange}>ا</Avatar>
						<div
							className="topbar-user-info"
							style={{
								border: "1px solid red",
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
								marginLeft: "5px",
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
			<Drawer
				className={classes.drawer}
				variant="persistent"
				anchor="right"
				open={open}
				classes={{
					paper: classes.drawerPaper,
				}}
			>
				{/* Website Name and Logo */}
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
				<List dir="rtl">
					<ListItem style={{ textAlign: "right" }}>
						<ListItemIcon>
							<HomeOutlinedIcon />
						</ListItemIcon>
						<ListItemText style={{}}>داشبورد</ListItemText>
					</ListItem>
					<ListItem style={{ textAlign: "right" }}>
						<ListItemIcon>
							<AccountBalanceWalletOutlinedIcon />
						</ListItemIcon>
						<ListItemText> کیف پول ها</ListItemText>
					</ListItem>
					<ListItem style={{ textAlign: "right" }}>
						<ListItemIcon>
							<AccountBalanceOutlinedIcon />
						</ListItemIcon>
						<ListItemText> تراکنش های کیف پول</ListItemText>
					</ListItem>
					<ListItem style={{ textAlign: "right" }}>
						<ListItemIcon>
							<ChatBubbleOutlineOutlinedIcon />
						</ListItemIcon>
						<ListItemText> پشتیبانی</ListItemText>
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
					<ListItem style={{ textAlign: "right" }}>
						<ListItemIcon>
							<TrendingDownIcon />
						</ListItemIcon>
						<ListItemText> خرید ارز</ListItemText>
					</ListItem>
					<ListItem style={{ textAlign: "right" }}>
						<ListItemIcon>
							<TrendingUpIcon />
						</ListItemIcon>
						<ListItemText> فروش ارز</ListItemText>
					</ListItem>
					<ListItem style={{ textAlign: "right" }}>
						<ListItemIcon>
							<DnsOutlinedIcon />
						</ListItemIcon>
						<ListItemText> سفارشات </ListItemText>
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
					<ListItem style={{ textAlign: "right" }}>
						<ListItemIcon>
							<ChangeHistoryRoundedIcon />
						</ListItemIcon>
						<ListItemText>معاملات باز </ListItemText>
					</ListItem>
					<ListItem style={{ textAlign: "right" }}>
						<ListItemIcon>
							<ListRoundedIcon />
						</ListItemIcon>
						<ListItemText>تاریخچه معاملات</ListItemText>
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
					<ListItem style={{ textAlign: "right" }}>
						<ListItemIcon>
							<CreditCardRoundedIcon />
						</ListItemIcon>
						<ListItemText> کارت های بانکی </ListItemText>
					</ListItem>
					<ListItem style={{ textAlign: "right" }}>
						<ListItemIcon>
							<FlashOnRoundedIcon />
						</ListItemIcon>
						<ListItemText>کسب درآمد </ListItemText>
					</ListItem>
					<ListItem style={{ textAlign: "right" }}>
						<ListItemIcon>
							<PersonOutlineRoundedIcon />
						</ListItemIcon>
						<ListItemText>حساب کاربری</ListItemText>
					</ListItem>
					<ListItem style={{ textAlign: "right" }}>
						<ListItemIcon>
							<PowerSettingsNewRoundedIcon />
						</ListItemIcon>
						<ListItemText>خروج</ListItemText>
					</ListItem>
				</List>
			</Drawer>
		</div>
	);
}
