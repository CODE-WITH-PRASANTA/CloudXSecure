import React from 'react'
import WebdevelopementServiceHeroScn from '../../Component/WebdevelopementServiceHeroScn/WebdevelopementServiceHeroScn'
import AboutSection from '../../Component/AboutSection/AboutSection'
import ServicesThree from '../../Component/ServicesThree/ServicesThree'
import CounterStrip from '../../Component/CounterStrip/CounterStrip'
import WhyChooseUsThree from '../../Component/WhyChooseUsThree/WhyChooseUsThree'
import FeatureOne from '../../Component/FeatureOne/FeatureOne'
import WebdevProject from '../../Component/WebdevProject/WebdevProject'

import ContactThree from '../../Component/ContactThree/ContactThree'
import BrandTrustBar from '../../Component/BrandTrustBar/BrandTrustBar'
import TeamCarousel from '../../Component/TeamCarousel/TeamCarousel'
import PricingSection from '../../Component/PricingSection/PricingSection'
import WebdevelopmentBreadcrum from '../../Component/WebdevelopmentBreadcrum/WebdevelopmentBreadcrum'
import Testimonials from '../../Component/Testimonials/Testimonials'

const WebDevlopement = () => {
  return (
    <div>
      <WebdevelopmentBreadcrum/>
      <WebdevelopementServiceHeroScn />
      <AboutSection />
      <ServicesThree />
      <CounterStrip />
      <WhyChooseUsThree />
      <FeatureOne />
      <WebdevProject />
     <Testimonials />
      <ContactThree />
      <BrandTrustBar />
      {/* <TeamCarousel /> */}
      <PricingSection />

    </div>
  )
}

export default WebDevlopement
