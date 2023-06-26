import { getLocalData } from '../../modules/localData'
import { checkValue } from '../../tools'

export const editAppointment = id => {
  const localData = getLocalData()
  const selectedAppointment = localData.find(item => item.id === id)
  const { department } = selectedAppointment

  checkValue(department, selectedAppointment, true, id)
}
