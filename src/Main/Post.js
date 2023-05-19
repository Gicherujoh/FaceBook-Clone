import React,{useEffect,useState} from 'react'
import {getDocs,collection,docs,doc,updateDoc} from 'firebase/firestore'
import {Person} from '@mui/icons-material'
import {db} from '../firebase'
import {Button} from '@mui/material'
import {ArrowBack} from '@mui/icons-material'
import {useNavigate} from 'react-router-dom'
import './Post.css'
const Post = () => {
    const userRef = collection(db,'users');
    const [users,setUsers] = useState([]);
    const [emailRef,setEmailRef] = useState('')
    const  [Input,setInput] = useState('');
    const [show,setShow] = useState(false)
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
    
    
    const navigate = useNavigate();
    const Navigate = ()=>{
         navigate('/')
    }
    const currentUserPost = doc(db,`users/${currentUser?.id}`);
    const Post = async()=>{
        try{
              await updateDoc(currentUserPost,{
                  UserPost:Input
              })
              navigate('/')
        }catch(e){
          console.error(e)
        }

    }
  return (
    <div>
          <div className='post__nav'>
              <div className='post__icon'>
                  <div>
                      <ArrowBack className='post__arrowback' onClick={Navigate}/>
                  </div>
                  <div>
                      <h2 className='post__title'>Create Post</h2>
                  </div>

              </div>
              <div>
               <Button variant='contained' color='primary' onClick={Post}>Post</Button>
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
              <input placeholder='What is in your Mind?' className='post__input' onChange={(e)=>setInput(e.target.value)}/>
          </div>
      
    </div>
  )
}

export default Post