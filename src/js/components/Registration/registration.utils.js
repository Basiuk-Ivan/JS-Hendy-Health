import googleIcon from '../../../assets/images/google.svg'
import facebookIcon from '../../../assets/images/facebook.svg'
import { createButton, createInput } from '../../tools'

const isData = JSON.parse(localStorage.getItem('userData'))
export const registrationUtils = {
  googleIcon,
  facebookIcon,
  toggleCheckbox: createInput({ type: 'checkbox', name: 'checkbox' }),
  loginButton: createButton('log-in', 'Log In'),
  emailInput: createInput({
    css: 'email',
    type: 'text',
    name: 'text',
    placeholder: 'Email',
    value: isData?.email || '',
  }),
  passwordInput: createInput({
    css: 'password',
    type: 'password',
    name: 'password',
    placeholder: 'Password',
    value: isData?.password || '',
  }),
}
