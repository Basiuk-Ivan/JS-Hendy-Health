import { renderVisitModal } from '../../modules'
import { find } from '../../tools'

export const editForm = (department, fn, id) => {
  const app = find('#app')

  renderVisitModal(app, department, 'Edit', id)

  const modalImg = find('.modal-visit__img')
  const newForm = find('.new-form')

  modalImg.style.display = 'none'

  fn.bind(department, ...[newForm])()

  department.commonGapForm(newForm)
}
