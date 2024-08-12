import Banner from "../Banner/Banner"
import Hero from "../Hero/Hero"
import Slider from "../Slider/Slider"
import UnderBanner from "../UnderBanner/UnderBanner"
import UnderHero from "../UnderHero/UnderHero"
import UnderSlider from "../UnderSlider/UnderSlider"
import UpperFooter from "../UpperFooter/UpperFooter"

const Body = () => {
  return (
    <div>
      <Hero />
      <UnderHero />
    
      <UnderSlider />
      <Slider /> 
  
      <Banner />
      <UnderBanner />
      <UpperFooter />  
    </div>
  )
}

export default Body