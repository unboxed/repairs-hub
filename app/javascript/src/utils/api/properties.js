import axios from 'axios'

// const { ENDPOINT_API } = process.env

const response = [
  {
    "propertyReference": "00014884",
    "address": {
      "shortAddress": "311 Banister House  Homerton High Street",
      "postalCode": "E9 6BT",
      "addressLine": "311 Banister House",
      "streetSuffix": "Homerton High Street"
    },
    "hierarchyType": {
      "levelCode": "7",
      "subTypeCode": "DWE",
      "subTypeDescription": "Dwelling"
      }
    },
  {
    "propertyReference": "00014885",
    "address": {
      "shortAddress": "312 Banister House  Homerton High Street",
      "postalCode": "E9 6BT",
      "addressLine": "312 Banister House",
      "streetSuffix": "Homerton High Street"
    },
    "hierarchyType": {
      "levelCode": "7",
      "subTypeCode": "DWE",
      "subTypeDescription": "Dwelling"
    }
  },
  {
    "propertyReference": "00014886",
    "address": {
      "shortAddress": "313 Banister House  Homerton High Street",
      "postalCode": "E9 6BT",
      "addressLine": "313 Banister House",
      "streetSuffix": "Homerton High Street"
    },
    "hierarchyType": {
      "levelCode": "7",
      "subTypeCode": "DWE",
      "subTypeDescription": "Dwelling"
    }
  },
  {
    "propertyReference": "00014887",
    "address": {
      "shortAddress": "314 Banister House  Homerton High Street",
      "postalCode": "E9 6BT",
      "addressLine": "314 Banister House",
      "streetSuffix": "Homerton High Street"
    },
    "hierarchyType": {
      "levelCode": "7",
      "subTypeCode": "DWE",
      "subTypeDescription": "Dwelling"
    }
  },
  {
    "propertyReference": "00014888",
    "address": {
      "shortAddress": "315 Banister House  Homerton High Street",
      "postalCode": "E9 6BT",
      "addressLine": "315 Banister House",
      "streetSuffix": "Homerton High Street"
    },
    "hierarchyType": {
      "levelCode": "7",
      "subTypeCode": "DWE",
      "subTypeDescription": "Dwelling"
    }
  },
  {
    "propertyReference": "00014889",
    "address": {
      "shortAddress": "316 Banister House  Homerton High Street",
      "postalCode": "E9 6BT",
      "addressLine": "316 Banister House",
      "streetSuffix": "Homerton High Street"
    },
    "hierarchyType": {
      "levelCode": "7",
      "subTypeCode": "DWE",
      "subTypeDescription": "Dwelling"
    }
  },
  {
    "propertyReference": "00014890",
     "address": {
      "shortAddress": "317 Banister House  Homerton High Street",
      "postalCode": "E9 6BT",
      "addressLine": "317 Banister House",
      "streetSuffix": "Homerton High Street"
    },
    "hierarchyType": {
      "levelCode": "7",
      "subTypeCode": "DWE",
      "subTypeDescription": "Dwelling"
    }
  },
  {
    "propertyReference": "00014891",
    "address": {
      "shortAddress": "318 Banister House  Homerton High Street",
      "postalCode": "E9 6BT",
      "addressLine": "318 Banister House",
      "streetSuffix": "Homerton High Street"
    },
    "hierarchyType": {
      "levelCode": "7",
      "subTypeCode": "DWE",
      "subTypeDescription": "Dwelling"
    }
  },
  {
    "propertyReference": "00014892",
    "address": {
      "shortAddress": "319 Banister House  Homerton High Street",
      "postalCode": "E9 6BT",
      "addressLine": "319 Banister House",
      "streetSuffix": "Homerton High Street"
    },
    "hierarchyType": {
      "levelCode": "7",
      "subTypeCode": "DWE",
      "subTypeDescription": "Dwelling"
    }
  },
  {
    "propertyReference": "00014893",
    "address": {
      "shortAddress": "320 Banister House  Homerton High Street",
      "postalCode": "E9 6BT",
      "addressLine": "320 Banister House",
      "streetSuffix": "Homerton High Street"
    },
    "hierarchyType": {
      "levelCode": "7",
      "subTypeCode": "DWE",
      "subTypeDescription": "Dwelling"
    }
  },
  {
    "propertyReference": "00014894",
    "address": {
      "shortAddress": "321 Banister House  Homerton High Street",
      "postalCode": "E9 6BT",
      "addressLine": "321 Banister House",
      "streetSuffix": "Homerton High Street"
    },
    "hierarchyType": {
      "levelCode": "7",
      "subTypeCode": "DWE",
      "subTypeDescription": "Dwelling"
    }
  },
  {
    "propertyReference": "00014895",
    "address": {
      "shortAddress": "322 Banister House  Homerton High Street",
      "postalCode": "E9 6BT",
      "addressLine": "322 Banister House",
      "streetSuffix": "Homerton High Street"
    },
    "hierarchyType": {
      "levelCode": "7",
      "subTypeCode": "DWE",
      "subTypeDescription": "Dwelling"
    }
  },
  {
    "propertyReference": "00014896",
    "address": {
      "shortAddress": "323 Banister House  Homerton High Street",
      "postalCode": "E9 6BT",
      "addressLine": "323 Banister House",
      "streetSuffix": "Homerton High Street"
    },
      "hierarchyType": {
      "levelCode": "7",
      "subTypeCode": "DWE",
      "subTypeDescription": "Dwelling"
    }
  },
  {
    "propertyReference": "00014897",
    "address": {
      "shortAddress": "324 Banister House  Homerton High Street",
      "postalCode": "E9 6BT",
      "addressLine": "324 Banister House",
      "streetSuffix": "Homerton High Street"
    },
    "hierarchyType": {
      "levelCode": "7",
      "subTypeCode": "DWE",
      "subTypeDescription": "Dwelling"
    }
  },
  {
    "propertyReference": "00014898",
    "address": {
      "shortAddress": "325 Banister House  Homerton High Street",
      "postalCode": "E9 6BT",
      "addressLine": "325 Banister House",
      "streetSuffix": "Homerton High Street"
    },
    "hierarchyType": {
      "levelCode": "7",
      "subTypeCode": "DWE",
      "subTypeDescription": "Dwelling"
    }
  },
  {
    "propertyReference": "00014899",
    "address": {
      "shortAddress": "326 Banister House  Homerton High Street",
      "postalCode": "E9 6BT",
      "addressLine": "326 Banister House",
      "streetSuffix": "Homerton High Street"
    },
    "hierarchyType": {
      "levelCode": "7",
      "subTypeCode": "DWE",
      "subTypeDescription": "Dwelling"
    }
  },
  {
    "propertyReference": "00014900",
    "address": {
      "shortAddress": "327 Banister House  Homerton High Street",
      "postalCode": "E9 6BT",
      "addressLine": "327 Banister House",
      "streetSuffix": "Homerton High Street"
    },
    "hierarchyType": {
      "levelCode": "7",
      "subTypeCode": "DWE",
      "subTypeDescription": "Dwelling"
    }
  },
  {
  "propertyReference": "00014901",
    "address": {
      "shortAddress": "328 Banister House  Homerton High Street",
      "postalCode": "E9 6BT",
      "addressLine": "328 Banister House",
      "streetSuffix": "Homerton High Street"
    },
    "hierarchyType": {
      "levelCode": "7",
      "subTypeCode": "DWE",
      "subTypeDescription": "Dwelling"
    }
  },
  {
    "propertyReference": "00014902",
    "address": {
      "shortAddress": "329 Banister House  Homerton High Street",
      "postalCode": "E9 6BT",
      "addressLine": "329 Banister House",
      "streetSuffix": "Homerton High Street"
    },
    "hierarchyType": {
      "levelCode": "7",
      "subTypeCode": "DWE",
      "subTypeDescription": "Dwelling"
    }
  },
  {
    "propertyReference": "00014903",
    "address": {
      "shortAddress": "330 Banister House  Homerton High Street",
      "postalCode": "E9 6BT",
      "addressLine": "330 Banister House",
      "streetSuffix": "Homerton High Street"
    },
    "hierarchyType": {
      "levelCode": "7",
      "subTypeCode": "DWE",
      "subTypeDescription": "Dwelling"
    }
  },
  {
    "propertyReference": "00014904",
    "address": {
      "shortAddress": "331 Banister House  Homerton High Street",
      "postalCode": "E9 6BT",
      "addressLine": "331 Banister House",
      "streetSuffix": "Homerton High Street"
    },
    "hierarchyType": {
      "levelCode": "7",
      "subTypeCode": "DWE",
      "subTypeDescription": "Dwelling"
    }
  },
  {
    "propertyReference": "00014905",
    "address": {
      "shortAddress": "332 Banister House  Homerton High Street",
      "postalCode": "E9 6BT",
      "addressLine": "332 Banister House",
      "streetSuffix": "Homerton High Street"
    },
    "hierarchyType": {
      "levelCode": "7",
      "subTypeCode": "DWE",
      "subTypeDescription": "Dwelling"
    }
  },
  {
    "propertyReference": "00014906",
    "address": {
      "shortAddress": "333 Banister House  Homerton High Street",
      "postalCode": "E9 6BT",
      "addressLine": "333 Banister House",
      "streetSuffix": "Homerton High Street"
    },
    "hierarchyType": {
      "levelCode": "7",
      "subTypeCode": "DWE",
      "subTypeDescription": "Dwelling"
    }
  },
  {
    "propertyReference": "00014907",
    "address": {
      "shortAddress": "334 Banister House  Homerton High Street",
      "postalCode": "E9 6BT",
      "addressLine": "334 Banister House",
      "streetSuffix": "Homerton High Street"
    },
    "hierarchyType": {
      "levelCode": "7",
      "subTypeCode": "DWE",
      "subTypeDescription": "Dwelling"
    }
  },
  {
    "propertyReference": "00014908",
    "address": {
      "shortAddress": "335 Banister House  Homerton High Street",
      "postalCode": "E9 6BT",
      "addressLine": "335 Banister House",
      "streetSuffix": "Homerton High Street"
    },
    "hierarchyType": {
      "levelCode": "7",
      "subTypeCode": "DWE",
      "subTypeDescription": "Dwelling"
    }
  },
  {
    "propertyReference": "00014909",
    "address": {
    "shortAddress": "336 Banister House  Homerton High Street",
      "postalCode": "E9 6BT",
      "addressLine": "336 Banister House",
      "streetSuffix": "Homerton High Street"
    },
    "hierarchyType": {
      "levelCode": "7",
      "subTypeCode": "DWE",
      "subTypeDescription": "Dwelling"
    }
  },
  {
    "propertyReference": "00014910",
    "address": {
      "shortAddress": "337 Banister House  Homerton High Street",
      "postalCode": "E9 6BT",
      "addressLine": "337 Banister House",
      "streetSuffix": "Homerton High Street"
    },
    "hierarchyType": {
      "levelCode": "7",
      "subTypeCode": "DWE",
      "subTypeDescription": "Dwelling"
    }
  },
  {
    "propertyReference": "00014911",
    "address": {
    "shortAddress": "338 Banister House  Homerton High Street",
    "postalCode": "E9 6BT",
    "addressLine": "338 Banister House",
    "streetSuffix": "Homerton High Street"
    },
    "hierarchyType": {
    "levelCode": "7",
    "subTypeCode": "DWE",
    "subTypeDescription": "Dwelling"
    }
    },
    {
    "propertyReference": "00014912",
    "address": {
    "shortAddress": "339 Banister House  Homerton High Street",
    "postalCode": "E9 6BT",
    "addressLine": "339 Banister House",
    "streetSuffix": "Homerton High Street"
    },
    "hierarchyType": {
    "levelCode": "7",
    "subTypeCode": "DWE",
    "subTypeDescription": "Dwelling"
    }
    },
    {
    "propertyReference": "00014913",
    "address": {
    "shortAddress": "340 Banister House  Homerton High Street",
    "postalCode": "E9 6BT",
    "addressLine": "340 Banister House",
    "streetSuffix": "Homerton High Street"
    },
    "hierarchyType": {
    "levelCode": "7",
    "subTypeCode": "DWE",
    "subTypeDescription": "Dwelling"
    }
    },
    {
    "propertyReference": "00014914",
    "address": {
    "shortAddress": "341 Banister House  Homerton High Street",
    "postalCode": "E9 6BT",
    "addressLine": "341 Banister House",
    "streetSuffix": "Homerton High Street"
    },
    "hierarchyType": {
    "levelCode": "7",
    "subTypeCode": "DWE",
    "subTypeDescription": "Dwelling"
    }
    },
    {
    "propertyReference": "00014915",
    "address": {
    "shortAddress": "342 Banister House  Homerton High Street",
    "postalCode": "E9 6BT",
    "addressLine": "342 Banister House",
    "streetSuffix": "Homerton High Street"
    },
    "hierarchyType": {
    "levelCode": "7",
    "subTypeCode": "DWE",
    "subTypeDescription": "Dwelling"
    }
    },
    {
    "propertyReference": "00014916",
    "address": {
    "shortAddress": "343 Banister House  Homerton High Street",
    "postalCode": "E9 6BT",
    "addressLine": "343 Banister House",
    "streetSuffix": "Homerton High Street"
    },
    "hierarchyType": {
    "levelCode": "7",
    "subTypeCode": "DWE",
    "subTypeDescription": "Dwelling"
    }
    },
    {
    "propertyReference": "00014917",
    "address": {
    "shortAddress": "344 Banister House  Homerton High Street",
    "postalCode": "E9 6BT",
    "addressLine": "344 Banister House",
    "streetSuffix": "Homerton High Street"
    },
    "hierarchyType": {
    "levelCode": "7",
    "subTypeCode": "DWE",
    "subTypeDescription": "Dwelling"
    }
    },
    {
    "propertyReference": "00014918",
    "address": {
    "shortAddress": "345 Banister House  Homerton High Street",
    "postalCode": "E9 6BT",
    "addressLine": "345 Banister House",
    "streetSuffix": "Homerton High Street"
    },
    "hierarchyType": {
    "levelCode": "7",
    "subTypeCode": "DWE",
    "subTypeDescription": "Dwelling"
    }
    },
    {
    "propertyReference": "00014919",
    "address": {
    "shortAddress": "346 Banister House  Homerton High Street",
    "postalCode": "E9 6BT",
    "addressLine": "346 Banister House",
    "streetSuffix": "Homerton High Street"
    },
    "hierarchyType": {
    "levelCode": "7",
    "subTypeCode": "DWE",
    "subTypeDescription": "Dwelling"
    }
    },
    {
    "propertyReference": "00014920",
    "address": {
    "shortAddress": "347 Banister House  Homerton High Street",
    "postalCode": "E9 6BT",
    "addressLine": "347 Banister House",
    "streetSuffix": "Homerton High Street"
    },
    "hierarchyType": {
    "levelCode": "7",
    "subTypeCode": "DWE",
    "subTypeDescription": "Dwelling"
    }
    },
    {
    "propertyReference": "00014921",
    "address": {
    "shortAddress": "348 Banister House  Homerton High Street",
    "postalCode": "E9 6BT",
    "addressLine": "348 Banister House",
    "streetSuffix": "Homerton High Street"
    },
    "hierarchyType": {
    "levelCode": "7",
    "subTypeCode": "DWE",
    "subTypeDescription": "Dwelling"
    }
    },
    {
    "propertyReference": "00014922",
    "address": {
    "shortAddress": "349 Banister House  Homerton High Street",
    "postalCode": "E9 6BT",
    "addressLine": "349 Banister House",
    "streetSuffix": "Homerton High Street"
    },
    "hierarchyType": {
    "levelCode": "7",
    "subTypeCode": "DWE",
    "subTypeDescription": "Dwelling"
    }
    },
    {
    "propertyReference": "00014923",
    "address": {
    "shortAddress": "350 Banister House  Homerton High Street",
    "postalCode": "E9 6BT",
    "addressLine": "350 Banister House",
    "streetSuffix": "Homerton High Street"
    },
    "hierarchyType": {
    "levelCode": "7",
    "subTypeCode": "DWE",
    "subTypeDescription": "Dwelling"
    }
    },
    {
    "propertyReference": "00014924",
    "address": {
    "shortAddress": "351 Banister House  Homerton High Street",
    "postalCode": "E9 6BT",
    "addressLine": "351 Banister House",
    "streetSuffix": "Homerton High Street"
    },
    "hierarchyType": {
    "levelCode": "7",
    "subTypeCode": "DWE",
    "subTypeDescription": "Dwelling"
    }
    },
    {
    "propertyReference": "00014925",
    "address": {
    "shortAddress": "352 Banister House  Homerton High Street",
    "postalCode": "E9 6BT",
    "addressLine": "352 Banister House",
    "streetSuffix": "Homerton High Street"
    },
    "hierarchyType": {
    "levelCode": "7",
    "subTypeCode": "DWE",
    "subTypeDescription": "Dwelling"
    }
    },
    {
    "propertyReference": "00014926",
    "address": {
    "shortAddress": "353 Banister House  Homerton High Street",
    "postalCode": "E9 6BT",
    "addressLine": "353 Banister House",
    "streetSuffix": "Homerton High Street"
    },
    "hierarchyType": {
    "levelCode": "7",
    "subTypeCode": "DWE",
    "subTypeDescription": "Dwelling"
    }
    },
    {
    "propertyReference": "00014927",
    "address": {
    "shortAddress": "354 Banister House  Homerton High Street",
    "postalCode": "E9 6BT",
    "addressLine": "354 Banister House",
    "streetSuffix": "Homerton High Street"
    },
    "hierarchyType": {
    "levelCode": "7",
    "subTypeCode": "DWE",
    "subTypeDescription": "Dwelling"
    }
    },
    {
    "propertyReference": "00014928",
    "address": {
    "shortAddress": "355 Banister House  Homerton High Street",
    "postalCode": "E9 6BT",
    "addressLine": "355 Banister House",
    "streetSuffix": "Homerton High Street"
    },
    "hierarchyType": {
    "levelCode": "7",
    "subTypeCode": "DWE",
    "subTypeDescription": "Dwelling"
    }
    },
    {
    "propertyReference": "00014929",
    "address": {
    "shortAddress": "356 Banister House  Homerton High Street",
    "postalCode": "E9 6BT",
    "addressLine": "356 Banister House",
    "streetSuffix": "Homerton High Street"
    },
    "hierarchyType": {
    "levelCode": "7",
    "subTypeCode": "DWE",
    "subTypeDescription": "Dwelling"
    }
    },
    {
    "propertyReference": "00014930",
    "address": {
    "shortAddress": "357 Banister House  Homerton High Street",
    "postalCode": "E9 6BT",
    "addressLine": "357 Banister House",
    "streetSuffix": "Homerton High Street"
    },
    "hierarchyType": {
    "levelCode": "7",
    "subTypeCode": "DWE",
    "subTypeDescription": "Dwelling"
    }
    },
    {
    "propertyReference": "00014931",
    "address": {
    "shortAddress": "358 Banister House  Homerton High Street",
    "postalCode": "E9 6BT",
    "addressLine": "358 Banister House",
    "streetSuffix": "Homerton High Street"
    },
    "hierarchyType": {
    "levelCode": "7",
    "subTypeCode": "DWE",
    "subTypeDescription": "Dwelling"
    }
    },
    {
    "propertyReference": "00014932",
    "address": {
    "shortAddress": "359 Banister House  Homerton High Street",
    "postalCode": "E9 6BT",
    "addressLine": "359 Banister House",
    "streetSuffix": "Homerton High Street"
    },
    "hierarchyType": {
    "levelCode": "7",
    "subTypeCode": "DWE",
    "subTypeDescription": "Dwelling"
    }
    },
    {
    "propertyReference": "00014933",
    "address": {
    "shortAddress": "360 Banister House  Homerton High Street",
    "postalCode": "E9 6BT",
    "addressLine": "360 Banister House",
    "streetSuffix": "Homerton High Street"
    },
    "hierarchyType": {
    "levelCode": "7",
    "subTypeCode": "DWE",
    "subTypeDescription": "Dwelling"
    }
    },
    {
    "propertyReference": "00072708",
    "address": {
    "shortAddress": "Lift 4041 311-335 Banister House  Homerton High Street",
    "postalCode": "E9 6BT",
    "addressLine": "Lift 4041 311-335 Banister House",
    "streetSuffix": "Homerton High Street"
    },
    "hierarchyType": {
    "levelCode": "6",
    "subTypeCode": "LFT",
    "subTypeDescription": "Lift"
    }
    },
    {
    "propertyReference": "00072709",
    "address": {
    "shortAddress": "Lift 4042 336-360 Banister House  Homerton High Street",
    "postalCode": "E9 6BT",
    "addressLine": "Lift 4042 336-360 Banister House",
    "streetSuffix": "Homerton High Street"
    },
    "hierarchyType": {
    "levelCode": "6",
    "subTypeCode": "LFT",
    "subTypeDescription": "Lift"
    }
    },
    {
    "propertyReference": "00074496",
    "address": {
    "shortAddress": "311-335 Banister House  Homerton High Street",
    "postalCode": "E9 6BT",
    "addressLine": "311-335 Banister House",
    "streetSuffix": "Homerton High Street"
    },
    "hierarchyType": {
    "levelCode": "3",
    "subTypeCode": "LOR",
    "subTypeDescription": "Low Rise Block (2 storeys or less)"
    }
    },
    {
    "propertyReference": "00074497",
    "address": {
    "shortAddress": "336-360 Banister House  Homerton High Street",
    "postalCode": "E9 6BT",
    "addressLine": "336-360 Banister House",
    "streetSuffix": "Homerton High Street"
    },
    "hierarchyType": {
    "levelCode": "3",
    "subTypeCode": "LOR",
    "subTypeDescription": "Low Rise Block (2 storeys or less)"
    }
    },
    {
    "propertyReference": "100021048013",
    "address": {
    "shortAddress": "322 BANISTER HOUSE Homerton High Street",
    "postalCode": "E9 6BT",
    "addressLine": "322 BANISTER HOUSE Homerton High Street",
    "streetSuffix": ""
    },
    "hierarchyType": {
    "levelCode": "7",
    "subTypeCode": "DWE",
    "subTypeDescription": "Dwelling"
    }
    },
    {
    "propertyReference": "100021048015",
    "address": {
    "shortAddress": "324 Homerton High Street",
    "postalCode": "E9 6BT",
    "addressLine": "324 Homerton High Street",
    "streetSuffix": ""
    },
    "hierarchyType": {
    "levelCode": "7",
    "subTypeCode": "DWE",
    "subTypeDescription": "Dwelling"
    }
    },
    {
    "propertyReference": "100021048023",
    "address": {
    "shortAddress": "332 BANISTER HOUSE Homerton High Street",
    "postalCode": "E9 6BT",
    "addressLine": "332 BANISTER HOUSE Homerton High Street",
    "streetSuffix": ""
    },
    "hierarchyType": {
    "levelCode": "7",
    "subTypeCode": "DWE",
    "subTypeDescription": "Dwelling"
    }
    },
    {
    "propertyReference": "100021048044",
    "address": {
    "shortAddress": "FLAT 353 BANISTER HOUSE  Homerton High Street",
    "postalCode": "E9 6BT",
    "addressLine": "FLAT 353 BANISTER HOUSE",
    "streetSuffix": "Homerton High Street"
    },
    "hierarchyType": {
    "levelCode": "7",
    "subTypeCode": "DWE",
    "subTypeDescription": "Dwelling"
    }
  }
]

export const getProperties = async (params) => {
  // const { data } = await axios.get(
  //   `http://repairs-api-lb-preview-885057472.eu-west-2.elb.amazonaws.com/api/v1/properties/?q=${params}`
  // )

  return response
}

export const getProperty = async (propertyReference) => {
  // const { data } = await axios.get(
  //   `http://repairs-api-lb-preview-885057472.eu-west-2.elb.amazonaws.com/api/v1/properties/${propertyReference}`
  // )

  return response[0]
}
