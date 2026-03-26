import React from 'react'
import Services from '../../Component/Services/Services'
import BestITSolution from '../../Component/BestITSolution/BestITSolution'
import HowItsWork from '../../Component/HowItsWork/HowItsWork'
import PricingPlans from '../../Component/PricingPlans/PricingPlans'
import FaqSection from '../../Component/FaqSection/FaqSection'
import Testimonials from '../../Component/Testimonials/Testimonials'
import ContactSection from '../../Component/ContactSection/ContactSection'


const Home = () => {
  return (
    <div>
      <Services/>
      <BestITSolution/>
      <HowItsWork/>
      <PricingPlans/>
      <FaqSection/>
      <Testimonials/>
      <ContactSection/>
    </div>
  )
}

export default Home
