import React, { useState } from 'react'
import PropertiesTable from '../Properties/PropertiesTable'
import Button from '../Form/Button/Button'
import { getProperties } from '../../utils/api/properties'

const Search = () => {
  const [searchParams, setSearchParams] = useState('')
  const [properties, setProperties] = useState([])
  const [loading, setLoading] = useState(false)

  async function searchForProperties() {
    setLoading(true)

    try {
      const data = await getProperties(searchParams)
      setProperties(data)
    } catch (e) {
      setProperties(null)
      console.log('An error has occured:', e)
    }

    setLoading(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    searchForProperties()
  }

  return (
    <div>
      <section className="section">
        <div className="govuk-form-group">
          <form>
            <label
              className="govuk-label">
              Search by postcode or address
            </label>
            <input
              type="text"
              className="govuk-input govuk-input--width-10"
              value={searchParams}
              onChange={event => setSearchParams(event.target.value)}
            />
            <Button type="submit" label="Search" onClick={handleSubmit} />
          </form>
        </div>
      </section>

      {loading ? (
        <div>Searching...</div>
      ) : (
        <>
          {properties?.length > 0 && <PropertiesTable properties={properties} />}
        </>
      )}
    </div>
  )
}

export default Search
