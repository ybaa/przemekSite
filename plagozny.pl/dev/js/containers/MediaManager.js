import React, {Component} from 'react';
import { Col, Row } from 'react-materialize';
import { translationObject } from '../../dictionary/translations';
import { I18n } from 'react-redux-i18n';
import MediaItemComponent from '../containers/MediaItemComponent';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class MediaManager extends Component {

    render() {       
        let media = I18n.t('media');
        let mediaItems = Object.keys(media).map( (item, id) => {
            return  <MediaItemComponent 
                imgName= {media[item].imgName} 
                title={media[item].title}
                description={media[item].description}
                articleLink={media[item].link}
                key={id}
        />  
        });
        
        return (
            <div className='animated slideInUp paddingBottom'>                    
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