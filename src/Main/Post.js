import React,{useEffect,useState} from 'react'
import {getDocs,collection,docs} from 'firebase/firestore'
import {Person} from '@mui/icons-material'
import {db} from '../firebase'
import {Button} from '@mui/material'
import {ArrowBack} from '@mui/icons-material'
import './Post.css'
const Post = () => {
    const userRef = collection(db,'users');
    const [users,setUsers] = useState([]);
    const [emailRef,setEmailRef] = useState('')
    useEffect(()=>{
        const email = localStorage.getItem('email');
        setEmailRef(email);
        
    },[])
    useEffect(()=>{
      const ReadData = async()=>{
        try{
            const data = await getDocs(userRef);
            const filteredData =  data.docs.map((doc)=>({
                ...doc.data(),
                id:doc.id
            }))
            setUsers(filteredData);
        }catch(e){
            console.error(e)
        }

      }
      ReadData();

    },[])
    const FindUser = (user)=>{
        return emailRef === user.Email;
    }
    const currentUser = users.find(FindUser);
    console.log(currentUser)
  return (
    <div>
          <div className='post__nav'>
              <div className='post__icon'>
                  <div>
                      <ArrowBack className='post__arrowback'/>
                  </div>
                  <div>
                      <h2 className='post__title'>Create Post</h2>
                  </div>

              </div>
              <div>
               <Button variant='contained' color='primary'>Post</Button>
              </div>
          </div>
          <div className='Border'>

          </div>
          <div className='post__Main'>
            <div>
              {currentUser?.ImageUrl? <img src={currentUser?.ImageUrl} className='post__main__person__image'/> : <Person className='post__main__person'/>}
            </div>
            <div>
                <h3 className='post__Title'>{currentUser?.FirstName} {currentUser?.LastName}</h3>
            </div>
              
          </div>

          <div>
              <input placeholder='What is in your Mind?' className='post__input'/>
          </div>
      
    </div>
  )
}

export default Post