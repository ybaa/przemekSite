import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import allReducers from './reducers';
import App from './components/App';
import { translationObject } from '../dictionary/translations';
import { syncTranslationWithStore, loadTranslations, setLocale } from 'react-redux-i18n';

const logger = createLogger();
const store = createStore(
    allReducers,
    applyMiddleware(thunk, promise, logger)
);

syncTranslationWithStore(store)
store.dispatch(loadTranslations(translationObject));
store.dispatch(setLocale('pl'));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
