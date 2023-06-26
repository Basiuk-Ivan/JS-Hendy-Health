import kit from '/src/assets/images/dashboard/kit.svg'
import patient from '/src/assets/images/dashboard/patient.svg'
import closeApp from '../../../assets/images/dashboard/closeAppoint.svg'
import doctors from '../../../assets/images/dashboard/doctors.svg'

import { getLocalData } from '../../modules/localData'
import { valueDoctors } from '../../modules/setLabelValue'

const localData = getLocalData()

const localDataLength = localData.length
const valueDoctorsLength = valueDoctors.length

export const boardHeaderContent = [
  { text: 'All Appointments', className: 'appointments', path: kit, value: localDataLength || '0' },
  {
    text: 'Closed Appointments',
    className: 'close-appointments',
    path: closeApp,
    value: localDataLength || '0',
  },
  { text: 'Patients', className: 'patients', path: patient, value: localDataLength || '0' },
  { text: 'Our Doctors', className: 'doctors', path: doctors, value: valueDoctorsLength },
]

export const tableHeaders = ['Name', 'Department', 'Doctor', 'Tel', 'Priority', 'Status', 'Actions']
export const priorityFilterLabels = ['High', 'Normal', 'Low']
export const departmentFilterLabels = ['Cardiology', 'Dentistry', 'Therapy']
export const statusFilterLabels = ['Opened', 'Closed']
