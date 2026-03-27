import React from 'react'
import Breadcrumb from '../../Component/Breadcrumb/Breadcrumb'
import AboutSolution from '../../Component/AboutSolution/AboutSolution'
import AboutProject from '../../Component/AboutProject/AboutProject'
import LatestBlog from '../../Component/LatestBlog/LatestBlog'
import AboutBestItSolution from '../../Component/AboutBestItSolution/AboutBestItSolution'
import AboutCompany from '../../Component/AboutCompany/AboutCompany'
import AboutOurMission from '../../Component/AboutOurMission/AboutOurMission'

const AboutUs = () => {
  return (
    <div>
      <Breadcrumb />
      <AboutSolution />
      <AboutProject />
       <LatestBlog /> 
       <AboutBestItSolution />
       <AboutCompany />
       <AboutOurMission />
    </div> 
  )
}

export default AboutUs
