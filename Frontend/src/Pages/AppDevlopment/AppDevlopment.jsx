import React from 'react'
import AppDevelopmentHero from '../../Components/AppDevlopmentHero/AppDevelopmentHero'
import AppDevlopmentAbout from '../../Components/AppDevlopmentAbout/AppDevlopmentAbout'
import AppDevlopmentOurService from '../../Components/AppDevlopmentOurService/AppDevlopmentOurService'
import AppDevlopmentWhyChooseUs from '../../Components/AppDevlopmentWhyChooseUs/AppDevlopmentWhyChooseUs'
import AppDevlopmentWorkProcess from '../../Components/AppDevlopmentWorkProcess/AppDevlopmentWorkProcess'
import AppDevlopmentOurPortfolio from '../../Components/AppDevlopmentOurPortfolio/AppDevlopmentOurPortfolio'

const AppDevlopment = () => {
  return (
    <>
     <AppDevelopmentHero/>
     <AppDevlopmentAbout/>
     <AppDevlopmentOurService/>

     <AppDevlopmentWhyChooseUs/>
     
     <AppDevlopmentWorkProcess/>
     <AppDevlopmentOurPortfolio/>
    </>
  )
}

export default AppDevlopment
