import React from 'react'
import AppDevelopmentHero from '../../Component/AppDevelopmentHero/AppDevelopmentHero'
import AppDevlopmentAbout from '../../Component/AppDevlopmentAbout/AppDevlopmentAbout'
import AppDevlopmentOurService from '../../Component/AppDevlopmentOurService/AppDevlopmentOurService'
import AppDevlopmentWhyChooseUs from '../../Component/AppDevlopmentWhyChooseUs/AppDevlopmentWhyChooseUs'
import AppDevlopmentWorkProcess from '../../Component/AppDevlopmentWorkProcess/AppDevlopmentWorkProcess'
import AppDevlopmentOurPortfolio from '../../Component/AppDevlopmentOurPortfolio/AppDevlopmentOurPortfolio'

const AppDevlopement = () => {
  return (
    <div>
      <AppDevelopmentHero />
      <AppDevlopmentAbout />
      <AppDevlopmentOurService />
      <AppDevlopmentWhyChooseUs />
      <AppDevlopmentWorkProcess />
      <AppDevlopmentOurPortfolio />
    </div>
  )
}

export default AppDevlopement
