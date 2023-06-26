export const filterDataCharts = data => {
  const age = data.map(elem => +elem.age)
  const dataDepartment = data.map(elem => elem.department)

  const [before18, before50, before100] = [
    age.filter(item => item < 18),
    age.filter(item => item >= 18 && item <= 50),
    age.filter(item => item >= 51),
  ]
  const [dentist, therapist, cardiologist] = [
    dataDepartment.filter(item => item === 'Dentistry'),
    dataDepartment.filter(item => item === 'Therapy'),
    dataDepartment.filter(item => item === 'Cardiology'),
  ]

  const arrDataAge = [before100.length, before50.length, before18.length]
  const arrDataDepartment = [dentist.length, therapist.length, cardiologist.length]

  return [arrDataAge, arrDataDepartment]
}
