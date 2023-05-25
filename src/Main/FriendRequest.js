import React,{useState,useEffect} from 'react'
import './FriendRequest.css'
import {Search,Person} from '@mui/icons-material'
import SharedNav from './SharedNav'
import {Button} from '@mui/material'
import { db } from '../firebase'
import {collection,getDocs,docs} from 'firebase/firestore'
const FriendRequest = () => {
  const [data,setData] = useState([])
  const[email,setEmail] = useState('');
  const[currentData,setCurrentData] = useState([]);
  const ButtonColor = {
      color:'white',
      backgroundColor:'grey'
  };
  useEffect(()=>{
     const data = localStorage.getItem('email');
        setEmail(data);
        
  },[])
  const userRef = collection(db,'users') 
  useEffect(()=>{
    const ReadData = async()=>{
      try{
        const data = await getDocs(userRef);
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
  },[]);
  const Users = [];
 
 
  data.map((items)=>{
    if(items.Email !== email) 
    {
        Users.push(items)
    }
  })
  

  return (
    <div>
      <SharedNav/>
      <div className='Border'>

      </div>
      <div className='friends__top'>
         <h1>Friends</h1>
          <Search className='friends__search'/>
      </div>
      <div className='friends__buttons'>
           <div className='friend__button'>
                <h3>Request</h3>
           </div>
           <div className='friend__button'>
              <h3>Your Friends</h3>
           </div>
      </div>
      <div className='Border'>

      </div>
   
            <div className='friends__main'>
            <div className='friends__title'>
                <h2>People you may know</h2>
            </div>
            {
              Users.map((item)=>(

                  <div className='friends__people'>
                 <div className='friend__image'>
                   {item?.ImageUrl? <img key={item?.id} src={item?.ImageUrl} className='friend__img'/> : <Person className='friend__person'/>}
                 </div>
                 <div className='friends__people__desc'>
                     <div>
                        <h3 key={item?.id}>{item?.FirstName}  {item?.LastName}</h3>
                     </div>
                     <div className='friend__buttons'>
                          <div className='add__friend'>
                              <Button variant='contained' >Add friend</Button>
                          </div>
                          <div>
                             <Button variant='contained' style={ButtonColor}>Remove</Button>
                          </div>
                      </div>
                 </div>
            </div>
  
          ))
    }
     </div>
    </div>
  )

 
}

export default FriendRequest