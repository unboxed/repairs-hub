import React from 'react'

const PropertyDetails = ({ propertyReference, address, hierarchyType }) => (
  <div>
    <h2>
      {hierarchyType.subTypeDescription}: {address.shortAddress}
    </h2>

    <div className="govuk-grid-row">
      <div className="govuk-grid-column-one-half">
        <p className="govuk-body-s">
          <span className="govuk-body-xs">
            Property details
          </span>
          <br></br>
          <span className="govuk-!-font-weight-bold">
            {address.shortAddress}
          </span>
          <br></br>
          <span className="govuk-body-xs">
            {address.postalCode}
          </span>
          <br></br>
        </p>
      </div>
    </div>
   </div>
)

export default PropertyDetails
