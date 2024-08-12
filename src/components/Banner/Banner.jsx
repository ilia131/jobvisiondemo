import './Banner.css'
import images from '../../assets'


const Banner = () => {
  return (
    <div className='banner'>
      <div className='banner-container'>
        <div className='banner-card'>  
            <div className='banner-card-left'>
                 <img src={images.newspaper} width={230} height={200}/>
            </div>
            <div className='banner-card-right'>
               
                 <h2>استخدام های سراسری و دولتی</h2>
                 <div className='text-banner'>
                 <p>در این قسمت، آخرین    فرصت‌های استخدام سراسری و دولتی به‌طور
                <span className='span-tg2'>  مرتب به‌روزرسانی  و  منتشر می‌شوند.  به صفحه استخدام‌های سراسری </span>
                <span className='span-tg'>سر بزنید و از بررسی روزانه ده‌ها سایت و مرجع خبری دیگر بی‌نیاز شوید.</span></p></div>
                 <button >مشاهده فرصت های شغلی</button>
            </div>
          
        </div>
        <div className='banner-img'>
            <img src={images.banner} width={310} height={320}/>
     
        </div>
        </div>
    </div>
  )
}

export default Banner