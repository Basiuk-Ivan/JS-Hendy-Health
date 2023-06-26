import { find, findAll } from '../tools'

export const searchOptions = () => {
  const search = find('.search')

  search.oninput = () => {
    const appointCart = findAll('.appointment')
    const value = search.value.trim()

    if (value !== '') {
      appointCart.forEach(item => {
        const visitorName = item.querySelector('.name')
        const doctorName = item.querySelector('.doctor')
        const isMatch =
          visitorName.innerText.indexOf(value) === -1 && doctorName.innerText.indexOf(value) === -1

        isMatch ? (item.style.display = 'none') : (item.style.display = 'flex')
      })
    } else {
      appointCart.forEach(item => (item.style.display = 'flex'))
    }
  }
}
