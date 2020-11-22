import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import '../assets/js/timeline.min.css';

import SchoolIcon from "@material-ui/icons/School";
import BuildIcon from "@material-ui/icons/Build";
import StorageIcon from "@material-ui/icons/Storage";
import {Box, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    timelineContainer: {
      padding: "3.5rem 0.5rem"
    },
    timeline: {
        marginTop: "2rem"
    },
    title: {
        textAlign: "center",
        [theme.breakpoints.down('sm')]: {
            fontSize: "1.9rem"
        }
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
}));

const TimeLine = () => {

    const classes = useStyles();

    return (
        <Box className={classes.timelineContainer}>
            <Typography variant="h3" className={classes.title} color={"secondary"}>
                Working Experience
            </Typography>
            <Box className={classes.timeline}>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{background: '#141414', color: '#FF6E7F',boxShadow:'0 3px 0 #FF6E7F'}}
                        contentArrowStyle={{borderRight: '7px solid  #141414'}}
                        date="2012 - 2016"
                        iconStyle={{background: '#141414', color: '#FF6E7F'}}
                        icon={<SchoolIcon/>}
                    >
                        <h3 className="vertical-timeline-element-title">Shenzhen University</h3>
                        <h5 className="vertical-timeline-element-subtitle">Computer Science And Technology</h5>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{background: '#141414', color: '#FF6E7F',boxShadow:'0 3px 0 #FF6E7F'}}
                        contentArrowStyle={{borderRight: '7px solid  #141414'}}
                        date="2016 - 2018"
                        iconStyle={{background: '#141414', color: '#FF6E7F'}}
                        icon={<BuildIcon/>}
                    >
                        <h3 className="vertical-timeline-element-title">IEG @ Tencent</h3>
                        <h5 className="vertical-timeline-element-subtitle">BackEnd development @ xinyue</h5>
                        <p>
                            Mainly optimize the development process of Xinyue activities, improve the activity development
                            platform, and study how to optimize the work of developers
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{background: '#141414', color: '#FF6E7F',boxShadow:'0 3px 0 #FF6E7F'}}
                        contentArrowStyle={{borderRight: '7px solid  #141414'}}
                        date="2018 - 2020"
                        iconStyle={{background: '#141414', color: '#FF6E7F'}}
                        icon={<StorageIcon/>}
                    >
                        <h3 className="vertical-timeline-element-title">Esports Pro</h3>
                        <h5 className="vertical-timeline-element-subtitle">Full-stack Development</h5>
                        <p>
                            Mainly related to data acquisition, real-time output of live data, data gateway system
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{background: '#141414', color: '#FF6E7F',boxShadow:'0 3px 0 #FF6E7F'}}
                        contentArrowStyle={{borderRight: '7px solid  #141414'}}
                        date="2020 - Now"
                        iconStyle={{background: '#141414', color: '#FF6E7F'}}
                        icon={<StorageIcon/>}
                    >
                        <h3 className="vertical-timeline-element-title">AR414</h3>
                        <h5 className="vertical-timeline-element-subtitle">Full-stack Development @ Independent Developer</h5>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </Box>
        </Box>
    );
};

export default TimeLine;
