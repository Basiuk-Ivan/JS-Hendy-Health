import { createEl } from './create'
import noDataImage from '../../assets/images/dashboard/noData.svg'

export const renderNoDataImg = parentNodeSelector => {
  const parentNode = document.querySelector(parentNodeSelector)
  const noDataImg = createEl({ el: 'img', css: 'nodata-image', src: noDataImage })

  parentNode.append(noDataImg)
}
