import { createEl, createButton } from '../../tools'

export const modalTemplate = option => {
  const darkBlock = createEl({ css: 'dark-block' })
  darkBlock.innerHTML = `
<div class='modal-visit'>
  <div class='visit-container'>
  <h1 class='modal-visit__title'>Fill in the form</h1>
  <form class='modal-visit__form'> 
  <div class='modal-visit__label-wrapper'> 
  
  </div>
  <div class='modal-visit__box-button'>
          ${createButton('modal-visit__button-cancel', 'Cancel').outerHTML}
          ${
            option === 'Edit'
              ? createButton('modal-visit__button-save', 'Edit').outerHTML
              : createButton('modal-visit__button-save', 'Save').outerHTML
          }
  </div>
  
  </form>
  </div>
</div>
  `
  return darkBlock
}
