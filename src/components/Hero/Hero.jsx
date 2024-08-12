import images from "../../assets"
import Style from './Hero.module.css'

const Hero = () => {
  return (
    <div className={Style.hero}>
      <div className={Style.hero_container}>
        <div className={Style.hero_img}>
            <img src={images.Heroimg} width={350} height={350}/>
        </div>
        <h1 className={Style.hero_text}>
             <div className={Style.hero_text_3}>
               <span className={Style.hero_text_span}>۴۵,۱۹۸</span>  <span>آگهی استخدام</span>  
                <br />
                <span className={Style.hero_text_span1}>
                       <span> در </span>
                       <span className={Style.hero_text_span}>
                        ۳۷۷ 
                       </span>
                     <span> شهر</span> 
                 </span>
             </div>
           </h1>
        </div>
    </div>
  )
}

export default Hero