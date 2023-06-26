import { createEl, createButton } from '../../tools'
import iconUA from '../../../assets/images/covid/ukraine2.svg'
export const sidebarInfo = createEl({ css: 'sidebar-info' })
const sidebarCovid = createEl({ css: 'sidebar-covid' })
const covidBody = createEl({ css: 'covid-body' })
const covidTitle = createEl({ css: 'covid-title', text: 'Covid information' })
const covidIcon = createEl({ css: 'covid-icon' })
const covidIconImg = createEl({ el: 'img', css: 'covid-icon-img', src: iconUA, alt: 'Ukraine' })
const covidIconTitle = createEl({ css: 'covid-icon-title', text: 'Ukraine' })
const covidInfo = createEl({ css: 'covid-info' })

const covidContent = [
  createEl({ css: 'covid-new-recoverdet' }),
  createEl({ css: 'covid-infected' }),
  createEl({ css: 'covid-deaths' }),
  createButton('covid-button', 'Show All'),
]

const sidebarFooter = createEl({ css: 'sidebar-footer' })
const sidebarFooterTitle = createEl({ css: 'sidebar-footer-title', text: '© HendyHealth 2023' })
const sidebarFooterText = createEl({
  css: 'sidebar-footer-text',
  text: 'HendyHealth is medical management for all doctors, patient & Staff',
})

covidBody.append(covidTitle, covidIcon, covidInfo)
covidIcon.append(covidIconImg, covidIconTitle)
covidInfo.append(...covidContent)
sidebarFooter.append(sidebarFooterTitle, sidebarFooterText)
sidebarCovid.append(covidBody)
sidebarInfo.append(sidebarCovid, sidebarFooter)
