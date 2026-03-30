import React from 'react'
import AppDevelopmentHero from '../../Component/AppDevelopmentHero/AppDevelopmentHero'
import AppDevlopmentAbout from '../../Component/AppDevlopmentAbout/AppDevlopmentAbout'
import AppDevlopmentOurService from '../../Component/AppDevlopmentOurService/AppDevlopmentOurService'
import AppdevlopmentBreadcrum from '../../Component/AppdevlopmentBreadcrum/AppdevlopmentBreadcrum'

const AppDevlopement = () => {
  return (
    <div>
      <AppdevlopmentBreadcrum/>
      <AppDevelopmentHero />
      <AppDevlopmentAbout />
      <AppDevlopmentOurService />
    </div>
  )
}

export default AppDevlopement
