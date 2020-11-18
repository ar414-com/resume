import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Avatar, Box, Typography} from "@material-ui/core";
import Typed from 'react-typed';

import avatar from "../assets/images/avatar.jpg";


const useStyles = makeStyles((theme) => ({

        homeContainer: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: "100vw",
            textAlign: "center"
        },

        avatar: {
            display: "block",
            margin: "0.5rem auto",
            width: theme.spacing(20),
            height: theme.spacing(20),
        },

        title: {
            color: theme.palette.secondary.dark
        },

        subTitle: {
            color: theme.palette.secondary.light,
            marginTop: theme.spacing(2)
        }

    }
));

const Home = () => {

    const classes = useStyles();

    return (
        <Box component="div" className={classes.homeContainer}>
            <Avatar src={avatar} alt="ar414" className={classes.avatar}/>

            <Typography variant="h3" color={"secondary"}>
                <Typed
                    strings={['AR414']}
                    typeSpeed={150}
                />
            </Typography>

            <Typography variant="h4" color={"secondary"} className={classes.subTitle}>
                <Typed
                    strings={['Full-stack development', 'Independent developer']}
                    typeSpeed={60}
                    loop={true}
                />
            </Typography>
        </Box>
    );
};

export default Home;
