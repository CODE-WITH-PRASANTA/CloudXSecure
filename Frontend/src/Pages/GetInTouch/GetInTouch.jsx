import React from 'react'
import GetInTouchBreadcrum from '../../Components/GetInTouchBreadcrumb/GetInTouchBreadcrumb';
import RunningServices from "../../components/RunningServices/RunningServices";
import GetInTouchForm from "../../components/GetInTouchForm/GetInTouchForm";
import LocationMap from "../../components/LocationMap/LocationMap";
import CTASection from "../../components/CTASection/CTASection";
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