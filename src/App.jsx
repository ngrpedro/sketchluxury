import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import ContactUs from "./sections/ContactUs"
import Hero from "./sections/Hero"
import Partners from "./sections/Partners"
import Services from "./sections/Services"
import Testionails from "./sections/Testionails"
import Texts from "./sections/Texts"


function App() {

  return (
    <div className=''>
      <NavBar />
      <Hero />
      <Partners />
      <Services />
      <Texts />
      <Testionails />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default App
