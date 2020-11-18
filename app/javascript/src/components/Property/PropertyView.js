import React, { useState, useEffect } from 'react'
import { getProperty } from '../../utils/api/properties'
import PropertyDetails from './PropertyDetails'

const PropertyView = (props) => {
  const [property, setProperty] = useState({})
  const [loading, setLoading] = useState(false)

  const getPropertyView = async (propertyReference) => {
    setLoading(false)

    try {
      const data = await getProperty(propertyReference)
      setProperty(data)
    } catch (e) {
      setProperty(null)
      console.log('An error has occured:', e)
    }
  }

  useEffect(() => {
    setLoading(true)
    const propertyReference = props.match.params.propertyReference

    getPropertyView(propertyReference)
  }, [])

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          {property && property.address && property.hierarchyType &&
            <PropertyDetails
              propertyReference={property.propertyReference}
              address={property.address}
              hierarchyType={property.hierarchyType}
            />
          }
        </>
      )}
    </>
  )
}

export default PropertyView
