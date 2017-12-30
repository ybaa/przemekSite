import React, {Component} from 'react';
import { Col, Row } from 'react-materialize';
import { I18n } from 'react-redux-i18n';
import PropTypes from 'prop-types';
import CardComponent from './CardComponent';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class HomeComponent extends Component {
    render() {       
        console.log('render home')
        return (
            <Row className="cards paddingBottom">            
                <Col s={12} l={2} m={2} offset="l1 m1" >
                    <CardComponent name={I18n.t('navbar.news')} iconName='futbol-o' buttonColor="yellow" /> 
                </Col>
                <Col s={12} l={2} m={2}>
                    <CardComponent name={I18n.t('navbar.aboutMe')} iconName="user" buttonColor="blue" /> 
                </Col>
                <Col s={12} l={2} m={2}>
                    <CardComponent name={I18n.t('navbar.experience')} iconName="clipboard" buttonColor="green" /> 
                </Col>
                <Col s={12} l={2} m={2}>
                    <CardComponent name={I18n.t('navbar.media')} iconName="video-camera" buttonColor="red" /> 
                </Col>
                <Col s={12} l={2} m={2}>
                    <CardComponent name={I18n.t('navbar.contact')}iconName="envelope" buttonColor="brown" /> 
                </Col>
            </Row> 
           
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

export default connect(mapStateToProps, matchActionsToDispatch)(HomeComponent)
