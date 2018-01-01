import React, {Component} from 'react';
import TableComponent from './TableComponent';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Button, Row, Col } from 'react-materialize';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';
import { I18n } from 'react-redux-i18n';

class EducationComponent extends Component {
    render() {       
     
        return (
            <div className='paddingBottom' >                
                <TableComponent title="footballDevelopementTitle" education="education" icon="graduation-cap"/>
                <TableComponent title="educationTitle" education="footballDevelopement" icon="graduation-cap"/>
                <Row className='animated fadeIn'>
                    <Col s={12} m={2} offset='m5'> 
                    <Link to='/work'>
                        <Button waves='light' className='contactButton red'>{I18n.t('navigateToWork')}<FontAwesome className="buttonIcon" name='angle-right'/></Button>
                    </Link>
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

export default connect(mapStateToProps, matchActionsToDispatch)(EducationComponent)
