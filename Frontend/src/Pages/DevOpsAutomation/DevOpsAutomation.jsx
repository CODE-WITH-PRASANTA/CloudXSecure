import React from 'react'
import Devopshero from '../../Components/Devopshero/Devopshero'
import DevopsAbout from '../../Components/DevopsAbout/DevopsAbout'
import DevopsServices from '../../Components/DevopsServices/DevopsServices'
import DevopsFeaturedWork from '../../Components/DevopsFeaturedWork/DevopsFeaturedWork'
import DevopsSkills from '../../Components/DevopsSkills/DevopsSkills'
import DevopsTestimonial from '../../Components/DevopsTestimonial/DevopsTestimonial'
import DevopsTeam from '../../Components/DevopsTeam/DevopsTeam'
import DevopsFAQ from '../../Components/DevopsFAQ/DevopsFAQ'
const DevOpsAutomation = () => {
  return (
    <div>
      <Devopshero/>
      <DevopsAbout/>
      <DevopsServices/>
      <DevopsFeaturedWork/>
      <DevopsSkills/>
      <DevopsTestimonial/>
      <DevopsTeam/>
      <DevopsFAQ/>
    </div>
  )
}

export default DevOpsAutomation
