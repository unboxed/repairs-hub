import React from 'react'
import { Header } from 'lbh-frontend-react'

const HeaderComponent = ({ serviceName }) => (
  <div>
    <Header
      serviceName={serviceName} isServiceNameShort={false} homepageUrl="/">
    </Header>
  </div>
);

export default HeaderComponent
