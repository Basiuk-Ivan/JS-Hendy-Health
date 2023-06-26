import { Modal } from '../classes'

export const renderVisitModal = (parent, clientData, option, id) => {
  const modal = new Modal()

  modal.renderModal(parent, option)
  clientData.showForm()
  modal.closeModal()
  modal.handleForm(option, id)
}
