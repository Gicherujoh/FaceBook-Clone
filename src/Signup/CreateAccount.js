import React,{useState,useEffect} from 'react'
import './CreateAccount.css'
import {ArrowBack} from '@mui/icons-material';
import {yupResolver} from '@hookform/resolvers/yup';
import {Button,Input} from '@mui/material'
import TextField from '@mui/material/TextField';
import {useForm} from 'react-hook-form'
import { useNavigate} from 'react-router-dom'
import  * as yup from 'yup';
import { db } from '../firebase';
import { addDoc,collection,getDoc, getDocs,docs } from 'firebase/firestore';

const schema = yup.object().shape({
    firstname:yup.string().required(),
    lastname:yup.string().required(),
   gender:yup.string().required(),
    phone:yup.number().min(10).required(),
    email:yup.string().email().required(),
    Password:yup.string().min(4).max(15).required(),
    cPassword:yup.string().oneOf([yup.ref('Password'),null])
});
const CreateAccount = () => {
    const {register,handleSubmit,formState:{errors}} = useForm({
         resolver:yupResolver(schema)
    })
    const navigate = useNavigate();
    const [firstName,setFirstName]= useState("");
    const [lastName,setLastName]= useState("");
    const [gender,setGender]= useState("");
    const [phone,setPhone]= useState("");
    const [password,setPassword]= useState("");
    const [confirmPassword,setConfirmPassword]= useState("");
    const [email,setEmail]= useState("");
    const[show,setShow]= useState(false)
    
    const Navigate = ()=>{
       
        navigate('/')
    }
    const NavigatetoProfilePage=()=>{
        navigate('/profilephoto');

    }
    const userCollection = collection(db,"users");
  const Submit = async()=>{
    try{
        await addDoc(userCollection,{
          FirstName:firstName,
          LastName:lastName,
          Gender:gender,
          Phone:phone,
          Email:email,
          SetPassword:password,
          ConfirmPassword:confirmPassword

        });
        setShow(true);
       

    }catch(e){
        console.error(e);
    }

  }
  return (
      <div>
        <div className='nav'>
            <div>
                <ArrowBack onClick={Navigate}/>
            </div>
            <h3 className='nav__title'>Create Account Page</h3>
        </div>
        <div className='Border'>

        </div>
        
       <div className='main'>
           <div className='main__state'>
              {show && <h2 className='main__state__title'>Account Created Successfully</h2>}
               <div className='success__button'>
                   {show && <Button variant='contained' color='error' onClick={NavigatetoProfilePage} >Ok</Button>}
               </div>
              
             </div>
           <div>
              <h2 className='main__title'>Create Account</h2>
           </div>
           <div className='main__inputs'>
             <input name='firstname' className='main__input' autocomplete='off' placeholder='First Name' {...register('firstname')} onChange={(e)=>setFirstName(e.target.value)}/>
           </div>
           <p className='main__errors'>{errors.firstname && 'First Name is a required field'}</p>
           <div className='main__inputs'>
             <input name='lastname' className='main__input' autocomplete='off' placeholder='Last Name' {...register('lastname')} onChange={(e)=>setLastName(e.target.value)}/>
           </div>
           <p className='main__errors'>{errors.lastname && 'Last Name is a required field'}</p>
           <div className='main__inputs'>
             <input name='gender' className='main__input' autocomplete='off' placeholder='Gender' {...register('gender')} onChange={(e)=>setGender(e.target.value)}/>
           </div>
           <p className='main__errors'>{errors.gender && 'Gender is a required field'}</p>
           <div className='main__inputs'>
             <input name='phone' className='main__input' autocomplete='off' placeholder='Phone' {...register('phone')} onChange={(e)=>setPhone(e.target.value)}/>
           </div>
           <p className='main__errors'>{errors.phone && 'Enter a valid Phone Number'}</p>
           <div className='main__inputs'>
             <input name='email' className='main__input' autocomplete='off' placeholder='Email' {...register('email')} onChange={(e)=>setEmail(e.target.value)}/>
           </div>
           <p className='main__errors'>{errors.email && 'Enter a valid Email'}</p>
           <div className='main__inputs'>
             <input name='Password' type='password' className='main__input' autocomplete='off' placeholder='Set Password' {...register('Password')} onChange={(e)=>setPassword(e.target.value)}/>
           </div>
           <p className='main__errors'>{errors.Password?.message }</p>
           <div className='main__inputs'>
             <input name='cPassword' type='password' className='main__input' autocomplete='off' placeholder='Confirm Password' {...register('cPassword')} onChange={(e)=>setConfirmPassword(e.target.value)}/>
           </div>
           <p className='main__errors'>{errors.cPassword && 'Is a required field and should match'}</p>
           <div className='main__button'>
             <Button variant='contained' color='success' onClick={handleSubmit(Submit)}>Submit</Button>
           </div>

       </div>
    

          
      </div>
  )
}

export default CreateAccount