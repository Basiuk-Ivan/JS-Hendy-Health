import { Visit } from '../Visit/Visit.js'
import { input } from '../../UI'

export class VisitCardiologist extends Visit {
  constructor({
    name,
    surname,
    priority,
    department,
    goal,
    description,
    tel,
    doctor,
    age,
    pressure = '',
    bodyIndex = '',
    disease = '',
  }) {
    super({ name, surname, priority, goal, description, tel, doctor, department, age })
    this.pressure = pressure
    this.bodyIndex = bodyIndex
    this.disease = disease
  }

  showHealthInfo(div) {
    div.innerHTML = ` 
 ${input(
   'modal-visit__extra small',
   'modal-visit__gap placeholder',
   'text',
   'Typical pressure',
   `^[0-9 -.+/]+$`,
   'pressure',
   `${this.pressure}`
 )}
 ${input(
   'modal-visit__extra small',
   'modal-visit__gap placeholder',
   'text',
   'Body mass index',
   `^[0-9 -.+/]+$`,
   'bodyIndex',
   `${this.bodyIndex}`
 )}

 ${input(
   'modal-visit__extra small',
   'modal-visit__gap placeholder',
   'text',
   'Diseases of cardiovascular',
   `^[${this.pattern} 0-9]+$`,
   'disease',
   `${this.disease}`
 )}`
  }
}
