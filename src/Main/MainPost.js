import React,{useEffect,useState} from 'react'
import {getDocs,collection,docs} from 'firebase/firestore'
import './MainPost.css'
import {useNavigate} from 'react-router-dom'
import {Person,PermMedia, NavigateNextRounded} from '@mui/icons-material'
import { db } from '../firebase'
import UserStories from './UserStories'
const MainPost = () => {
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
    const navigate = useNavigate();
    const Navigate =()=>{
        navigate('/post')
    }
  return (
    <div>
        <div className='post__main'>
            <div>
              {currentUser?.ImageUrl? <img src={currentUser?.ImageUrl} className='post__main__person__image'/> : <Person className='post__main__person'/>}
            </div>
            <div>
                <input placeholder='What is in your mind?' className='post__main__input' onClick={Navigate}/>
            </div>
            <div>
                <PermMedia className='post__main__media'/>
            </div>
        </div>
        <div>
            <UserStories/>
        </div>
    </div>
  )
}

export default MainPost