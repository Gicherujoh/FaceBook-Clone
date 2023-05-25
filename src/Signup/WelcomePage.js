import React,{useState,useEffect} from 'react'
import {yupResolver} from '@hookform/resolvers/yup';
import {TextField,Button} from '@mui/material';
import {NavLink,useNavigate} from 'react-router-dom'
import * as yup from 'yup';
import {useForm} from 'react-hook-form'
import './WelcomePage.css'
import { db } from '../firebase';
import { addDoc,collection,getDocs,docs } from 'firebase/firestore';

const schema = yup.object().shape({
  email:yup.string().email().required(),
  password:yup.string().required().min(4).max(15)
})
const WelcomePage = () => {
  const [data,setData] =useState([]);
  const[password,setPassword]=useState('');
  
  const[email,setEmail]= useState('');
   const navigate = useNavigate();
     const Navigate = ()=>{
          navigate('/createaccount');
     }
    const {register,handleSubmit,formState:{errors}} = useForm({
      resolver:yupResolver(schema)
    })
    const userCollection = collection(db,"users");
      useEffect(()=>{
        const ReadData= async()=>{
          try{
            const data = await getDocs(userCollection);
            const filteredData = data.docs.map((doc)=>({
              ...doc.data(),
              id:doc.id
            }))
           setData(filteredData);
          }catch(e){
            console.error(e)
          }

        }
        ReadData();

      },[])
      

    const Submit = async()=>{
      data.forEach((item)=>{
        if(item.Email === email && item.ConfirmPassword === password)
        {
            localStorage.setItem('email',email)
          navigate('/')
        }

      })

    }
  
   
  return (
    <div className='welcome'>
        <img className='welcome__image' src='https://st4.depositphotos.com/1316534/41903/i/600/depositphotos_419033018-stock-photo-wroclaw-poan.jpg'/>
        <div className='inputs'>
            <div className='inputs__field'>
              <input placeholder='Email' name='email' className='input__field' {...register('email')} onChange={(e)=>setEmail(e.target.value)}/>
              <p className='input__errors'>{errors.email && 'Enter a valid Email'}</p>
            </div>
            
            <div>
            <input placeholder='Password' name='password' type='password' className='input__field' {...register('password')} onChange={(e)=>setPassword(e.target.value)}/>
            <p className='input__errors'>{errors.password && 'Invalid Password'}</p>
            </div>

          <div className='login'>
           <Button variant="contained" className='login__button' onClick={handleSubmit(Submit)}>Login</Button>
        </div>
        <div className='forgotPassword'>
            <NavLink>Forgot Password?</NavLink>
        </div>
           <div className='Border'>

           </div>
           <div className='create__account'>
              <Button variant='contained' color='success' className='account__button' onClick={Navigate}>Create Account</Button>
           </div>
     </div>
    </div>
    
  )
}

export default WelcomePage