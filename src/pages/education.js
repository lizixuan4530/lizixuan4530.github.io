import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Slide from 'react-reveal/Slide';

const timelineStyles = makeStyles((theme) => ({
  paper: {
    padding: '10px 30px',
    backgroundColor: '#F6EBCD',
  },
  spot:{
      color: '#F1BD4D',
      backgroundColor: '#F1BD4D',
  },
  tail: {
    backgroundColor: '#F1BD4D',
  },
}));

export default function education() {
  const classes = timelineStyles();

  return (
    <Timeline align="alternate">
      <TimelineItem>
        <TimelineSeparator >
          <TimelineDot className={classes.spot}>
          </TimelineDot>
          <TimelineConnector className={classes.tail}/>
        </TimelineSeparator>
        <TimelineContent>
          <Typography>
            <Box fontFamily='"Segoe UI"' style={{color:"#793D3D"}} fontWeight="fontWeightBold" fontSize={20}>
            2020
            </Box>
          </Typography>
          <Slide right>
          <Paper elevation={3} className={classes.paper}>
          <Typography>
            <Box textAlign="left" fontFamily='"Segoe UI"' style={{color:"#793D3D"}} fontWeight="fontWeightBold" fontSize={18}>
            Master - EFREI Paris - Villejuif, France 
            </Box>
            <Box textAlign="left" fontFamily='"Segoe UI"' style={{color:"#793D3D"}} >Efrei Engineering School of information and digital technology</Box>
            <Box textAlign="left" fontFamily='"Segoe UI"' fontStyle="italic" style={{color:"#793D3D"}} >Major: Digital transformation and cloud services</Box>
            </Typography>
          </Paper>
          </Slide>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator >
          <TimelineDot className={classes.spot}>
          </TimelineDot>
          <TimelineConnector className={classes.tail}/>
        </TimelineSeparator>
        <TimelineContent>
        <Typography>
            <Box fontFamily='"Segoe UI"' style={{color:"#793D3D"}} fontWeight="fontWeightBold" fontSize={20}>
            2017
            </Box>
          </Typography>
          <Slide left>
          <Paper elevation={3} className={classes.paper}>
          <Typography>
            <Box textAlign="right" fontFamily='"Segoe UI"' style={{color:"#793D3D"}} fontWeight="fontWeightBold" fontSize={18}>
            Bachelor of Computer Science - BJUT - Beijing, Chine
            </Box>
            <Box textAlign="right" fontFamily='"Segoe UI"' style={{color:"#793D3D"}} >Beijing University of Technology</Box>
            <Box textAlign="right" fontFamily='"Segoe UI"' fontStyle="italic" style={{color:"#793D3D"}} >
                Major: Computer Science / 
                French learning
                </Box>
            </Typography>
          </Paper>
          </Slide>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot className={classes.spot}>
          </TimelineDot>
          <TimelineConnector className={classes.tail} />
        </TimelineSeparator>
        <TimelineContent>
        <Typography>
            <Box fontFamily='"Segoe UI"' style={{color:"#793D3D"}} fontWeight="fontWeightBold" fontSize={20}>
            2014 June
            </Box>
          </Typography>
          <Slide right>
          <Paper elevation={3} className={classes.paper}>
          <Typography>
            <Box textAlign="left" fontFamily='"Segoe UI"' style={{color:"#793D3D"}} fontWeight="fontWeightBold" fontSize={18}>
            Chinese Bac in scientific - Pékin, Chine
            </Box>
            <Box textAlign="left" fontFamily='"Segoe UI"' style={{color:"#793D3D"}} >Beijing 161 high school</Box>
            </Typography>
          </Paper>
          </Slide>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot className={classes.spot}>
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}