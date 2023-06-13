// @ts-check

/**
 * @param {string} label - 
 * @returns {HTMLElement} 
 */
const html = (label) => {
    const node = document.querySelector(`[data-${label}]`);

    if (!(node instanceof HTMLElement)){
    throw new Error (`the ${node} you are looking for does not exist, please reload`)
    }
    return node;
}

/**
 * @type {{list : object, search : object, settings : object}} html
 * @property {object} list - constain DOM references that relate to the books being displayed
 * @property {object} search - constain DOM references that relate to the search functionality
 * @property {object} settings - constain DOM references that relate to the settings functionality
 */

export const html = {
    list: {
        items: html('list-items'),
        message: html('list-message'),
        button: html('list-button'),
        active: html('list-active'),
        blur: html('list-blur'),
        image: html('list-image'),
        title: html('list-title'),
        subtitle: html('list-subtitle'),
        description: html('list-description'),
        close: html('list-close'),
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