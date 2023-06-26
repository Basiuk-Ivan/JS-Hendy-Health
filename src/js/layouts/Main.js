import { Sidebar } from './Sidebar/Sidebar'
import { createEl, find } from '../tools'

export const Main = createEl({ el: 'main', css: 'main' })
const mainContent = createEl({ el: 'div', css: 'main-content' })
// const button = find('.covid-button')
// console.log('button:', button)

Main.append(Sidebar, mainContent)
