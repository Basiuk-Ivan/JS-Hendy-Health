import { VisitCardiologist } from '../Cardiologist/VisitCardiologist'
import { VisitTherapist } from '../Therapist/VisitTherapist'
import { VisitDentist } from '../Dentist/VisitDentist'
import { modalTemplate } from './modalTemplate'
import { createError } from './createError'
import { editForm } from './editForm'
import { find, findAll } from '../../tools'

export class Modal {
  constructor() {}

  renderModal(parent, option) {
    const modalElement = modalTemplate(option)
    parent.append(modalElement)
  }

  closeModal() {
    const darkBlock = find('.dark-block')
    const modalVisit = find('.modal-visit')
    const cancelBtn = find('.modal-visit__button-cancel')

    darkBlock.addEventListener('click', e => {
      if (!e.composedPath().includes(modalVisit)) {
        darkBlock.remove()
      }
    })

    cancelBtn.addEventListener('click', e => {
      e.preventDefault()
      darkBlock.remove()
    })
  }

  handleForm = (value, id) => {
    const form = find('.modal-visit__form')
    const darkBlock = find('.dark-block')

    form.addEventListener('submit', async e => {
      e.preventDefault()

      const departmentValue = find('.department-title')
      const dropdown = findAll('.modal-visit__dropdown')
      const result = {}
      let valid = true

      createError(dropdown, valid)

      if (valid) {
        dropdown.forEach(item => item.removeAttribute('disabled'))

        const visitData = new FormData(e.target)

        for (const [key, value] of visitData.entries()) result[key] = value

        switch (departmentValue.value) {
          case 'Cardiology':
            const cardiologist = new VisitCardiologist(result)
            value === 'Edit' ? await cardiologist.putRequest(id) : await cardiologist.postRequest()

            break
          case 'Dentistry':
            const dentist = new VisitDentist(result)
            value === 'Edit' ? await dentist.putRequest(id) : await dentist.postRequest()

            break
          case 'Therapy':
            const therapist = new VisitTherapist(result)
            value === 'Edit' ? await therapist.putRequest(id) : await therapist.postRequest()
        }

        dropdown.forEach(item => item.setAttribute('disabled', valid))
        darkBlock.remove()
      }
    })
  }

  renderExtraForm = (boolean, department, newForm, fn, id) => {
    if (!!boolean) {
      editForm(department, fn.bind(department), id)
    } else {
      fn.bind(department, ...[newForm])()
      department.commonGapForm(newForm)
    }
  }
}
