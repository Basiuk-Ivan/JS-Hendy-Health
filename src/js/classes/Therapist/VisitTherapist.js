import { Visit } from '../Visit/Visit'
import { input } from '../../UI'

export class VisitTherapist extends Visit {
  constructor({ name, surname, priority, goal, description, tel, doctor, department, age, email = '' }) {
    super({ name, surname, priority, goal, description, tel, doctor, department, age })
    this.email = email
  }

  showEmail(div) {
    div.innerHTML = ` 
 ${input(
   'modal-visit__extra small',
   'modal-visit__gap placeholder',
   'email',
   'Email',
   `^\\S+@\\S+\\.\\S+$`,
   'email',
   `${this.email}`
 )}
`
  }
}
