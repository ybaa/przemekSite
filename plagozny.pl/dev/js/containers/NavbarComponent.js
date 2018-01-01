import React, {Component} from 'react';
import { Navbar, NavItem, Dropdown, Button, Icon } from 'react-materialize';
import { translationObject } from '../../dictionary/translations';
import { I18n } from 'react-redux-i18n';
import { Link } from 'react-router-dom';
import polandImg from '../../../images/poland.png';
import englandImg from '../../../images/england.png';
import LanguageSwitcherComponent from '../containers/LanguageSwitcherComponent'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import FontAwesome from 'react-fontawesome';

class NavbarComponent extends Component {
    render() {       
        return (            
            <div>                                 
                <Navbar brand ={ 
                    <Link to='/'>
                        plagozny.pl
                    </Link> 
                } right className="myLogo">   

                    <ul className="myLogo right hide-on-med-and-down">
                        <li>
                            <a href='https://www.facebook.com/lagozny/' target='_blank'>{I18n.t('navbar.news')}</a>
                        </li>
                        <li>
                            <Link to='/about'>
                                {I18n.t('navbar.aboutMe')}
                            </Link>
                        </li>
                        <li>
                       
                            <Link to='/contact'>
                                {I18n.t('navbar.contact')}
                            </Link>
                       
                        </li>
                        <li>
                      
                            <Link to='/media'>
                                {I18n.t('navbar.media')}
                            </Link>
                        </li>
                        
                        <Dropdown trigger={
                            <Button>{I18n.t('navbar.experience')}
                                <FontAwesome className="navIcon" name='chevron-down'/>                                                  
                            </Button>}>
                            <li>
                                <Link to='/education'>
                                    {I18n.t('navbar.education')}
                                </Link>
                            </li>
                            <li>
                                <Link to='/work'>
                                    {I18n.t('navbar.work')}
                                </Link>                         
                            </li>
                        </Dropdown>
                        <Dropdown trigger={
                            <Button>{I18n.t('language') }
                                <FontAwesome className="navIcon" name='chevron-down'/>
                            </Button>}>                          
                            <LanguageSwitcherComponent />
                        </Dropdown>
                    </ul>
                    <ul id="mobile-demo">
                        <li>
                            <a href='https://www.facebook.com/lagozny/' target='_blank'>{I18n.t('navbar.news')}</a>
                        </li>
                        <li>
                            <Link to='/about'>
                                {I18n.t('navbar.aboutMe')}
                            </Link>
                        </li>
                        <li>
                       
                            <Link to='/contact'>
                                {I18n.t('navbar.contact')}
                            </Link>
                       
                        </li>
                        <li>
                      
                            <Link to='/media'>
                                {I18n.t('navbar.media')}
                            </Link>
                        </li>
                        <Dropdown trigger={
                            <Button className="sideNavButton">{I18n.t('navbar.experience')}
                                <FontAwesome className="navIcon" name='chevron-down'/>
                            </Button>}>
                            <li>
                                <Link to='/education'>
                                    {I18n.t('navbar.education')}
                                </Link>
                            </li>
                            <li>
                                <Link to='/work'>
                                    {I18n.t('navbar.work')}
                                </Link>                         
                            </li>
                        </Dropdown>
                        <Dropdown trigger={
                            <Button className="sideNavButton">{I18n.t('language') }
                                <FontAwesome className="navIcon" name='chevron-down'/>
                            </Button>}>                          
                            <LanguageSwitcherComponent />
                        </Dropdown>
                        
                    </ul>


                </Navbar>
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

export default connect(mapStateToProps, matchActionsToDispatch)(NavbarComponent)
