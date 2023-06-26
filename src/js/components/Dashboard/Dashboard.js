import { createEl } from '../../tools'
import { dashboardTable } from './dashboardTable'
import { dashboardHeader } from './dashboardHeader'
import { dashboardActions } from './Charts/createElemCharts'

export const Dashboard = createEl( { css: 'dashboard' })

const boardContent = createEl({ css: 'dashboard-content' })

boardContent.append(dashboardTable, dashboardActions)
Dashboard.append(dashboardHeader, boardContent)
