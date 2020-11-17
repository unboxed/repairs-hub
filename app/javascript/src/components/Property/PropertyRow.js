import React from 'react'
import { Link } from 'react-router-dom'

const PropertyRow = ({ propertyReference, address, hierarchyType }) => (
  <tr className="govuk-table__row govuk-table__row--clickable">
    <td className="govuk-table__cell">{address.shortAddress}</td>
    <td className="govuk-table__cell">{address.postalCode}</td>
    <td className="govuk-table__cell">{hierarchyType.subTypeDescription}</td>

    <td className="govuk-table__cell">
      <Link to ={`/properties/${propertyReference}`} >{propertyReference}
      </Link>
    </td>

  </tr>
)

export default PropertyRow
