import React, {Component} from 'react';
import { Icon, Button } from 'react-materialize';
import { translationObject } from '../../dictionary/translations';
import { I18n } from 'react-redux-i18n';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

class CardComponent extends Component {
    render() {       
        let link = '';
        switch (this.props.name) {
            case I18n.t('navbar.aboutMe'):
                link = <Link to='/about'>
                    <Button waves='light' className={this.props.buttonColor}>{I18n.t('card.navigateToTab')}<Icon right>keyboard_arrow_right</Icon></Button>
                </Link>                
                break;
            case I18n.t('navbar.experience'):                
                link = <Link to='/work'>
                    <Button waves='light' className={this.props.buttonColor}>{I18n.t('card.navigateToTab')}<Icon right>keyboard_arrow_right</Icon></Button>
                </Link>
                break;
            case I18n.t('navbar.media'):                
                link = <Link to='/media'>
                    <Button waves='light' className={this.props.buttonColor}>{I18n.t('card.navigateToTab')}<Icon right>keyboard_arrow_right</Icon></Button>
                </Link>
                break;
            case I18n.t('navbar.contact'):
                link = <Link to='/contact'>
                    <Button waves='light' className={this.props.buttonColor}>{I18n.t('card.navigateToTab')}<Icon right>keyboard_arrow_right</Icon></Button>
                </Link>                
                break;
            case I18n.t('navbar.news'):                
                link = <a href='https://www.facebook.com/lagozny/' target='_blank'>
                    <Button waves='light' className={this.props.buttonColor}>{I18n.t('card.navigateToTab')}<Icon right>keyboard_arrow_right</Icon></Button>                   
                </a>
                break;
            default:
                break;
        }
        return (
           <div>               
                <div className="center myCard">
                    <FontAwesome name={this.props.iconName}/>                                 
                    <h5>{this.props.name}</h5>                                            
                    {link}
                </div>
            </div>
           
        );
    }
}

CardComponent.PropTypes = {
    iconName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    buttonColor: PropTypes.string
};

export default CardComponent;
