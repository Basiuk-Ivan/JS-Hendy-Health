import { create } from '../../tools'
import { tableHeaders } from './dashboard.utils'

export const dashboardTable = create('div', 'dashboard-table')
const tableTitle = create('div', 'table-title', 'Appointment Activity')
const tableHead = create('div', 'table-head')
const tableList = create('div', 'table-list')

const headers = tableHeaders.map(text => create('div', `${text.toLowerCase()}`, `${text}`))
tableHead.append(...headers)

dashboardTable.append(tableTitle, tableHead, tableList)
