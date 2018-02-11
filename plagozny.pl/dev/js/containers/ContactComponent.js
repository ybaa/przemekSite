import React, { Component } from 'react';
import { Row, Col, Button, Icon, Input } from 'react-materialize';
import { I18n, i18nReducer } from 'react-redux-i18n';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';
import axios from 'axios';

class ContactComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            subject: '',
            content: ''
        }
    }
    render() {

        return (
             <div className='paddingBottom' >
        
                <Row>
                    <Col offset="m2 l2 s1" m={8} l={8} s={10} className='animated fadeInUp'>
                        <Input type="email" label={I18n.t('contact.yourEmail')} 
                            onChange={ (e) => {                                                         
                                this.setState({
                                    email: e.target.value
                                })
                            }} 
                        />
                    </Col>
                </Row>
                <Row>
                    <Col offset="m2 l2 s1" m={8} l={8} s={10} className='animated fadeInUp'>
                        <Input type='text' label={I18n.t('contact.subject')} m={12} s={12} 
                             onChange={ (e) => {                                                         
                                this.setState({
                                    subject: e.target.value
                                })
                            }} 
                        />
                    </Col>
                </Row>
                <Row>
                    <Col offset="m2 l2 s1" m={8} l={8} s={10} className='animated fadeInUp'>
                        <div className="input-field col s12">
                            <textarea id="textarea1" className="materialize-textarea" 
                             onChange={ (e) => {                                                         
                                this.setState({
                                    content: e.target.value
                                })
                            }} 
                            ></textarea>
                            <label for="textarea1">{I18n.t("contact.emailContent")}</label>
                        </div>
                    </Col>
                </Row>
                <Row className='animated fadeInUp'>
                    <Col offset="m5 l5 s1" m={2} l={2} s={10}>
                        <Button waves='light' className="contactButton green" 
                            onClick={ () => {           
                                axios({
                                    method: 'post',
                                    url: 'https://us-central1-plagozny-943d2.cloudfunctions.net/sendmail',
                                    data: {
                                        email: this.state.email,
                                        subject: this.state.subject,
                                        content: this.state.content  
                                    }
                                  }).then(function (response) {
                                    console.log(response);
                                  })
                                  .catch(function (error) {
                                    console.log(error);
                                  });                         
                                  
                            }}>
                            {I18n.t('contact.send')}<FontAwesome className="buttonIcon" name='angle-right'/>
                        </Button>
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
