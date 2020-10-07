import React,{ useRef }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import TabPanel from './aboutme';
import Fade from 'react-reveal/Fade';
import Contact from './contact';

const useStyles = makeStyles((theme) => ({
  root: {
    width:'100%',
  },
  Paper: {
    padding: theme.spacing(3),
    backgroundColor:"#C7B8B7",
    alignItems: 'center',
    justify: 'center',
    textAlign: 'center',
    margin: '14%',
  },
  text:{
    color: 'White',
    fontFamily: '"Segoe UI"',
    fontSize:'40px',
  },
  link: {
    color: '#D9755B',
    fontSize:'16px',
    fontWeight: 700,
    fontFamily: 'Arial',
  },
  image: {
    width: '70%',
    height: '70%',
  },
  img: {
    margin: '20%',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();
  const scrollToRef = (ref) => window.scrollTo({ 
    left: 0, 
    top: ref.current.offsetTop,
    behavior: 'smooth',
  })   

  const refAbout = useRef(null)
  const refContact = useRef(null)
  const ScrolltoAbout = () => scrollToRef(refAbout)
  const ScrolltoContact = () => scrollToRef(refContact)

  return (
    <div className={classes.root} >
     
      <Grid container spacing={2} style={{backgroundColor: "#f1e7e7"}}>
        <Grid item xs={6} style={{backgroundColor:"#B9A7A5", justify:"center" ,alignItems:"center"}}>
        <Fade left cascade>
          <Paper className={classes.Paper} elevation={3}>
         
            <p className={classes.text}>Hello, I'm Zixuan LI</p>
            <p className={classes.text} style={{display: 'inline'}}>A </p>
            <p className={classes.text} style={{color: '#793D3D', fontWeight:'700' , display: 'inline'}}>Web developer </p>
            <p className={classes.text} >based in Paris</p>
        
            <p className={classes.text} > NICE TO MEET YOU
            <FavoriteRoundedIcon style={{fontSize:'35px',color: '#793D3D'}}/>
            </p>

            <p/>
           
          </Paper>
          </Fade>
        </Grid>
        <Grid item xs={6} style={{float: 'right', border:0, margin:0,backgroundColor:"#EDD2C7"}}>
          <Breadcrumbs aria-label="breadcrumb" style={{float: 'right', padding: '5%'}}  className={classes.link}>
             <Link onClick={ScrolltoAbout} className={classes.link}>
                About me
             </Link>
             <Link onClick={ScrolltoContact} className={classes.link}>
                Contact
             </Link>
           </Breadcrumbs>
           <Fade right cascade>
           <Grid item className={classes.image}>
              <img className={classes.img} alt="img" src={require('../img/img1.jpg')}/>
          </Grid>
          </Fade>
        </Grid>

        <Grid item xs={12} style={{justify:"center" ,alignItems:"center", textAlign: 'center',height: '60px'}}>
             <KeyboardArrowDownIcon style={{fontSize:'60px',color: '#D9755B', top:0}}  onClick={ScrolltoAbout}/>
        </Grid>
        <Grid item xs={12} ref={refAbout}>
           <TabPanel/>
        </Grid>
        <Grid item xs={12} ref={refContact} style={{backgroundColor: "#B9A7A5"}} >
           <Contact/>
        </Grid>
      </Grid>
      
    </div>
  );
}
