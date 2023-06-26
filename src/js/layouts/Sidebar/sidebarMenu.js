import { sidebarList, sidebarListSupport } from '../layout.utils'
import { createEl } from '../../tools'

const sidebarItems = itemList => {
  const itemsManagement = itemList.map(({ name, path }) => {
    const sidebarItem = createEl({ el: 'li', css: 'sidebar-item' })
    const sidebarItemImg = createEl({ el: 'img', src: path, alt: 'icons' })
    const sidebarItemLink = createEl({ el: 'a', css: 'aside-link', text: name })

    sidebarItem.append(sidebarItemImg, sidebarItemLink)

    return sidebarItem
  })

  return itemsManagement
}

export const sidebarMenu = () => {
  const sidebarMenu = createEl({ css: 'sidebar-menu' })
  const sidebarTitle = createEl({ css: 'menu-title', text: 'Management' })
  const sidebarListManagement = createEl({ el: 'ul', css: 'sidebar-list' })
  const sidebarLine = createEl({ css: 'support-line' })
  const sidebarSupport = createEl({ css: 'menu-support', text: 'Supports' })
  const sidebarListSupports = createEl({ el: 'ul', css: 'sidebar-list' })

  const itemsManagement = sidebarList.map(({ name, path }) => {
    const sidebarItem = createEl({ el: 'li', css: 'sidebar-item' })
    const sidebarItemImg = createEl({ el: 'img', src: path, alt: 'icons' })
    const sidebarItemLink = createEl({ el: 'a', css: 'aside-link', text: name })

    sidebarItem.append(sidebarItemImg, sidebarItemLink)

    return sidebarItem
  })

  const itemsSupport = sidebarListSupport.map(({ name, path }) => {
    const sidebarItem = createEl({ el: 'li', css: 'sidebar-item' })
    const sidebarItemImg = createEl({ el: 'img', src: path, alt: 'icons' })
    const sidebarItemLink = createEl({ el: 'a', css: 'aside-link', text: name })

    sidebarItem.append(sidebarItemImg, sidebarItemLink)

    return sidebarItem
  })

  sidebarListSupports.append(...itemsSupport)
  sidebarListManagement.append(...itemsManagement)
  sidebarMenu.append(sidebarTitle, sidebarListManagement, sidebarLine, sidebarSupport, sidebarListSupports)

  return sidebarMenu
}
