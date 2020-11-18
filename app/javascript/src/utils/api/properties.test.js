import React from 'react'
import { getProperties, getProperty } from './properties'
import mockAxios from './__mocks__/axios'

const propertiesEndpointURL = "http://localhost:3000/api/v1/properties/"

describe('getProperties', () => {
  it('fetches successfully data from an API', async () => {
    const properties = [
      {
        "propertyReference": "00012345",
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
        "propertyReference": "00012346",
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
    ]

    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: properties
      })
    )

    const response = await getProperties('E9 6PT')

    expect(response).toEqual(properties)
    expect(mockAxios.get).toHaveBeenCalledTimes(1)
    expect(mockAxios.get).toHaveBeenCalledWith(
      `${propertiesEndpointURL}?q=E9 6PT`
    )
  })
})

describe('getProperty', () => {
  it('fetches successfully data from an API', async () => {
    const property = {
      "propertyReference": "00012345",
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

    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: property
      })
    )

    const response = await getProperty('00012345')

    expect(response).toEqual(property)
    expect(mockAxios.get).toHaveBeenCalledTimes(1)
    expect(mockAxios.get).toHaveBeenCalledWith(
      `${propertiesEndpointURL}00012345`
    )
  })
})
