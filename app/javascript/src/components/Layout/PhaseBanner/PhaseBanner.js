import React from 'react'

const PhaseBanner = ({ phase }) => (
  <div className="govuk-phase-banner">
    <p className="govuk-phase-banner__content">
      <strong className="govuk-tag govuk-phase-banner__content__tag">
        {phase}
      </strong>
    </p>
  </div>
);

export default PhaseBanner
