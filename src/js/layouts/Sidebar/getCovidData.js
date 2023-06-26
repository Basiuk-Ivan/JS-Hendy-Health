import ky from 'ky'

export const getCovidData = async () => {
  const data = await ky.get('https://disease.sh/v3/covid-19/all').json()

  return data
}
