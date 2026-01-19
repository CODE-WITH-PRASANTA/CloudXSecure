import React from 'react'
import Planbreadcrum from '../../Components/Planbreadcrum/Planbreadcrum'
import PlanSubscription from '../../Components/PlanSubscription/PlanSubscription'
import PlanUser from '../../Components/PlanUser/PlanUser'
import PlanBlogs from '../../Components/PlanBlogs/PlanBlogs'

const PlanAndPricing = () => {
  return (
    <div>
      <Planbreadcrum />
      <PlanSubscription />
      <PlanUser />
      <PlanBlogs />
    </div>
  )
}

export default PlanAndPricing
