import React,{useState,useEffect} from 'react'
import './ProfilePhoto.css'
import {storage} from '../firebase'
import {uploadBytes,listAll,getDownloadURL,ref} from 'firebase/storage'
import {Button} from '@mui/material'
import {ArrowBack,Person} from '@mui/icons-material';
import {collection,getDocs} from 'firebase/firestore'
import {v4} from 'uuid'
import firebase from 'firebase/app'
const ProfilePhoto = () => {
    const [uploadPicture,setUploadPicture]=useState(null);
    const [imageUrl,setImageUrl] = useState('');
    const [listRef,setListRef] = useState('')
    
    useEffect(()=>{
        const emailRef = localStorage.getItem('email');
        console.log(emailRef)
        const ReadData = async()=>{
            
        }
        ReadData();
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
    
   useEffect(()=>{

        const imageRef = localStorage.getItem('imageName');
        const userRef = ref(storage,`${imageRef}/`);
        listAll(userRef).then((res)=>{
            console.log(res)
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
           <ArrowBack/>
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