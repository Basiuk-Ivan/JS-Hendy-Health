import { find, findAll } from '../../tools'

export const showDoctor = () => {
  const depList = find('.dropDepartment')
  const depTitle = find('.department-title')
  const listItem = findAll('.doctor-item')

  depList.addEventListener('click', e => {
    const itemTabPost = e.target.getAttribute('data-post')

    sortItems(listItem, itemTabPost)
  })

  if (!!depTitle.value) {
    sortItems(listItem, depTitle.value)
  }
}

const sortItems = (listItem, value) => {
  listItem.forEach(item => {
    item.className.includes(value) ? (item.style.display = 'block') : (item.style.display = 'none')
  })
}
