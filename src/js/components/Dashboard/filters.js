import filterIcon from '../../../assets/images/dashboard/filterIcon.svg'
import refIcon from '../../../assets/images/dashboard/rotate.svg'

import { find, findAll, createEl } from '../../tools'
import { departmentFilterLabels, priorityFilterLabels, statusFilterLabels } from './dashboard.utils'

const filterOptions = e => {
  const appointments = findAll('.appointment')
  const selectedItem = e.target.textContent

  appointments.forEach(item => {
    const requiredDepartment = item.children[1].textContent
    const requiredPriority = item.children[4].textContent
    const requiredStatus = item.children[5].textContent
    const isCoincidence =
      selectedItem === requiredDepartment ||
      selectedItem === requiredPriority ||
      selectedItem === requiredStatus

    !isCoincidence ? (item.style.display = 'none') : (item.style.display = 'flex')
  })
}
const createRefreshIcon = () => {
  const listItems = findAll('.appointment')
  const refreshWrapper = find('.actions')
  const refreshIcon = createEl({
    el: 'img',
    css: 'refresh-icon',
    src: refIcon,
    alt: 'Refresh icon',
    title: 'Refresh List',
  })

  refreshIcon.addEventListener('click', () => listItems.forEach(item => (item.style.display = 'flex')))

  refreshWrapper.append(refreshIcon)
}

const createFilter = (parentElement, textContent) => {
  const priorityContainer = find(parentElement)
  const priorityIcon = createEl({ el: 'img', css: 'filter-icon', src: filterIcon, alt: 'Filter icon' })
  const dropdownWrapper = createEl({ el: 'div', css: 'filter-wrapper' })

  const dropdownItems = textContent.map(item => createEl({ el: 'span', css: 'drop-item', text: item }))

  dropdownWrapper.append(...dropdownItems)
  priorityContainer.append(priorityIcon, dropdownWrapper)

  dropdownWrapper.addEventListener('click', e => filterOptions(e))
}

export const initFilters = () => {
  createRefreshIcon()
  createFilter('.priority', priorityFilterLabels)
  createFilter('.department', departmentFilterLabels)
  createFilter('.status', statusFilterLabels)
}
