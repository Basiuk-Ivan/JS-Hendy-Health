import { create, find } from '../../tools'

export const renderDoctorsNames = department => {
  const doctorList = find('.doctor-list')

  department.forEach(({ department, doctor }) => {
    doctor.forEach(value => {
      const li = create('li', 'modal-visit__dropdown-item', value)

      li.classList.add('doctor-item', `${department}`)
      doctorList.append(li)
    })
  })
}
