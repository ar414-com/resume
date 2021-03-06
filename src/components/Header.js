import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {
    AppBar,
    Avatar,
    Box,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import TimelineIcon from '@material-ui/icons/Timeline';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import PersonIcon from '@material-ui/icons/Person';
import LanguageIcon from '@material-ui/icons/Language';

import avatar from '../assets/images/avatar.png';
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuIcon: {
      marginLeft: theme.spacing(1)
    },
    title: {
        textTransform: "capitalize",
        marginLeft: theme.spacing(1),
        flexGrow: 1,
        [theme.breakpoints.down('sm')]: {
            fontSize: "1.6rem"
        }
    },
    menuSliderContainer: {
        width: 250,
        background: theme.palette.primary.dark,
        height: "100vh",
        paddingTop: theme.spacing(2)
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(12),
        height: theme.spacing(12),
    },
    menuDivider: {
        marginTop: theme.spacing(2),
        backgroundColor: theme.palette.secondary.main
    },
    listItem: {
        color: theme.palette.secondary.main,
        paddingLeft: theme.spacing(6),
        marginBottom: theme.spacing(2),
    }
}));

const menuList = [
    {
        listIcon: <HomeIcon color="secondary"/>,
        listText: "Home",
        link: '/',
    },
    {
        listIcon: <TimelineIcon color="secondary"/>,
        listText: "TimeLine",
        link: '/timeline',
    },
    {
        listIcon: <AttachFileIcon color="secondary"/>,
        listText: "Project",
        link: '/project',
    },
    {
        listIcon: <PersonIcon color="secondary"/>,
        listText: "Introduction",
        link: '/introduction',
    }
];

const Header = () => {

    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [urlPath,setUrlPath] = useState("Home");

    useEffect(() => {
        let pathname = window.location.pathname;
        pathname = pathname.replace("/","");
        pathname = !pathname ? "home" : pathname;
        setUrlPath(pathname);
    },[window.location.pathname])

    const classes = useStyles();

    const menuRender = () => (
        <Box component="div" className={classes.menuSliderContainer}>
            <Avatar alt="AR414" src={avatar} className={classes.avatar}/>
            <Divider variant="middle" className={classes.menuDivider} light={true}/>
            <List>
                {menuList.map((item,key) => (
                    <ListItem key={key} className={classes.listItem} button onClick={() => setIsOpenMenu(false)} component={Link} to={item.link}>
                        <ListItemIcon>{item.listIcon}</ListItemIcon>
                        <ListItemText primary={item.listText}/>
                    </ListItem>
                ))}
                <a href="https://www.ar414.com" target={"_blank"}>
                    <ListItem className={classes.listItem} button>
                        <ListItemIcon><LanguageIcon color="secondary"/></ListItemIcon>
                        <ListItemText primary={"blog"}/>
                    </ListItem>
                </a>

            </List>
        </Box>
    );

    const toggleDrawerMenu = () => {
        setIsOpenMenu(!isOpenMenu);
    };

    return (
        <>
            <Box component="nav">
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" color="secondary" aria-label="menu" onClick={() => toggleDrawerMenu()}>
                            <MenuIcon fontSize="large" className={classes.menuIcon} />
                        </IconButton>
                        <Typography variant="h4" className={classes.title} color="secondary">
                            {urlPath}
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <Drawer anchor="left" open={isOpenMenu} onClose={() => toggleDrawerMenu(false)}>
                {menuRender()}
            </Drawer>
        </>


    );
};

export default Header;
