import React from 'react'
import GetInTouchBreadcrum from '../../Components/GetInTouchBreadcrumb/GetInTouchBreadcrumb';
import RunningServices from "../../Components/RunningServices/RunningServices";
import GetInTouchForm from "../../Components/GetInTouchForm/GetInTouchForm";
import LocationMap from "../../Components/LocationMap/LocationMap";
import CTASection from "../../Components/CTASection/CTASection";
const GetInTouch = () => {
  return (
    <div>
      <GetInTouchBreadcrum />
      <RunningServices />
      <GetInTouchForm />
      <LocationMap />
      <CTASection />
    </div>
  )
}

export default GetInTouch