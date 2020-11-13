import axios from 'axios'

export const getProperties = async (params) => {
  const { data } = await axios.get(
    `http://localhost:3000/api/v1/properties?q=${params}`
  )

  return data
}
