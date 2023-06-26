import { department } from '../../utils'
import { renderDepartment } from './renderDepartment'
import { renderDoctorsNames } from './renderDocotrName'
import { showDoctor } from './showDoctor'
import { modifyTitle } from './modifyTitle'
import { openDropdown } from './openDropdown'
import { find, findAll, checkValue } from '../../tools'

export const Dropdown = () => {
  const dropdown = findAll('.dropdown')
  const doctorTitle = find('.doctor-title')
  const modalImg = find('.modal-visit__img')

  renderDoctorsNames(department)

  dropdown.forEach(item => {
    const select = item.querySelector('.modal-visit__dropdown')
    const list = item.querySelector('.modal-visit__dropdown-list')
    const tab = item.getAttribute('data-name')

    renderDepartment(department, tab, list)

    openDropdown(item, list)

    list.addEventListener('click', e => {
      const dropdownError = findAll('.dropdown-error')

      dropdownError.forEach(item => item.remove())
      modifyTitle({ img: modalImg, target: e.target, select: select, title: doctorTitle })
      checkValue(select.value)
    })
  })
  showDoctor()
}
