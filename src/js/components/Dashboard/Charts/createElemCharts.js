import { createEl } from '../../../tools'

export const dashboardActions = createEl({ css: 'dashboard-actions' })

export const createElemCharts = () => {
  const dashboardTableWrap1 = createEl({ css: 'dashboard-table-wrapp' })
  const dashboardTableWrap2 = createEl({ css: 'dashboard-table-wrapp' })
  const boardGraphFirst = createEl({ el: 'canvas', css: 'donut' })
  const boardGraphSecond = createEl({ el: 'canvas', css: 'donut' })

  boardGraphFirst.setAttribute('id', 'myChart-1')
  boardGraphSecond.setAttribute('id', 'myChart-2')

  dashboardTableWrap1.append(boardGraphFirst)
  dashboardTableWrap2.append(boardGraphSecond)
  dashboardActions.append(dashboardTableWrap1, dashboardTableWrap2)
}
