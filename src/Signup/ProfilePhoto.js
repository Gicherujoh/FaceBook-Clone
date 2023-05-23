import React,{useState,useEffect} from 'react'
import './ProfilePhoto.css'
import { useNavigate } from 'react-router-dom'
import {storage,db} from '../firebase'
import {uploadBytes,listAll,getDownloadURL,ref} from 'firebase/storage'
import {Button} from '@mui/material'
import {ArrowBack,Person} from '@mui/icons-material';
import {collection,getDocs,docs,updateDoc,doc} from 'firebase/firestore'
import {v4} from 'uuid'
import firebase from 'firebase/app'
const ProfilePhoto = () => {
    const [uploadPicture,setUploadPicture]=useState(null);
    const [imageUrl,setImageUrl] = useState('');
    const [listRef,setListRef] = useState('')
    const [Data,setData] = useState([]);
    const [emailRef,setEmailRef] = useState('')
   
        useEffect(()=>{
        const email = localStorage.getItem('email')
          setEmailRef(email)
    },[])
    const navigate = useNavigate();
   const Navigate = ()=>{
      
        navigate('/createaccount')
   }
    useEffect(()=>{
        const userRef = collection(db,"users")
        const ReadData = async()=>{
            try{
                const data = await getDocs(userRef);
                const filteredData = data.docs.map((item)=>({
                    ...item.data(),
                    id:item.id
                }))
                setData(filteredData);
                
            }catch(e){
                console.error(e)
            }

        }
        ReadData();
    },[])
    const FindUser = (user)=>{
        return emailRef === user.Email;

    }
    const User = Data.find(FindUser);
   
      useEffect(()=>{
          
           const userRef = doc(db,`users/${User?.id}`);
        
          const UpdateData = async()=>{
            try{
                await updateDoc(userRef,{
                    ImageUrl:listRef
                })
            }catch(e){
                console.error(e)
            }

          }
          UpdateData();
      },[])

    const PictureUpload = async()=>{
        
        try{
             if(uploadPicture === null) return;
             const pictureRef = ref(storage, `${uploadPicture.name}/${uploadPicture.name +v4()}`);
             
           await uploadBytes(pictureRef,uploadPicture);
           localStorage.setItem('imageName',uploadPicture.name);
           


        }catch(e){
            console.error(e);
        }      
    }
    const NavigatetoHome=()=>{
        navigate('/')
      }
   useEffect(()=>{

        const imageRef = localStorage.getItem('imageName');
        const userRef = ref(storage,`${imageRef}/`);
        listAll(userRef).then((res)=>{
              res.items.forEach((item)=>{
                  getDownloadURL(item).then((url)=>{
                    setListRef(url);
                  })
              })
        })
        
   },[])
   
  return (
    <div>
        <div className='profile__nav'>
           <ArrowBack onClick={Navigate}/>
           <div className='profile__nav__title'>
            <h3>Profile Picture Page</h3>
            </div>
            
        </div>
        <div className='Border'>

        </div>
        <div className='profile__main'>
         
            <div >
            <img src={listRef} className='profile__pic'/>
            </div>  
            <div className='profile__contents'>
                <div className='profile__content__button'>
                   <Button variant='contained' className='profile__button' onClick={PictureUpload}>Upload</Button>
                </div>
                <div>
                   <input type='file' onChange={(e)=>setUploadPicture(e.target.files[0])}/>
                </div>
             
              
            </div>
            
        
        </div>
    </div>
  )
}

export default ProfilePhoto