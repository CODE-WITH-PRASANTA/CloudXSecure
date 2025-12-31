import React from 'react'
import ServicesBreadcrum from '../../Components/ServicesBreadcrum/ServicesBreadcrum'
import ServicesSection from '../../Components/ServicesSection/ServicesSection'
import ServicesMission from '../../Components/ServicesMission/ServicesMission'
import  ServicesSubscribe from '../../Components/ServicesSubscribe/ServicesSubscribe'

const Services = () => {
  return (
    <div>
      <ServicesBreadcrum />
      <ServicesSection />
      <ServicesMission />
      <ServicesSubscribe />
    </div>
  )
}

export default Services
