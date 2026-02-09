import Navbar from '../components/Navbar'

import heroImg from '../assets/heroImg.jpg'

export const Home = () => {
  return <div className='min-h-screen'>
    <Navbar />

    <img src={heroImg} alt="Hero" className="w-full h-auto" />
    
  </div>
  
}
