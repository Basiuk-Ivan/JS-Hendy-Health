import { createEl } from '../../tools'

export const createError = (dropdown, valid) => {
  dropdown.forEach(item => {
    if (!item.value) {
      const dropdownError = createEl({ el: 'p', css: 'dropdown-error', text: 'Enter the apt value' })
      valid = false
      item.after(dropdownError)
    }
  })
}
