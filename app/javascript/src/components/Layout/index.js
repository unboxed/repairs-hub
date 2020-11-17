import React from 'react'
import HeaderComponent from './Header/Header'
import PhaseBanner from './PhaseBanner/PhaseBanner';

const Layout = ({ children }) => (
  <div>
    <HeaderComponent serviceName="Repairs Hub" />

    <div className="govuk-width-container">
      <main
        className="govuk-main-wrapper"
        id="content"
        role="main"
      >
        {children}
      </main>
      </div>
  </div>
)

export default Layout
