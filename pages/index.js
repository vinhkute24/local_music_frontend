
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import css from '../styles/Login.module.css'
import Button from '@mui/material/Button';
import { TextField } from '@mui/material'
import { FormControl } from '@mui/material';

import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
  root:{
    width: '754px',
    height: '104px',
    padding: '24px 0 24px 0',
    left: 'auto',
    right: 'auto',

    top: 'auto',
    bottom: 'auto'

  },
});

const myLoader = ({ src, width, quality }) => {
  return `https://img.freepik.com/free-photo/grunge-paint-background_1409-1337.jpg?w=2000${src}?w=${width}&q=${quality || 75}`
}
export default function Home() {

  const classes = useStyles();

  return (
    <>
    
    <Head>
          <title>Sign in Page</title>
        </Head>
        
        
        <div className={css.container}>
        <img className={css.img_play} src='https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000' />

        <form  className={css.mx_auto}>
        <FormControl className={classes.root} >
         
          <div className={css.text}>
            <Typography  variant="h2" component="div" gutterBottom>
            Want to listen some music ? 
            </Typography>
          </div>
         
          
          
          <Button variant="contained" href="/login">Login Now !!</Button>
         
          
          
         
          </FormControl >
        </form>
        
  
        </div>
        
    
      
        
        
        
        
        
      </>
      
  
  )

  }