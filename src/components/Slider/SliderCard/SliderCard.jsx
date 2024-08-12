import { CiStar } from "react-icons/ci";
import './SliderCard.css'
import { FaArrowLeftLong } from "react-icons/fa6";



const SliderCard = ({el , i}) => {
  return (
    <div className='sliderCard' >
      <div className="sliderCard-container">
       <div className='sliderCard-box'>
          <div className='sliderCard-box-box'>  
               <div className='sliderCard-box-img'>
                 <img src={el.logo}
                    className='sliderCard-box-img-img'
                    alt="Slider profile" 
                    width={65}
                    height={90}
                    objectFit='cover'
                  /> 
                 </div> 
                 <div className='sliderCard-box-text'>
                     <span className='sliderCard-box-span-3'>{el.name}</span>
                    
                     <div className='sliderCard-box-span'><span>{el.star}</span><span className='sliderCard-box-span-icons'> <CiStar /></span></div>
                   
                     <div className='sliderCard-box-span-2'> {el.agahi} آگهی شغل فعال <FaArrowLeftLong /></div> 
                </div>
               
           </div>  
            
             </div> 
             <div className='sliderCard-btn'>
                    <button>دنبال کنید +</button>
             </div>
       </div>
     </div>
  )
}

export default SliderCard