import React from 'react'
import ManagedCloudBreadcrum from '../../Components/ManagedCloudBreadcrum/ManagedCloudBreadcrum'
import ManagedCloudSection from '../../Components/ManagedCloudSection/ManagedCloudSection'
import ManagedCloudApproach from '../../Components/ManagedCloudApproach/ManagedCloudApproach'
import ManagedCloudViewMore from '../../Components/ManagedCloudViewMore/ManagedCloudViewMore'
import ManagedCloudSubscribe from '../../Components/ManagedCloudSubscribe/ManagedCloudSubscribe'

const ManagedCloud = () => {
  return (
    <div>
      <ManagedCloudBreadcrum />
      <ManagedCloudSection />
      <ManagedCloudApproach />
      <ManagedCloudViewMore />
      <ManagedCloudSubscribe />
    </div>
  )
}

export default ManagedCloud
