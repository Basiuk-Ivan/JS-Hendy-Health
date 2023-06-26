export const strFinishCovid = oldStr => oldStr.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')

export const covidLocalData = {
  UAnewConfirmed: '132',
  UAConfirmed: '212.321',
  UADeaths: '332.131.212',
  worldNewConfirmed: '433.21',
  worldConfirmed: '432.435',
  worldDeaths: '643.214.234',
}
