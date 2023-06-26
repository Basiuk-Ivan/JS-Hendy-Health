import { createEl } from '../../tools'
import { boardHeaderContent } from './dashboard.utils'

export const dashboardHeader = createEl({ css: 'dashboard-header' })

const headerCards = boardHeaderContent.map(({ text, path, value, className }) => {
  const card = createEl({ css: 'header-card' })
  const cardImageWrap = createEl({ css: 'card-image-wrap' })
  const img = createEl({ el: 'img', css: 'card-image', src: path, alt: `${text} icon` })
  const content = createEl({ css: 'card-content' })
  const title = createEl({ css: 'card-title', text: text })
  const span = createEl({ el: 'span', css: className, text: value })

  cardImageWrap.append(img)
  content.append(title, span)
  card.append(cardImageWrap, content)

  return card
})

dashboardHeader.append(...headerCards)
