// @ts-chec

/**
 * imports the files info form the data.js and html.js module 
 */
import { books, authors, genres, BOOKS_PER_PAGE } from './data.js';
import { html } from './html.js'


/**
 * 
 * @typedef {} page - the page the user is on pending on amount of search's
 * @typedef {} matches - var to  be used to deconstruct books into the relevant searchs 
 */
let page = 1;
let matches = books


/**
 * the loop used to preview the opening 36 books on the front webpage
 * @typedef {DocumentFragment} starting - creates a DOM fragment for the books shown in the preview
 * @property {button} element - is used to attach a element to the button class in the HTML
 * @property {} classList - 
 */

/**
 * BOOKS PREVIEW - shows a set amount of books on the opening page when button pressed
 * @type {starting}
 */
const starting = document.createDocumentFragment()

for (const { author, id, image, title } of matches.slice(0, BOOKS_PER_PAGE)) {
    const element = document.createElement('button')
    element.classList = 'preview'
    element.setAttribute('data-preview', id)

    element.innerHTML = `
        <img
            class="preview__image"
            src="${image}"
        />
        
        <div class="preview__info">
            <h3 class="preview__title">${title}</h3>
            <div class="preview__author">${authors[author]}</div>
        </div>
    `

    starting.appendChild(element)
}

html.list.items.appendChild(starting)

/**
 * GENRE SEARCH - searchs for a specific genre of book
 * 
 */
const genreHtml = document.createDocumentFragment()
const firstGenreElement = document.createElement('option')
firstGenreElement.value = 'any'
firstGenreElement.innerText = 'All Genres'
genreHtml.appendChild(firstGenreElement)

for (const [id, name] of Object.entries(genres)) {
    const element = document.createElement('option')
    element.value = id
    element.innerText = name
    genreHtml.appendChild(element)
}

html.search.genre.appendChild(genreHtml)

/**
 * AUTHORS SEARCH - searchs books for a specific author
 * 
 */
const authorsHtml = document.createDocumentFragment()
const firstAuthorElement = document.createElement('option')
firstAuthorElement.value = 'any'
firstAuthorElement.innerText = 'All Authors'
authorsHtml.appendChild(firstAuthorElement)

for (const [id, name] of Object.entries(authors)) {
    const element = document.createElement('option')
    element.value = id
    element.innerText = name
    authorsHtml.appendChild(element)
}

html.search.author.appendChild(authorsHtml)

/**
 * THEME SELECTOR - sets page theme to light or dark mode
 * 
 */
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    html.settings.theme.value = 'night'
    document.documentElement.style.setProperty('--color-dark', '255, 255, 255');
    document.documentElement.style.setProperty('--color-light', '10, 10, 20');
} else {
    html.settings.theme.value = 'day'
    document.documentElement.style.setProperty('--color-dark', '10, 10, 20');
    document.documentElement.style.setProperty('--color-light', '255, 255, 255');
}

/**
 * LOGIC - sets the method to be used for the show more button, the number to display and whether its
 *         disabled or enabled
 * BUTTON, OVERLAY, FUNCTIONS - how the app button should open and close, when the search overlay should
 *          be open or close and how the logic should be performed.
 */

/**
 * SHOW MORE button
 */
html.list.items.innerText = `Show more (${books.length - BOOKS_PER_PAGE})`
html.list.button.disabled = (matches.length - (page * BOOKS_PER_PAGE)) > 0

html.list.button.innerHTML = `
    <span>Show more</span>
    <span class="list__remaining"> (${(matches.length - (page * BOOKS_PER_PAGE)) > 0 ? (matches.length - (page * BOOKS_PER_PAGE)) : 0})</span>
`
/**
 * SEARCH OVERLAY - screen to input search parameters( CLOSE BUTTON )
 */
html.search.cancel.addEventListener('click', () => {
    html.search.overlay.open = false
})
/**
 * THEME SETTINGS OVERLAY - screen to change various settings (themes)( CLOSE BUTTON)
 */
html.settings.cancel.addEventListener('click', () => {
    html.settings.overlay.open = false
})

/**
 * SEARCH OVERLAY - screen to input search parameters( OPEN BUTTON )
 */
