import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Avatar, Box, Typography, useMediaQuery} from "@material-ui/core";
import Typed from 'react-typed';

import avatar from "../assets/images/avatar.png";
import Particles from "react-particles-js";


const useStyles = makeStyles((theme) => ({

        particles: {
            position: "absolute",
            height: "90%",
            width: "100%"
        },

        homeContainer: {
            position: "absolute",
            top: "45%",
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
            fontWeight: 400,
            color: theme.palette.secondary.main,
            [theme.breakpoints.down('sm')]: {
                fontSize: "1.8rem"
            }
        },

        subTitle: {
            color: theme.palette.secondary.light,
            marginTop: theme.spacing(1),
            [theme.breakpoints.down('sm')]: {
                fontSize: "1.5rem"
            }
        },

        skillsTitle: {
            color: "#FB6D7D",
            marginTop: theme.spacing(2),
            [theme.breakpoints.down('sm')]: {
                fontSize: "1.2rem"
            }
        }

    }
));

const mobileParticlesParams = {
    "particles": {"number": {"value": 15}, "size": {"value": 5}},
    "interactivity": {"events": {"onhover": {"enable": true, "mode": "repulse"}}}
};

const particlesParams = {
    "particles": {"number": {"value": 30}, "size": {"value": 7}},
    "interactivity": {"events": {"onhover": {"enable": true, "mode": "repulse"}}}
};


const Home = () => {

    const classes = useStyles();

    return (
        <>
            <Particles
                params={useMediaQuery(theme => theme.breakpoints.up('sm')) ? particlesParams : mobileParticlesParams}
                className={classes.particles}
            />
            <Box component="div" className={classes.homeContainer}>
                <Avatar src={avatar} alt="ar414" className={classes.avatar}/>
                <Typography variant="h2" color={"secondary"} className={classes.title}>
                    <Typed
                        strings={['AR414']}
                        typeSpeed={100}
                        showCursor={true}
                    />
                </Typography>
                <Typography variant="h4" color={"secondary"} className={classes.subTitle}>
                    <Typed
                        strings={['Full-stack development @ Independent developer']}
                        typeSpeed={50}
                        showCursor={true}
                    />
                </Typography>

                <Typography variant="h5" className={classes.skillsTitle}>
                    <Typed
                        strings={[
                            'PHP, GO, Python, Nginx, Docker, Mysql, MongoDB, Redis',
                            'HTML5 + CSS3 + Javascript, React, React Native, Electron, NodeJs'
                        ]}
                        typeSpeed={60}
                        backSpeed={15}
                        loop={true}
                    />
                </Typography>
            </Box>
        </>

    );
};

export default Home;
