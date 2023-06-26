export const create = (el, css, text) => {
  const htmlElement = document.createElement(el)

  !!css && htmlElement.classList.add(css)
  !!text && (htmlElement.textContent = text)

  return htmlElement
}
// TODO: delete create()

export const createEl = props => {
  const { el, css, text, src, alt, title, href } = props
  const element = el ? el : 'div'
  const htmlElement = document.createElement(element)

  css && htmlElement.classList.add(css)
  text && (htmlElement.textContent = text)
  src && (htmlElement.src = src) && (htmlElement.alt = alt)
  href && (htmlElement.href = href)
  title && (htmlElement.title = title)

  return htmlElement
}

export const createInput = props => {
  const { css, type, name, placeholder, value, title } = props
  const input = document.createElement('input')

  css && input.classList.add(css)
  type && (input.type = type)
  name && (input.name = name)
  value && (input.value = value)
  title && (input.title = title)
  placeholder && (input.placeholder = placeholder)

  return input
}

export const createButton = (css, text) => {
  const button = document.createElement('button')

  button.type = 'submit'
  button.className = 'button'
  css && button.classList.add(css)
  text && (button.textContent = text)

  return button
}
