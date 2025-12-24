import React from 'react'
import Subscribe from '../../Components/Subscribe/Subscribe'
import OurBlog from '../../Components/OurBlog/OurBlog'
import OurExpertTeam from '../../Components/OurExpertTeam/OurExpertTeam'
import Testimonials from '../../Components/Testimonials/Testimonials'
import BestITSolution from '../../Components/BestITSolution/BestITSolution'
import HowItsWork from '../../Components/HowItsWork/HowItsWork'
import OurServices from '../../Components/OurServices/OurServices'
import AboutEitechITSolution from '../../Components/AboutEitechITSolution/AboutEitechITSolution'
import HeroSection from '../../Components/HeroSection/HeroSection'
import Pricingplan from '../../Components/Pricingplan/Pricingplan'

const Home = () => {
  return (
    <>
    <HeroSection/>
    <AboutEitechITSolution/>
    <OurServices/>
    <BestITSolution/>
    <HowItsWork/>
    <Pricingplan/>
    <Testimonials/>
        <OurExpertTeam/>
        <OurBlog/>
       <Subscribe/> 
       
    </>
  )
}

export default Home