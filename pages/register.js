import Head from 'next/head'
import Link from 'next/link'
import {useState, useContext, useEffect} from 'react'


import { useRouter } from 'next/router'

import css from '../styles/Login.module.css'
import Button from '@mui/material/Button';
import { TextField } from '@mui/material'
import { FormControl } from '@mui/material';
import { Input } from '@mui/material';
import axios from 'axios'

const Register = () => {
    const [userData, setUserData] = useState({
        username:'', email:'', password: ''
    })





  const router = useRouter()

  const handleChangeInput = e => {
    const {name, value} = e.target
    setUserData({...userData, [name]:value})
   
  }

  const registerSubmit = async e => {
    e.preventDefault()

  

  await  axios({
      method: 'post',
      url: 'http://localhost:5000/admin/register',
      data: {
        ...userData
      },
      headers: {
          'Content-Type': 'application/json',
          
      },
  }).then(function (response) {
      console.log(response);
  }).catch(function (error) {
      console.log(error);
  });

  console.log({...userData})

    localStorage.setItem('firstLogin', true)
    window.location.href = "/login";
        
    
    

    /* dispatch({ type: 'NOTIFY', payload: {loading: true} })
    const res = await postData('auth/login', userData)
    
    if(res.err) return dispatch({ type: 'NOTIFY', payload: {error: res.err} })
    dispatch({ type: 'NOTIFY', payload: {success: res.msg} })

    dispatch({ type: 'AUTH', payload: {
      token: res.access_token,
      user: res.user
    }})

    Cookie.set('refreshtoken', res.refresh_token, {
      path: 'api/auth/accessToken',
      expires: 7
    }) */

    
  }


    return(
      <div>
        <Head>
          <title>Register Page</title>
        </Head>
        <form className={css.mx_auto} onSubmit={registerSubmit}>
       
      
            <div className={css.form_group}>
                <Input type="text" name="email" required placeholder="Email" value={userData.email} onChange={handleChangeInput} />
            </div>
            <div className={css.form_group}>
                <Input type="text" name="username" required placeholder="Username" value={userData.username} onChange={handleChangeInput} /> 
            </div>
            <div className={css.form_group}>
                <Input type="password" name="password" required placeholder="Password" value={userData.password} onChange={handleChangeInput} />
            </div>
            <Button  type="submit" variant='contained'>Register</Button>

            <p className="my-2">
            Already have account ? <Link href="/login"><a style={{color: 'crimson'}}>Login Now</a></Link>
            </p>
     
       

        </form>
        
        
        
        
      </div>
    )
  }
  
  export default Register