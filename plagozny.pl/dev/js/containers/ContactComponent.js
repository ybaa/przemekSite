import React, {Component} from 'react';
import { Row, Col, Button, Icon, Input } from 'react-materialize';
import { I18n, i18nReducer } from 'react-redux-i18n';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class ContactComponent extends Component {
    render() {       
       
        return (
            <div>
            <Row>
                <Col offset="m2 l2 s1" m={8} l={8} s={10}>
                    <div className='contactStyle'>                
                    <h5>{I18n.t('contact.needContact')}</h5>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col offset="m2 l2 s1" m={8} l={8} s={10}>
                    <Input type="email" label={I18n.t('contact.yourEmail')}/>
                </Col>
            </Row>
            <Row>
                <Col offset="m2 l2 s1" m={8} l={8} s={10}>
                    <Input type='text' label={I18n.t('contact.subject')} m={12} s={12}/>
                </Col>
            </Row>
              <Row>
              <Col offset="m2 l2 s1" m={8} l={8} s={10}>
                <div className="input-field col s12">
                    <textarea id="textarea1" className="materialize-textarea" ></textarea>
                    <label for="textarea1">{I18n.t("contact.emailContent")}</label>
                </div>
              </Col>
          </Row>
          <Row>
              <Col offset="m5 l5 s1" m={2} l={2} s={10}>
                    <Button waves='light' className="green">{I18n.t('contact.send')}<Icon right>keyboard_arrow_right</Icon></Button>   
              </Col>
          </Row>
         
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

export default connect(mapStateToProps, matchActionsToDispatch)(ContactComponent)

