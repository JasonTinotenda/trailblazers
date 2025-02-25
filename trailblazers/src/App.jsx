
import './App.css'
import Header from './components/header.jsx'
import Hero from './components/hero.jsx'
import Blog from './components/blog_feature.jsx'
import Gallery from './components/gallery.jsx'
import Testimonies from './components/testimonies.jsx'
import AboutUs from './components/aboutus.jsx'
import Features from './components/features.jsx'
import BulletinBoard from './components/bulletin_board.jsx'

function App() {
  return (
    <>
     <Header/>
     <Hero/>
     <AboutUs/>
     <Features/>
     <Gallery/>
     <Blog/>
     <Testimonies/>  
     <BulletinBoard/>   
    </>
  )
}

export default App
