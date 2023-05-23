import React from 'react'

import './MainPageNav.css'
import {Add,Search,OfflineBolt} from '@mui/icons-material'
import MainPost from './MainPost'
import SharedNav from './SharedNav'
const MainPageNav = () => {
  return (
    <div>
        <div className='home__nav'>
            <div>
               <h2 className='home__title'>facebook</h2>
            </div>
            <div className='home__icons'>
                <div>
                   <Add className='home__icon'/>
                </div>
                <div>
                    <Search className='home__icon'/>
                </div>
                <div>
                    <OfflineBolt className='home__icon'/>
                </div>

            </div>
        </div>
        <SharedNav/>
      <div className='Border'> 

        </div> 
   
    <MainPost/>
    </div>
  )
}

export default MainPageNav