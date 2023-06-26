import { create } from '../../tools'

export const renderDepartment = (department, tab, list) => {
  if (tab === 'Department') {
    department.forEach(({ department }) => {
      const li = create('li', 'modal-visit__dropdown-item', `${department}`)

      li.setAttribute('data-post', `${department}`)
      list.append(li)
    })
  }
}
