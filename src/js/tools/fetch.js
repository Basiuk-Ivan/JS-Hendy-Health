import ky from 'ky'
import { API_URL } from '../utils'

export const request = async ({ url, method, body }) => {
  const prefixUrl = API_URL
  const token = localStorage.getItem('token')
  const headers = { Authorization: `Bearer ${token}` }
  const logOptions = { method: 'POST', prefixUrl, json: body }
  const OPTIONS = { method, prefixUrl, json: body, headers }

  try {
    return await (method === 'LOGIN' ? ky(url, logOptions).text() : ky(url, OPTIONS).json())
  } catch (err) {
    console.log(err.message)
  }
}
