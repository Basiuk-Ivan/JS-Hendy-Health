import avatar1 from '../../../assets/images/dashboard/pacAv1.svg'
import avatar2 from '../../../assets/images/dashboard/pacAv2.svg'
import { create, random, find, request } from '../../tools'
import { appointmentTemplate } from './appointmentTemplate'
import { deleteLocalData, updateLocalDataStatus } from '../../modules/localData'
import { editAppointment } from './editAppointment'

export class Appointment {
  parentElement = find('.table-list')

  constructor({ id, name, surname, department, doctor, tel, priority, status }) {
    this.id = id
    this.avatar = random(avatar1, avatar2)
    this.name = name
    this.surname = surname
    this.department = department
    this.doctor = doctor
    this.tel = tel
    this.priority = priority
    this.status = status
    this.htmlElement = create('div', 'appointment')
  }

  addNewAppointment() {
    const appointment = appointmentTemplate(this)
    this.parentElement.append(appointment)
    this._addEditOptions()
  }

  _addEditOptions() {
    this.htmlElement.addEventListener('click', async e => {
      const isDelete = e.target.classList.contains('icon-delete')
      const isEdit = e.target.classList.contains('icon-edit')
      const isComplete = e.target.classList.contains('icon-complete')
      const status = this.htmlElement.querySelector('.status')

      if (isDelete) {
        const response = await request({ url: `${this.id}`, method: 'DELETE' })

        if (response === '') {
          this.htmlElement.remove()
          deleteLocalData(this.id)
        }
      }

      if (isComplete && status?.textContent === 'Opened') {
        const response = await request({
          url: `${this.id}`,
          method: 'PUT',
          body: { ...this, status: 'Closed' },
        })

        if (response) {
          status.textContent = 'Closed'
          status.style.color = '#ff6b93'
          updateLocalDataStatus(this.id)
        }
      }

      if (isEdit) {
        editAppointment(this.id)
      }
    })
  }
}
