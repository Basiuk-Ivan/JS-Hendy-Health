import { userLoggedIn } from '../../modules'
import { request, find } from '../../tools'

export const validateUser = async e => {
  e.preventDefault()

  const dataFrom = new FormData(e.target)
  const isRemember = !!dataFrom.get('checkbox')
  const userData = { email: dataFrom.get('text'), password: dataFrom.get('password') }
  const response = await request({ url: 'login', method: 'LOGIN', body: userData })
  const errorHandler = find('.login-error')
  const emailInput = find('.email')
  const passwordInput = find('.password')

  if (!response) {
    errorHandler.style.display = 'block'
    emailInput.value = ''
    passwordInput.value = ''

    setTimeout(() => (errorHandler.style.display = 'none'), 4500)

    return
  }

  if (!!response && isRemember) {
    window.localStorage.setItem('token', response)
    window.localStorage.setItem('userData', JSON.stringify(userData))
    await userLoggedIn()
  }
  if (!!response && !isRemember) {
    window.localStorage.setItem('token', response)
    await userLoggedIn()
  }
}
