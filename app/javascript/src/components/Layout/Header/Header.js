import React from 'react'
import { Header } from 'lbh-frontend-react'
import PhaseBanner from '../PhaseBanner/PhaseBanner'

const HeaderComponent = ({ serviceName }) => (
  <div>
    <Header
      serviceName={serviceName} isServiceNameShort={false} homepageUrl="/">
      <PhaseBanner phase="beta" />
    </Header>
  </div>
);

export default HeaderComponent;
