import './UnderSlider.css'
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import images from '../../assets'
import Card from './Card/Card';
import { FaArrowLeftLong } from "react-icons/fa6";


const UnderSlider = () => {
   const CardArray = [
     {
        name:'Business Line Owner',
        name1:'اسنپ فود',
        locations:'تهران زعفرانیه',
        img:images.img1
     },
     {
        name:'Business Line Owner',
        name1:'اسنپ فود',
        locations:'تهران زعفرانیه',
        img:images.img1
     },
     {
        name:'Business Line Owner',
        name1:'اسنپ فود',
        locations:'تهران زعفرانیه',
        img:images.img1
     },
    {
       name:'Business Line Owner',
         name1:'اسنپ فود',
         locations:'تهران زعفرانیه',
         img:images.img1
     },
     {
        name:'Business Line Owner',
         name1:'اسنپ فود',
         locations:'تهران زعفرانیه',
         img:images.img1
      },
      {
         name:'Business Line Owner',
         name1:'اسنپ فود',
         locations:'تهران زعفرانیه',
         img:images.img1
      },
   ]
    



  return (
    <div className='underslider'>
      <div className='underslider-container'>
        <p className='underslider-text'>تازه‌ترین آگهی‌های شغلی برای شما</p>  
        <div>
         <div className='underslider-icons'>
             <div className='underslider-text-2'> 
              <p>  مشاغل پیشنهادی</p><img src={images.logo2} width={30} height={40}/>
             </div>
            </div>
         <p className='text'>۴۵۲۷۶ آگهی شغلی</p>
        </div>
       <div className='card-array'>
           {CardArray.map((el , i)=> (
             <div >
                <Card el={el} i={i} key={i+1}/>
             </div>
           ))}
         
         </div>   
          <div className='underslider-btn'>
               <button><FaArrowLeftLong /><p>  مشاهده همه </p></button>
          </div>
         </div>
    </div>
  )
}

export default UnderSlider