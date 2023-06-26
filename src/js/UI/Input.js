export const input = (labelSelector, inputSelectors, type, placeholder, pattern, name, value) => `
<label class='${labelSelector}'>
     <input class='${inputSelectors}' name='${name}' type='${type}' pattern='${pattern}' placeholder='${placeholder}' value='${value}' required>
</label>
`
