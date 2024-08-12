import './UnderHero.css'
import { BsSearch } from 'react-icons/bs'
import { CiLocationOn } from "react-icons/ci";
import { PiSuitcaseSimpleBold } from "react-icons/pi";

const UnderHero = () => {
  return (
    <div className='underhero'>
      <div className='underhero-container'>
        
           <p className='underhero-text'>
                دنبال چه شغلی می گردید؟
            </p>
      
         <form className='underhero-input'>
       
            <div className='input-3'>
                 <input  placeholder='...عنوان شغلی یا شرکت' />
                 <BsSearch />
            </div>  
            <div className='input-1'>
                 <input  placeholder='شهر'/>
                 <CiLocationOn />
            </div>
            <div className='input-2'>
                 <input placeholder='گروه شغلی'/>
                 <PiSuitcaseSimpleBold />
            </div>
            <div className='form-btn'>
               <button className='underhero-btn'> جستجو در مشاغل </button>
            </div>
           </form> 
         
         </div>
    </div>
  )
}

export default UnderHero