export const modifyTitle = ({ img, target, select, title }) => {
  !!img && (img.style.display = 'none')
  !!target.getAttribute('data-post') && !!title && (title.value = '')
  select.style.fontWeight = '600'
  select.style.color = 'black'
  select.value = target.textContent
}
