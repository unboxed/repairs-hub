import React from 'react'
import { render } from '@testing-library/react'
import PropertyDetails from './PropertyDetails'

describe('PropertyDetails component', () => {
  const props = {
    property: {
      "propertyReference": "00023404",
      "address": {
        "shortAddress": "16 Pitcairn House  St Thomass Square",
        "postalCode": "E9 6PT"
      },
      "hierarchyType": {
        "levelCode": "7",
        "subTypeCode": "DWE",
        "subTypeDescription": "Dwelling"
      }
    }
  }
  it('should render properly', () => {
    const { asFragment } = render(<PropertyDetails
                                    propertyReference={props.property.propertyReference}
                                    address={props.property.address}
                                    hierarchyType={props.property.hierarchyType}
                                  />)
    expect(asFragment()).toMatchSnapshot()
  })
})
