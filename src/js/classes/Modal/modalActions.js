import { find } from '../../tools'
import { renderVisitModal } from '../../modules'
import { Visit } from '../Visit/Visit'

export const modalActions = () => {
  const openModalButton = find('.register')

  openModalButton.addEventListener('click', () => {
    const app = find('#app')
    const visit = new Visit({})
    renderVisitModal(app, visit)
  })
}
