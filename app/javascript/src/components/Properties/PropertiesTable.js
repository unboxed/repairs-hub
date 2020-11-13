import React from 'react'
import PropertyRow from '../Property/PropertyRow'

const PropertiesTable = ({ properties }) => (
  <div>
    <hr className="govuk-section-break govuk-section-break--l govuk-section-break--visible" />

    <table className="govuk-table">
      <caption className="govuk-table__caption">We found {properties.length} results</caption>
      <thead className="govuk-table__head">
        <tr className="govuk-table__row">
          <th scope="col" className="govuk-table__header">Address</th>
          <th scope="col" className="govuk-table__header">Postcode</th>
          <th scope="col" className="govuk-table__header">Property type</th>
          <th scope="col" className="govuk-table__header">Property reference</th>
        </tr>
      </thead>
      <tbody className="govuk-table__body">
        {properties.map((property, index) => (
          <PropertyRow key={index} {...property} />
        ))}
      </tbody>
    </table>
  </div>
)

export default PropertiesTable
