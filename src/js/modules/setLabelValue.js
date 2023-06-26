import { getLocalData } from './localData'
import { department } from '../utils'
import { find } from '../tools'

export const valueDoctors = department.reduce((acc, curr) => acc.concat(curr.doctor), [])

export const setLabelValue = () => {
  const localData = getLocalData()

  const appointments = find('.appointments')
  const patients = find('.patients')
  const closedAppointments = find('.close-appointments')

  const openedAppointmentsData = localData.map(elem => elem.status)
  const closeAppointmentsData = localData.map(elem => elem.status)

  const [openedPatients] = [openedAppointmentsData.filter(item => item === 'Opened')]
  const [closedPatients] = [closeAppointmentsData.filter(item => item === 'Closed')]

  appointments.innerHTML = localData.length
  patients.innerHTML = openedPatients.length
  closedAppointments.innerHTML = closedPatients.length
}
