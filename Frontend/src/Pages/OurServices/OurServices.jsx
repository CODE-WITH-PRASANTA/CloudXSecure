import React from 'react'
import OurServicesBreadcrum from '../../Components/OurServicesBreadcrum/OurServicesBreadcrum'
import MovingBanner from '../../Components/MovingBanner/MovingBanner'
import OurServicesServe from '../../Components/OurServicesServe/OurServicesServe'
import OurServicesVision from '../../Components/OurServicesVision/OurServicesVision'
import OurServicesConsult from '../../Components/OurServicesConsult/OurServicesConsult'
const OurService = () => {
  return (
    <div>
      <OurServicesBreadcrum/>
      <MovingBanner/>
      <OurServicesServe/>
      <OurServicesVision/>
      <OurServicesConsult/>
    </div>
  )
}

export default OurService
