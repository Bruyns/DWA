// @ts-check

/**
 * @param {string} label - the data-atrribute found in the index.html file
 * @returns {HTMLElement} 
 */
const getHtml = (label) => {
    const node = document.querySelector(`[data-${label}]`);
    // literally works for every data-attribute in the code or added in the future

    if (!(node instanceof HTMLElement)){
    throw new Error (`the data-${label} you are looking for does not exist, please reload`)
    }
    return node;
}

/**
 * type {{list : object, search : object, settings : object}} html
 * property {object} list - constain DOM references that relate to the books being displayed
 * property {object} search - constain DOM references that relate to the search functionality
 * property {object} settings - constain DOM references that relate to the settings functionality
 */

/**
 * @typedef {object} html - contains all htmlelements to be used by the script
 * @property {object} list - all book list options 
 * @property {object} search - settings related to the search functionality
 * @property {object} settings - all site settings changeable by the user
 */

/**
 * @type {html} 
 */
export const html = {
    list: {
        items: getHtml('list-items'),
        message: getHtml('list-message'),
        button: getHtml('list-button'),
        active: getHtml('list-active'),
        blur: getHtml('list-blur'),
        image: getHtml('list-image'),
        title: getHtml('list-title'),
        subtitle: getHtml('list-subtitle'),
        description: getHtml('list-description'),
        close: getHtml('list-close'),
    },

    search: {
        button: getHtml('header-search'),
        overlay: getHtml('search-overlay'),
        cancel: getHtml('search-cancel'),
        form: getHtml('search-form'),
        title: getHtml('search-title'),
        genre: getHtml('search-genres'),
        author: getHtml('search-authors'),
        submit: getHtml('search-overlay] [type="submit"')
    },

    settings: {
        button: getHtml('header-settings'),
        overlay: getHtml('settings-overlay'),
        form: getHtml('settings-form'),
        theme: getHtml('settings-theme'),
        cancel: getHtml('settings-cancel'),
        submit: getHtml('settings-overlay] [type="submit"')
    }
}