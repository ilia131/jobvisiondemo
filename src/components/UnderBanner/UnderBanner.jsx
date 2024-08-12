import React from 'react'
import images from '../../assets'
import './UnderBanner.css'
const UnderBanner = () => {
  return (
    <div className='underbanner'>
       <div className='underbanner-container'>         
           <img className='underbanner-img' src={images.undr} width={1000} height={250}/>
      
        <div className='underbanner-box'>
        <div className='underbanner-card-right'>  
             <div className='img-2'>
                   <img src={images.cc} width={70} height={100}/>
                </div>
                <div className='text-4'>
                     <p className='text-p'>رزومه ساز جاب ویژن <br /><span className='text-span'>رزومه استاندارد به دو زبان انگلیسی و فارسی بسازید</span></p>
                     <button >ساخت رزومه</button>
                </div>
              
            </div>
            <div className='underbanner-card-right'>
                <div className='img-1'>
                   <img src={images.tt} width={110} height={120}/>
                </div>
                <div className='text-4'>
                     <p className='text-p'>رزومه ساز جاب ویژن <br /><span className='text-span'>رزومه استاندارد به دو زبان انگلیسی و فارسی بسازید</span></p>
                     <button >ساخت رزومه</button>
                </div>
             
            </div>
        </div>
        </div>
    </div>
  )
}

export default UnderBanner