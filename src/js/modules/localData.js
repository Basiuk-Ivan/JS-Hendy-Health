import { Appointment } from '../classes'
import { find, renderNoDataImg } from '../tools'
import { setLabelValue } from './setLabelValue'

let LOCAL_DATA = []

export const setLocalData = newData => {
  LOCAL_DATA.unshift(newData)
  fillTableList()
}

export const deleteLocalData = delItemId => {
  LOCAL_DATA = LOCAL_DATA.filter(item => item.id !== delItemId)
  fillTableList()
}

export const updateLocalDataStatus = updatedItemID => {
  LOCAL_DATA.find(localItem => localItem.id === updatedItemID).status = 'Closed'
  fillTableList()
}

export const updateLocalData = updateItem => {
  const updatedArray = LOCAL_DATA.filter(item => item.id !== updateItem.id)

  updatedArray.unshift(updateItem)

  LOCAL_DATA = updatedArray

  fillTableList()
}

export const getLocalData = () => LOCAL_DATA

export const fillTableList = () => {
  setLabelValue()

  const tableList = find('.table-list')

  tableList.innerHTML = ''

  if (LOCAL_DATA.length) {
    LOCAL_DATA.forEach(item => {
      const appointment = new Appointment(item)

      appointment.addNewAppointment()
    })
  } else {
    renderNoDataImg('.table-list')
  }
}
