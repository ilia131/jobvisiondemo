

import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { PiTelegramLogo } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa";
import images from '../../../assets'

import './Footer2.css'



const Footer2 = () => {
  return (
 
        <div className='underfooter'>
           <div className="underfooter-container">
             <div className="underfooter-left">
               <p>جاب‌ویژن محصولی دانش بنیان شناخته شده است
               <br/> دارای مجوز رسمی کاریابی الکترونیکی از وزارت کار، تعاون و رفاه اجتماعی </p>
               <div className="social-icons">
                 <FaInstagram />
                 <CiTwitter />
                 <FaLinkedin />
                 <PiTelegramLogo/>
               </div>
             </div>  
             <div className='underfooter-text'>
               <p>جاب‌ویژن بعنوان اولین ارائه دهنده بسته جامع خدمات کاریابی و استخدام، تجربه 
                <br />برگزاری موفق ادوار مختلف نمایشگاه‌های کار شریف و ایران را در کارنامه کاری خود 
                <br />دارد. سیستم هوشمند انطباق، رزومه ساز دو زبانه، تست‌های خودشناسی، ارتقای 
                <br />توانمندی‌ها به کمک پیشنهاد دوره‌های آموزشی و همکاری با معتبرترین سازمان‌ها<br />
                 برای استخدام از ویژگی‌های متمایز جاب‌ویژن است </p>
               <img src={images.jbj} width={80} height={50}/> 
             </div>
             </div>
          </div>
  
  )
}

export default Footer2