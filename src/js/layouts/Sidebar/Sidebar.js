import { sidebarInfo } from './sidebarInfo'
import { sidebarMenu } from './sidebarMenu'
import { createEl } from '../../tools'

export const Sidebar = createEl({ css: 'sidebar' })
const sidebarContent = createEl({ css: 'sidebar-content' })

sidebarContent.append(sidebarMenu(), sidebarInfo)

Sidebar.append(sidebarContent)
