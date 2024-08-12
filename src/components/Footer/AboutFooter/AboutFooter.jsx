
import { useState } from 'react'

import './AboutFooter.css'


const AboutFooter = ({el , i}) => {
    const [openside, setOpenSide] = useState(false)
    const openarrow = () =>{
      if (!openside) {
        setOpenSide(true)
      } else {
        setOpenSide(false)
      }
    }
  return (
    <div className='aboutfooter-father'>
        <div className='aboutfooter' onClick={openarrow} >
          {openside?  
                   <div className='aboutfooter-3'>     
                       <p>{el.title}</p>
                       <div className='aboutfooter-number'> <p >{i + 1}</p></div>
                   </div> 
                  : 
                   <div className='aboutfooter-2'>   
                   
                     <p>{el.title}</p>
                     <div className='aboutfooter-number'> <p >{i + 1}</p></div>
                   </div>   
             }
          
           {openside && (
           <div className='openside'>
              <p>{el.subtitle}</p>
            </div>
          )}
        </div>  
    </div>
  )
}

export default AboutFooter