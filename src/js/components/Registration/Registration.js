import regImg from '../../../assets/images/hero.svg'
import { loginForm } from './index'
import { createEl } from '../../tools'

export const Registration = createEl({ css: 'registration' })

const registrationImg = createEl({ el: 'div', css: 'login-image' })
const img = createEl({ el: 'img', src: regImg, alt: 'Registration Image' })

registrationImg.append(img)
Registration.append(loginForm, registrationImg)
