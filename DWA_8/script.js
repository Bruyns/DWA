/**
 * the theme selector for the book connect webapp. sets the theme to light or dark depending which is selected
 * @typedef {function themeSelector(event)} - 
 * @return {HTMLElement} - when the user clicks the submit button
 */

const themeSelector = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const { theme } = Object.fromEntries(formData)

    if (theme === 'night') {
        document.documentElement.style.setProperty('--color-dark', '255, 255, 255');
        document.documentElement.style.setProperty('--color-light', '10, 10, 20');
    } else {
        document.documentElement.style.setProperty('--color-dark', '10, 10, 20');
        document.documentElement.style.setProperty('--color-light', '255, 255, 255');
    }
    
    html.settings.overlay.open = false

    html.settings.form.addEventListener('submit');
}