import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Fade from 'react-reveal/Fade';


export default function experience() {
   
    return (
      <div>
        <Paper elevation={3}  style={{backgroundColor:"#efd5bd" ,  margin: '5%' , padding:'10px'}}>
        <Typography component="div">
        <Fade>
        <Box textAlign="center" lineHeight={3} style={{color:"#79533d"}}> --------------------- </Box>
        <Box textAlign="center" fontFamily='"Segoe UI"' style={{color:"#79533d"}} fontWeight="fontWeightBold" m={1} fontSize={22}>Personal Project CV Website - 2020</Box>
        <Box textAlign="center" fontFamily='"Segoe UI"' style={{color:"#79533d"}} >
        Create my peronal CV website : (the website you're looking at)<br/>
        ★ UX/UI desgin <br/>
        ★ Learning React.js <br/>
        </Box>
        <Box textAlign="center" fontFamily='"Segoe UI"' fontWeight="fontWeightBold" style={{color:"#79533d"}} >
          Languages: JavaScript(ES6/ES7), CSS, HTML <br/>
          Tools: React.js, Material-UI
        </Box>
        <Box textAlign="center" lineHeight={3} style={{color:"#79533d"}}> --------------------- </Box>
        </Fade>
        </Typography>   
      </Paper>
      


        <Paper elevation={3}  style={{backgroundColor:"#efc7bd" ,  margin: '5%' , padding:'10px'}}>
        <Typography component="div">
        <Fade>
        <Box textAlign="center" lineHeight={3} style={{color:"#793D3D"}}> --------------------- </Box>
        <Box textAlign="center" fontFamily='"Segoe UI"' style={{color:"#793D3D"}} fontWeight="fontWeightBold" m={1} fontSize={22}>Automation Test Developer - 2020 (6 months)</Box>
        <Box textAlign="center" fontFamily='"Segoe UI"' style={{color:"#793D3D"}} fontWeight="fontWeightBold" fontStyle="italic" fontSize={20} m={1}>Renault-Nissan-Mitsubishi Alliance - Boulogne-Billancourt (92), France</Box>
        <Box textAlign="center" fontFamily='"Segoe UI"' style={{color:"#793D3D"}} >
        Agile development on the test reporting tool SILK Central : <br/>
        ★ Data retrieval for test reporting <br/>
        ★ Creating test report templates <br/>
        ★ Implementation of new functions to facilitate the exploitation of test data <br/>
        </Box>
        <Box textAlign="center" fontFamily='"Segoe UI"' fontWeight="fontWeightBold" style={{color:"#793D3D"}} >
          Languages: JavaScript, Oracle SQL <br/>
          Tools: BIRT, Jira, SOAP UI
        </Box>
        <Box textAlign="center" lineHeight={3} style={{color:"#793D3D"}}> --------------------- </Box>
        </Fade>
        </Typography>   
      </Paper>
      
      <Paper elevation={3}  style={{backgroundColor:"#efbdc9", margin: '5%', padding:'10px'}}>
        <Typography component="div">
        <Fade>
        <Box textAlign="center" lineHeight={3} style={{color:"#793d56"}}> --------------------- </Box>
        <Box textAlign="center" fontFamily='"Segoe UI"' style={{color:"#793d56"}} fontWeight="fontWeightBold" m={1} fontSize={22}>Front End Web Developer - 2019 (5 months)</Box>
        <Box textAlign="center" fontFamily='"Segoe UI"' style={{color:"#793d56"}} fontWeight="fontWeightBold" fontStyle="italic" fontSize={20} m={1}>FTL Express - Paris (75), France</Box>
        <Box textAlign="center" fontFamily='"Segoe UI"' style={{color:"#793d56"}} >
        Development in Agile of a transportation management system ： <br/>
        ★ Creating user interface of Transports Management System <br/>
        ★ Realize a calendar to present transport information <br/>
        ★ Creating a table illustrating the progression of transport <br/>
        </Box>
        <Box textAlign="center" fontFamily='"Segoe UI"' fontWeight="fontWeightBold" style={{color:"#793d56"}} >
          Languages: JavaScript(ES6/ES7), CSS, HTML <br/>
          Tools: Vue.js, Swagger UI, GitLab, Trello
        </Box>
        <Box textAlign="center" lineHeight={3} style={{color:"#793d56"}}> --------------------- </Box>
        </Fade>
        </Typography>   
      </Paper>
      </div>
    );
  }