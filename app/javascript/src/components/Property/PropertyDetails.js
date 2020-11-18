import React from 'react'

const PropertyDetails = ({ propertyReference, address, hierarchyType }) => (
  <div>
    <h1 className="govuk-heading-l">
      {hierarchyType.subTypeDescription}: {address.shortAddress}
    </h1>

    <div className="govuk-grid-row">
      <div className="govuk-grid-column-one-half">
        <p className="govuk-body-s">
          <span className="govuk-body-xs">
            Property details
          </span>
          <br></br>
          <span className="govuk-!-font-weight-bold text-green">
            {address.shortAddress}
          </span>
          <br></br>
          <span className="govuk-body-xs text-green">
            {address.postalCode}
          </span>
          <br></br>
        </p>
      </div>
    </div>
   </div>
)

export default PropertyDetails
