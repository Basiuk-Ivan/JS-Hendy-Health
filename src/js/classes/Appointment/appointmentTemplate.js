import { createEl } from '../../tools'
import { tableActionsIcons } from './appointment.utils'
export const appointmentTemplate = props => {
  const { htmlElement, avatar, name, surname, department, doctor, tel, priority, status } = props

  const actions = createEl({ css: 'actions' })
  const clientName = createEl({ css: 'name', text: `${name} ${surname}` })
  const imgWrap = createEl({ css: 'avatar' })
  const statusColor = status === 'Closed' ? 'status-close' : 'status'
  imgWrap.innerHTML = `<img src = '${avatar}' alt = 'Client avatar' />`

  const appointmentContent = [
    createEl({ css: 'department', text: `${department}` }),
    createEl({ css: 'doctor', text: `${doctor}` }),
    createEl({ css: 'tel', text: `${tel}` }),
    createEl({ css: 'priority', text: `${priority}` }),
    createEl({ css: `${statusColor}`, text: `${status}` }),
  ]

  const tableIcons = tableActionsIcons.map(({ title, path }) => {
    const container = createEl({ el: 'span', css: `icon-container` })
    container.innerHTML = `<img class='icon-${title.toLowerCase()}' src ='${path}' alt ='${title} icon' title ='${title}'/>`

    return container
  })

  clientName.prepend(imgWrap)
  actions.append(...tableIcons)
  htmlElement.append(clientName, ...appointmentContent, actions)

  return htmlElement
}
