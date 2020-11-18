import React from 'react'
import { render } from '@testing-library/react'
import PropertiesTable from './PropertiesTable'

describe('PropertiesTable component', () => {
  const props = {
    properties: [
      {
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
      },
      {
        "propertyReference": "00023389",
        "address": {
          "shortAddress": "1 Pitcairn House  St Thomass Square",
          "postalCode": "E9 6PT"
        },
        "hierarchyType": {
          "levelCode": "7",
          "subTypeCode": "DWE",
          "subTypeDescription": "Dwelling"
        }
      }
    ],
  }
  it('should render properly', () => {
    const { asFragment } = render(<PropertiesTable {...props} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
