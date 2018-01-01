import React, {Component} from 'react';
import TableComponent from './TableComponent';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class WorkComponent extends Component {
    render() {       
     
        return (
            <div className='paddingBottom' >                
                <TableComponent title="workTitle" education="works" icon="futbol-o"/>
                <TableComponent title="scoutTitle" education="scouting" icon="eye"/>
                <TableComponent title="otherWorkTitle" education="otherWorks" icon="external-link"/>
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
