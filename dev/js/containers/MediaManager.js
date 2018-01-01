import React, {Component} from 'react';
import { Col, Row } from 'react-materialize';
import { translationObject } from '../../dictionary/translations';
import { I18n } from 'react-redux-i18n';
import MediaItemComponent from '../containers/MediaItemComponent';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class MediaManager extends Component {

    render() {       

        let mediaItems = I18n.t('media').map( (item, id) => {
            return  <MediaItemComponent 
                imgName= {item.imgName} 
                title={item.title}
                description={item.description}
                articleLink={item.link}
                key={id}
        />  
        });
        
        return (
            <div className='animated slideInUp'>                    
                {mediaItems}
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

export default connect(mapStateToProps, matchActionsToDispatch)(MediaManager)