html.search.button.addEventListener('click', () => {
    html.search.overlay.open = true 
    html.search.title.focus()
})

/**
 * DESCRIPTION OVERLAY - screen to input search parameters( OPEN BUTTON )
 */
html.settings.button.addEventListener('click', () => {
    html.settings.overlay.open = true 
})

html.list.close.addEventListener('click', () => {
    html.list.active.open = false
})

/**
 * LOGIC FUNCTIONS - 
 * 
 */

/**
 * THEME SETTINGS - sets the theme color to dark or light depending on user selected option
 */
html.settings.form.addEventListener('submit', (event) => {
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
})

/**
 * AUTHOR AN GENRE SEARCH - creates files in the DOM based on the matched searchs
 */
html.search.form.addEventListener('submit', (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const filters = Object.fromEntries(formData)
    const result = []

    for (const book of books) {
        let genreMatch = filters.genre === 'any'

        for (const singleGenre of book.genres) {
            if (genreMatch) break;
            if (singleGenre === filters.genre) { genreMatch = true }
        }

        if (
            (filters.title.trim() === '' || book.title.toLowerCase().includes(filters.title.toLowerCase())) && 
            (filters.author === 'any' || book.author === filters.author) && 
            genreMatch
        ) {
            result.push(book)
        }
    }

    /** 
     * unsure what this is meant to do
     */
    page = 1;
    matches = result

    if (result.length < 1) {
        html.list.message.classList.add('list__message_show')
    } else {
        html.list.message.classList.remove('list__message_show')
    }

    html.list.items.innerHTML = ''
    const newItems = document.createDocumentFragment()

    for (const { author, id, image, title } of result.slice(0, BOOKS_PER_PAGE)) {
        const element = document.createElement('button')
        element.classList = 'preview'
        element.setAttribute('data-preview', id)
    
        element.innerHTML = `
            <img
                class="preview__image"
                src="${image}"
            />
            
            <div class="preview__info">
                <h3 class="preview__title">${title}</h3>
                <div class="preview__author">${authors[author]}</div>
            </div>
        `

        newItems.appendChild(element)
    }

    html.list.items.appendChild(newItems)
    html.list.button.disabled = (matches.length - (page * BOOKS_PER_PAGE)) < 1

    html.list.button.innerHTML = `
        <span>Show more</span>
        <span class="list__remaining"> (${(matches.length - (page * BOOKS_PER_PAGE)) > 0 ? (matches.length - (page * BOOKS_PER_PAGE)) : 0})</span>
    `

    window.scrollTo({top: 0, behavior: 'smooth'});
    html.search.overlay.open = false
})

html.list.button.addEventListener('click', () => {
    const fragment = document.createDocumentFragment()

    for (const { author, id, image, title } of matches.slice(page * BOOKS_PER_PAGE, (page + 1) * BOOKS_PER_PAGE)) {
        const element = document.createElement('button')
        element.classList = 'preview'
        element.setAttribute('data-preview', id)
    
        element.innerHTML = `
            <img
                class="preview__image"
                src="${image}"
            />
            
            <div class="preview__info">
                <h3 class="preview__title">${title}</h3>
                <div class="preview__author">${authors[author]}</div>
            </div>
        `

        fragment.appendChild(element)
    }

    html.list.items.appendChild(fragment)
    page += 1
})

html.list.items.addEventListener('click', (event) => {
    const pathArray = Array.from(event.path || event.composedPath())
    let active = null

    for (const node of pathArray) {
        if (active) break

        if (node?.dataset?.preview) {
            let result = null
    
            for (const singleBook of books) {
                if (result) break;
                if (singleBook.id === node?.dataset?.preview) result = singleBook
            } 
        
            active = result
        }
    }
    /**
     * preview of each book when clicked/views by user
     */
    if (active) {
        html.list.active.open = true
        html.list.blur.src = active.image
        html.list.image.src = active.image
        html.list.title.innerText = active.title
        html.list.subtitle.innerText = `${authors[active.author]} (${new Date(active.published).getFullYear()})`
        html.list.description.innerText = active.description
    }
})