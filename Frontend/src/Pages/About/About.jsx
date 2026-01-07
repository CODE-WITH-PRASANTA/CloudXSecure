import React from 'react'
import './About.css'
import AboutUsBreadcrum from '../../Components/AboutUsBreadcrum/AboutUsBreadcrum'
import AboutBestItSolution from '../../Components/AboutBestItSolution/AboutBestItSolution'
import AboutCompany from '../../Components/AboutCompany/AboutCompany'
import AboutOurMission from '../../Components/AboutOurMission/AboutOurMission'

const About = () => {
  return (
    <div>
            <AboutUsBreadcrum />
            <AboutBestItSolution />
            <AboutCompany />
            <AboutOurMission />
    </div>
  )
}

export default About