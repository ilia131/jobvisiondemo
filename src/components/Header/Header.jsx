import Style from './Header.module.css'
import images from "../../assets"
import {HiOutlineLogin} from 'react-icons/hi'
import { IoReorderThreeOutline } from "react-icons/io5";
const Header = () => {
  return (
    <div className={Style.nav}>     
      <div className={Style.nav_container}>
        <div className={Style.nav_container_left}>   
            <div className={Style.text_1}>
                <p>بخش کارفرمایان / ثبت آگهی</p>
            </div>
             
            <div className={Style.btn_login}>
                <button >
                   ورود | ثبت نام <HiOutlineLogin className={Style.btn_login_icons} />
                </button>
            </div>
        </div>
      
        <div className={Style.nav_container_right}> 
           <div className={Style.nav_container_right_container} >        
                <div className={Style.btn}>
                     <button>گزارش وضعیت بازار کار</button>
                </div>
          
                <div>
                    <p>رزومه ساز </p>
                </div>
                <div>
                    <p>رده بندی شرکت ها</p>
                </div>
                <div>
                     <p>محصولات</p>
                </div>
                <div>
                      <p>فرصت های شغلی</p>
                </div>
            </div>     
            <div className={Style.img}>
                <img src={images.jobvision} width={105} height={47}/> 
                <div className={Style.media_sidebar}>
                   <IoReorderThreeOutline />
                </div> 
            </div>
            
        </div>
        </div>
    </div>
  )
}

export default Header