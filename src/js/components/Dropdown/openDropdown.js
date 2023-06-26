export const openDropdown = (wrapper, list) => {
  wrapper.addEventListener('click', e => {
    const dropdownItem = e.target.querySelector('.modal-visit__dropdown-item')

    list.classList.toggle('menu-open')
    !!dropdownItem && list.classList.remove('menu-open')
  })
}
