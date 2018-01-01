import React, {Component} from 'react';
import TableComponent from './TableComponent';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Button, Row, Col } from 'react-materialize';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';
import { I18n } from 'react-redux-i18n';

class WorkComponent extends Component {
    render() {       
     
        return (
            <div className='paddingBottom' >                
                <TableComponent title="workTitle" education="works" icon="futbol-o"/>
                <TableComponent title="scoutTitle" education="scouting" icon="eye"/>
                <TableComponent title="otherWorkTitle" education="otherWorks" icon="external-link"/>
                <Row className='animated fadeIn'>
                    <Col s={12} m={2} offset='m5'> 
                    <Link to='/education'>
                        <Button waves='light' className='contactButton red'>{I18n.t('navigateToEducation')}<FontAwesome className="buttonIcon" name='angle-right'/></Button>
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

export default connect(mapStateToProps, matchActionsToDispatch)(WorkComponent)
