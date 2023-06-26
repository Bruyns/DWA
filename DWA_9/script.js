import { books, authors, genres, BOOKS_PER_PAGE } from './data.js';
import {ThemeSelector} from './class_plugin';
import { html } from './html.js'

const theme = new ThemeSelector;

html.settings.theme.addeventlistener ('submit' , (event) => { 
    themeSelector.ThemeSelector(event)
 })