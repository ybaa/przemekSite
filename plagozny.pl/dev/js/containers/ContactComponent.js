import React, { Component } from 'react';
import { Row, Col, Button, Icon, Input } from 'react-materialize';
import { I18n, i18nReducer } from 'react-redux-i18n';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';
import axios from 'axios';

class ContactComponent extends Component {
    render() {
        return (
            <div className='paddingBottom' >
            <Row>
                <Col offset="m2 l2 s1" m={8} l={8} s={10} className='animated fadeInUp'>
                    <div className='contactStyle'>
                        <h5>{I18n.t('contact.needContact')}</h5>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col offset="m2 l2 s1" m={8} l={8} s={10} className='animated fadeInUp contactAdditional'>
                   <h5 > Przemysław Łagożny </h5>
                </Col>
            </Row>
            <Row>
                <Col offset="m2 l2 s1" m={8} l={8} s={10} className='animated fadeInUp contactAdditional'>
                   <h5><FontAwesome name='envelope-o' />      p.lagozny92@gmail.com </h5>
                </Col>
            </Row>
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
    return bindActionCreators(
        {

        },
        dispatch
    )
}

export default connect(mapStateToProps, matchActionsToDispatch)(ContactComponent)
