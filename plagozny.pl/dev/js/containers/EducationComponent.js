import React, {Component} from 'react';
import TableComponent from './TableComponent';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class EducationComponent extends Component {
    render() {       
     
        return (
            <div className='paddingBottom' >                
                <TableComponent title="footballDevelopementTitle" education="education" icon="graduation-cap"/>
                <TableComponent title="educationTitle" education="footballDevelopement" icon="graduation-cap"/>
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
