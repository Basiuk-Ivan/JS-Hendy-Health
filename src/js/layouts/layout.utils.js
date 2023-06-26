import dashboard from '../../assets/images/sidebarIcons/sidebar-dashbord.svg'
import appointments from '../../assets/images/sidebarIcons/sidebar-appointments.svg'
import doctors from '../../assets/images/sidebarIcons/sidebar-doctors.svg'
import patient from '../../assets/images/sidebarIcons/sidebar-patient.svg'
import message from '../../assets/images/sidebarIcons/sidebar-support.svg'
import settings from '../../assets/images/sidebarIcons/sidebar-support.svg'

export const sidebarList = [
  {
    name: 'Dashboard',
    path: dashboard,
  },
  {
    name: 'Appointments',
    path: appointments,
  },
  {
    name: 'Doctors',
    path: doctors,
  },
  {
    name: 'Patient',
    path: patient,
  },
]

export const sidebarListSupport = [
  {
    name: 'Messages',
    path: message,
  },
  {
    name: 'Settings',
    path: settings,
  },
]
