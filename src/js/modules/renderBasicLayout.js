import { Header, Main, changeCovidInfo } from '../layouts'
import { renderComponent } from '../tools'
import { Registration, loginFormHandler } from '../components'

export const renderBasicLayout = () => {
  const app = document.getElementById('app')

  app.innerHTML = ''

  app.append(Header(), Main)
  renderComponent(Registration)
  loginFormHandler()
  changeCovidInfo()
}
