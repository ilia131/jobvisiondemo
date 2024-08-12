
import images from '../../assets'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay'
import SliderCard from './SliderCard/SliderCard'
import {Autoplay} from 'swiper/modules'
import SwiperCore from 'swiper';
SwiperCore.use([Autoplay]);

import './Slider.css'
const Slider = () => {
  const CardArray = [
    {
      logo:images.img1,
      name:'آرام نیا',
      star: '۲.۶',
      agahi: '۲'
    },
    {
      logo:images.img2,
      name:'آرام نیا',
      star: '۲.۶',
      agahi: '۲'
    },
    {
      logo:images.img3,
      name:'آرام نیا',
      star: '۲.۶',
      agahi: '۲'
    },
    {
      logo:images.img4,
      name:'آرام نیا',
      star: '۲.۶',
      agahi: '۲'
    },
    {
      logo:images.img5,
      name:'آرام نیا',
      star: '۲.۶',
      agahi: '۲'
    },
    {
      logo:images.img6,
      name:'آرام نیا',
      star: '۲.۶',
      agahi: '۲'
    },
    {
      logo:images.img7,
      name:'آرام نیا',
      star: '۲.۶',
      agahi: '۲'
    },
    {
      logo:images.img8,
      name:'آرام نیا',
      star: '۲.۶',
      agahi: '۲'
    },
    {
      logo:images.img5,
      name:'آرام نیا',
      star: '۲.۶',
      agahi: '۲'
    },
    {
      logo:images.img6,
      name:'آرام نیا',
      star: '۲.۶',
      agahi: '۲'
    },
    {
      logo:images.img7,
      name:'آرام نیا',
      star: '۲.۶',
      agahi: '۲'
    },
    {
      logo:images.img8,
      name:'آرام نیا',
      star: '۲.۶',
      agahi: '۲'
    },
    {
      logo:images.img6,
      name:'آرام نیا',
      star: '۲.۶',
      agahi: '۲'
    },
    {
      logo:images.img7,
      name:'آرام نیا',
      star: '۲.۶',
      agahi: '۲'
    },
    {
      logo:images.img8,
      name:'آرام نیا',
      star: '۲.۶',
      agahi: '۲'
    },
  ];
  return (
    <div className='slider'>
       <div className='slider-box'> 
        <Swiper 
           className='slider-box-item'
  
           breakpoints={{
            320: {
              width: 320 ,
              slidesPerView: 2,
              spaceBetween:40,
      
            },
            340: {
              width: 340 ,
              slidesPerView: 2,
              spaceBetween:190,
      
            },
            524: {
              width: 524 ,
              slidesPerView: 2,
              spaceBetween:10,
      
            },
            776:{
              width: 776 ,
              slidesPerView: 2,
              spaceBetween:-160,
            },
            
            900: {
              width:900,
              slidesPerView:3,
              
            },

            1200:{
              width:1200,
              slidesPerView:5,
              spaceBetween:10,
            }
            
          }}
           modules={{Autoplay}}
           autoplay={{
            delay: 2500,
            disableOnInteraction: false
           }}
           >        
          
            {CardArray.map((el, i)=>(
              <div >
                <SwiperSlide  >  
                <SliderCard key={i + 1} el={el} i={i}/> 
                </SwiperSlide>
              </div>
            ))}  
         
         </Swiper>     
       </div>
    </div>
  )
}

export default Slider