import modalImg from '../../../assets/images/modal-visit/modalImg.svg'
import { createDropdown, Dropdown, priorityDropdown } from '../../components'
import { setLocalData, updateLocalData } from '../../modules'
import { find, request } from '../../tools'
import { input } from '../../UI'
import { Appointment } from '../Appointment/Appointment'

export class Visit {
  constructor({
    name = '',
    surname = '',
    priority = '',
    goal = '',
    description = '',
    tel = '',
    doctor = '',
    department = '',
    age = '',
  }) {
    this.name = name
    this.surname = surname
    this.priority = priority
    this.goal = goal
    this.description = description
    this.tel = tel
    this.doctor = doctor
    this.department = department
    this.age = age
    this.status = 'Opened'
    this.pattern = 'a-zA-Zа-яА-ЯіІїЇєЄЁё\\s'
  }

  showForm() {
    const labelWrapper = find('.modal-visit__label-wrapper')
    labelWrapper.innerHTML = `
      
         ${input(
           'modal-visit__wrapper',
           'modal-visit__gap placeholder',
           'text',
           'Enter name',
           `^[${this.pattern}]+$`,
           'name',
           `${this.name}`
         )}
         ${input(
           'modal-visit__wrapper',
           'modal-visit__gap placeholder',
           'text',
           'Enter surname',
           `^[${this.pattern}]+$`,
           'surname',
           `${this.surname}`
         )}
        
         ${createDropdown(
           'department-title',
           'Department',
           'dropDepartment',
           'department',
           `${this.department}`,
           'Department'
         )}
         ${createDropdown('doctor-title', 'Doctor', 'doctor-list', 'doctor', `${this.doctor}`)}
         
         <div class='modal-visit__img'>
             <img src='${modalImg}' alt='Form'>
         </div>
         
         <div class='modal-visit__label-wrapper new-form'> </div>                        
      `

    Dropdown()

    return labelWrapper
  }

  commonGapForm = div => {
    div.insertAdjacentHTML(
      'beforeend',
      `
 ${input(
   'modal-visit__extra small',
   'modal-visit__gap placeholder',
   'number',
   'Age',
   ``,
   'age',
   `${this.age}`
 )}

${input(
  'modal-visit__extra',
  'modal-visit__gap placeholder',
  'text',
  'Goal',
  `^[${this.pattern} 0-9 .]+$`,
  'goal',
  `${this.goal}`
)}

    <label class='modal-visit__extra'>
       <textarea class='modal-visit__gap placeholder' name='description' id='w3review' name='w3review' rows='1' cols='50' placeholder='Description'>${
         this.description
       }</textarea>
    </label>
       
       
    ${input(
      'modal-visit__extra small',
      'modal-visit__gap placeholder',
      'number',
      'Tel.',
      '^[0-9 +]+$',
      'tel',
      `${this.tel}`
    )}
            
    <div class='modal-visit__extra dropdown small priorities'>
     
        <input class='modal-visit__gap modal-visit__dropdown placeholder priority-title' value='${
          this.priority
        }' 
        name='priority' type='text' placeholder='Priority' disabled>
        <ul class='modal-visit__dropdown-list priority-list' >
             <li class='modal-visit__dropdown-item'>High</li>
             <li class='modal-visit__dropdown-item'>Normal</li>
             <li class='modal-visit__dropdown-item'>Low</li>
        </ul>
    </div>`
    )

    priorityDropdown()
  }

  async postRequest() {
    const res = await request({
      url: '',
      method: 'POST',
      body: this,
    })

    if (!!res) {
      const appointment = new Appointment(res)
      appointment.addNewAppointment()
      setLocalData(res)
    }
  }

  async putRequest(id) {
    const res = await request({
      url: `${id}`,
      method: 'PUT',
      body: this,
    })

    if (!!res) {
      updateLocalData(res)
    }
  }
}
