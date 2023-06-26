import { request, renderNoDataImg } from '../tools'
import { setLocalData } from './localData'
import { Appointment } from '../classes'

export const getAllAppointments = async () => {
  const allAppointments = await request({ url: '', method: 'GET' })

  !allAppointments.length && renderNoDataImg('.table-list')

  allAppointments.forEach(obj => {
    const appointment = new Appointment(obj)

    appointment.addNewAppointment()
    setLocalData(obj)
  })
}
