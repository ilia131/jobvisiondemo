import Body from "./components/Body/Body"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import './Home.css'
import Banner from "./components/Banner/Banner"

const Home = () => {
  return (
     <div>
      <div className='home'>
        <Header/>
      
      
        <Body />     
       
      </div>
          <Footer />  
    </div>
  )
}

export default Home