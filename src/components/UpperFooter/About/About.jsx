
import './About.css'
import { useState } from 'react'
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from 'react-icons/fa6';


const About = ({el , i}) => {
    const [openside, setOpenSide] = useState(false)
    const openarrow = () =>{
      if (!openside) {
        setOpenSide(true)
      } else {
        setOpenSide(false)
      }
    }
  return (
    <div className='note-about'>
        <div className='note' onClick={openarrow}>
           <div className='upperfooter-arrow'>
                 <div className='icons'>{openside? <FaAngleUp className='icons-2' />  : <FaAngleDown className='icons-2'  />}</div>  
                 <div><p>{el.title}</p></div>
           </div>
           {openside && (
           <div className='open-arrow'>
              <p>{el.subtitle}</p>
            </div>
          )}
        </div>  
    </div>
  )
}

export default About