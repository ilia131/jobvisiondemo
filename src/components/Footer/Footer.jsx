
import AboutFooter from './AboutFooter/AboutFooter'
import './Footer.css'
import { FaAngleDown, FaTelegram } from 'react-icons/fa6';

import { useState } from 'react';
import AboutCompany from './AboutCompany/AboutCompany';
import Worker from './Workerr/Worker';
import images from '../../assets'
import Onwork from './Onwork/Onwork';
import Aboutjob from './Aboutjobvision/Aboutjob';
import Footer2 from './Footer2/Footer2';


const Footer = () => {
  const [seemore , SetSeeMore] = useState(false)
  
  const OpenMore = () => {
    if (!seemore) {
      SetSeeMore(true)
    } else {
      SetSeeMore(false)
    }
  }


  const FooterArray = [
    {
      title: 'جاب ویژن، چه مزیتی نسبت به دیگر سایت‌های کاریابی و استخدامی دارد؟ ',
      subtitle: 'وبسایت جاب ویژن با بیش از 40 هزار آگهی استخدام فعال و استفاده از هوش مصنوعی برای پیشنهاد مرتبط‌ترین آگهی‌ها به کارجویان، فرایند کاریابی را بسیار آسان‌تر کرده است ',
    },
    {
      title: ' آیا ساخت و ارسال رزومه در جاب ویژن برای من هزینه‌ای دارد؟ ',
      subtitle: 'خیر، کارجویان می‌توانند بدون پرداخت هیچ هزینه‌ای در سایت کاریابی جاب ویژن رزومه بسازند و برای آگهی های استخدام ارسال کنند',
    },
    {
      title: ' چگونه می‌توانم از جدیدترین آگهی های استخدام مطلع شوم؟ ',
      subtitle: 'شما می‌توانید با فعالسازی گزینه ایمیل اطلاع رسانی و عضویت در بات تلگرامی جاب ویژن، از جدیدترین آگهی های استخدام و کاریابی حوزه شغلی خود مطلع شوید',
    },
    {
      title: 'آیا آگهی های استخدام در سایت جاب ویژن به روز هستند؟',
      subtitle: ' بله؛ در صفحه فرصت‌های شغلی شما می‌توانید به ترتیب از بالا، جدیدترین و به‌روزترین آگهی های استخدام را مشاهده کنید ',
    },
    {
      title: 'چگونه می‌توانم فرصت‌های شغلی را در شهرهای مختلف مشاهده کنم؟',
      subtitle: ' شما می‌توانید با استفاده از نوار جستجوی پیشرفته سایت، فیلترهای مختلف از جمله شهر، گروه شغلی، میزان حقوق و... را انتخاب کرده و آگهی‌های شغلی مدنظرتان را پیدا کنید ',
    },
  ]

   




  return (
    <div className='footer'>
      <h2>سوالات متداول</h2>
      <div className='footer-container'>
      <div className='footer-card'>
        {FooterArray.map((el , i) => (
          <div>
           <AboutFooter el={el} i={i} key={i + 1}/>
          </div>
        ))} 
        <div className='footer-discover'>
          <h2>
              استخدام با معتبرترین سایت کاریابی و استخدامی ایران 
          </h2>
          <p>پیدا کردن شغل دلخواه و فرصت استخدام جدید در سازمانی معتبر با شرایط مطلوب کار آسانی نیست. فرآیند پیدا کردن شغل و کاریابی، همواره مسیری با ناهمواری‌های زیاد برای کارجویان بوده و هست. وضعیت نه‌چندان مطلوب بازار کار در ایران از یک طرف و عدم کسب مهارت‌های تخصصی توسط کارجویان از طرف دیگر، این موضوع را به یک مسئله بزرگ در جامعه تبدیل کرده است</p>
          <p>همه کارجویان در هر حوزه، شهر، شغل و سنی تمایل به کوتاه و آسان‌تر کردن این مسیر ناهموار و تسریع فرآیند استخدام و کاریابی خود دارند. 
             آن‌ها برای موفقیت در این راه به یک رزومه حرفه‌ای، دسترسی به 
           <br/><span  >
             {seemore? <AboutCompany OpenMore={OpenMore} />:<div className='footer-more-text' onClick={OpenMore}><FaAngleDown className='icons-3' /> مشاهده ی بیشتر</div> } 
            </span></p>
        </div>
        <div className='footer-discover-44'>
         <div className='footer-discover-2'>
            <div className='footer-img'>
              <img src={images.enamad} width={250} height={180} />
            </div>
           <div className='footer-discover-2-text'>
                <div >
                  <h5>درباره جاب ویژن</h5>
                  <Aboutjob />
                </div>
                <div >
                   <h5>کار فرمایان</h5>
                   <Onwork />
                </div>
                <div >
                   <h5>کارجویان</h5>
                   <Worker />
                </div>
            </div> 
          </div> </div>
          <Footer2 /> 
      </div></div>
    </div>
  )
}

export default Footer