import { find } from './find'

export const renderComponent = component => {
  const mainContent = find('.main-content')

  mainContent.append(component)
}
