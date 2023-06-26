import { find } from '../../tools'

export const loginFormHandler = () => {
  const button = find('.header-login')
  const loginForm = find('.login-form')

  button.addEventListener('click', () => loginForm.classList.add('fade-in'))
}
