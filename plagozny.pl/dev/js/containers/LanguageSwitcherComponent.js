import React, {
    Component
} from 'react';
import {
    Parallax
} from 'react-materialize';
import {
    I18n,
    setLocale,
    loadTranslations
} from 'react-redux-i18n';
import PropTypes from 'prop-types';
import photo from '../../../images/omnie.png';
import {
    languages,
    translationObject
} from '../../dictionary/translations';
import plImg from '../../../images/poland.png'
import enImg from '../../../images/england.png';
import {
    bindActionCreators
} from 'redux';
import {
    connect
} from 'react-redux';

class LanguageSwitcherComponent extends Component {
    render() {
        let langs = languages.map((current) => {
            let img = '';
            switch (current.key) {
                case 'pl':
                    img = plImg;
                    break;
                case 'en':
                    img = enImg;
                    break;

                default:
                    break;
            }

            return <li className = "languageSwitcherStyle"
                    onClick = { () => {
                            this.props.setLocale(current.key);
                        }} >
                    <span>
                        <img src = {img}/> { current.name} 
                    </span>
                    </li>
        })

        return ( 
            <div > 
                {langs} 
            </div>

        );
    }
}

function mapStateToProps(state) {
    return {
        locale: state.i18n.locale,
    }
}

function matchActionsToDispatch(dispatch) {
    return bindActionCreators({
            setLocale: setLocale
        },
        dispatch
    )
}

export default connect(mapStateToProps, matchActionsToDispatch)(LanguageSwitcherComponent)