import React, {Component} from 'react';
import { Footer } from 'react-materialize';
import { I18n } from 'react-redux-i18n';
import PropTypes from 'prop-types';
import photo from '../../../images/omnie.png';
import { Link } from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class FooterComponent extends Component {
    render() {       
      
        return (
            <div className='footer'>                
              <Footer copyrights="&copy; 2017 plagozny.pl"                
                links={
                    <ul>
                        <li>
                            <Link to="/about" className="grey-text text-lighten-3">{I18n.t('navbar.aboutMe')}</Link>
                        </li>
                        <li>
                            <Link to="/media" className="grey-text text-lighten-3">{I18n.t('navbar.media')}</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="grey-text text-lighten-3">{I18n.t('navbar.contact')}</Link>
                        </li>
                        <li>
                            <Link to="/work" className="grey-text text-lighten-3">{I18n.t('navbar.work')}</Link>
                        </li>
                        <li>
                            <Link to="/education" className="grey-text text-lighten-3">{I18n.t('navbar.education')}</Link>
                        </li>
                    </ul>
                }
                className='example'
            >
                    <h5 className="white-text">plagozny.pl</h5>
                    <p className="grey-text text-lighten-4">{I18n.t('slider.title')}</p>
                    <p className="grey-text text-lighten-4">{I18n.t('photosFromLegia')}</p>
            </Footer>
            </div>
           
        );
    }
}

function mapStateToProps(state) {
    return{
        locale: state.i18n.locale,     
    }
}

function matchActionsToDispatch(dispatch) {
    return bindActionCreators(
        {
           
        },
        dispatch
    )
}

export default connect(mapStateToProps, matchActionsToDispatch)(FooterComponent)
