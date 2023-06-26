import logoImg from '../../assets/images/logo/logo-img.svg'
import logoText from '../../assets/images/logo/logo-text.svg'
import imgAvatar from '../../assets/images/avatar/avatar.svg'
import iconInput from '../../assets/images/sidebarIcons/search-input.svg'

import { createEl, createButton } from '../tools'

export const Header = () => {
  const Header = createEl({ el: 'header', css: 'header' })

  Header.innerHTML = `
    <div class="header-logo-wrapp">
      <div class="header-logo">
        <a class="header-logo-link" href="#">
          <img src="${logoImg}" alt="Logo" />
          <img src="${logoText}" alt="Logo Text" />
        </a>
      </div>
    </div>
    <div class="header-content">
      <div class="header-search">
        <div class="header-search-wrap">
          <img class="icon-input" src="${iconInput}" alt="Search" />
          <input class="search" type="text" placeholder="Search"
        </div>
      </div>
    </div>
    <div class="header-actions">
      <div class="header-button">${createButton('header-login', 'Log in').outerHTML}</div>
      <div class="header-avatar"><img src="${imgAvatar}" alt="Avatar" /></div>
    </div>`

  return Header
}
