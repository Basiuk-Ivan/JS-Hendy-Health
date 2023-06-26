import { find } from '../../tools'
import { openDropdown } from './openDropdown'
import { modifyTitle } from './modifyTitle'

export const priorityDropdown = () => {
  const priorityWrapper = find('.priorities')
  const priorityTitle = find('.priority-title')
  const priorityList = find('.priority-list')

  openDropdown(priorityWrapper, priorityList)

  priorityList.addEventListener('click', e => {
    const dropdownOptions = { target: e.target, select: priorityTitle }

    modifyTitle(dropdownOptions)
  })
}
