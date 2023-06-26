export const createDropdown = (titleSelector, titleText, listSelector, name, value, dataAtr) => `
<div class='modal-visit__wrapper dropdown' data-name='${dataAtr}'>
   <input class='modal-visit__gap modal-visit__dropdown placeholder ${titleSelector}' name='${name}' type='text' placeholder=' ${titleText}' value='${value}' required disabled>
   <ul class='modal-visit__dropdown-list ${listSelector}' > </ul>
</div>
`
