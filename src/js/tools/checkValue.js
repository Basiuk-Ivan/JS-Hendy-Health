import { VisitCardiologist, VisitDentist, VisitTherapist, Modal } from '../classes'
import { find } from './find'

export const checkValue = (value, data = {}, boolean = false, id) => {
  const newForm = find('.new-form')
  const modal = new Modal()

  switch (value) {
    case 'Cardiology':
      const cardiologist = new VisitCardiologist(data)
      modal.renderExtraForm(boolean, cardiologist, newForm, cardiologist.showHealthInfo, id)

      break
    case 'Dentistry':
      const dentist = new VisitDentist(data)
      modal.renderExtraForm(boolean, dentist, newForm, dentist.showCalendar, id)

      break
    case 'Therapy':
      const therapist = new VisitTherapist(data)
      modal.renderExtraForm(boolean, therapist, newForm, therapist.showEmail, id)
  }
}
