import { renderComponent } from '../tools'
import { Dashboard, initFilters, initCharts } from '../components'
import { modalActions } from '../classes'
import { getAllAppointments } from './getAllAppointments'
import { searchOptions } from './searchOtpions'
import { changeBasicLayout } from './changeBasicLayout'
import { getLocalData } from './localData'

export const userLoggedIn = async () => {
  changeBasicLayout()
  renderComponent(Dashboard)
  searchOptions()
  modalActions()

  await getAllAppointments()
  const allData = getLocalData()

  initFilters()
  initCharts(allData)
}
