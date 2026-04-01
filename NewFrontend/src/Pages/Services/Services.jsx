import React from 'react'
import ServicesCompany from '../../Component/ServicesCompany/ServicesCompany'
import ServicesMember from '../../Component/ServicesMember/ServicesMember'
import LatestBlog from '../../Component/LatestBlog/LatestBlog'
import ServicesBreadcrumb from '../../Component/ServicesBreadcrumb/ServicesBreadcrumb'

const Services = () => {
  return (
    <div>
        <ServicesBreadcrumb />
      <ServicesCompany />
      <ServicesMember />
      <LatestBlog />
    </div>
  )
}

export default Services
