import React from 'react'
import {TextField,Button} from '@mui/material';
import {NavLink} from 'react-router-dom'
import './WelcomePage.css'
const WelcomePage = () => {
  return (
    <div className='welcome'>
        <img className='welcome__image' src='https://st4.depositphotos.com/1316534/41903/i/600/depositphotos_419033018-stock-photo-wroclaw-poland-sep-2020-man.jpg'/>
        <div className='inputs'>
            <div className='input__fields'>
             <TextField id="standard-basic" label="Email" variant="standard" className='input__field1'  />
            </div>
           
           <TextField variant='standard' label='Password' className='input__field2' type='password'/>
        
          <div className='login'>
           <Button variant="contained" className='login__button'>Login</Button>
        </div>
           <div className='Border'>

           </div>
           <div className='create__account'>
              <Button variant='contained' color='success' className='account__button'>Create Account</Button>
           </div>
     </div>
    </div>
  )
}

export default WelcomePage