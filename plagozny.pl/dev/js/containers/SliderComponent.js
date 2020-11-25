import React, {Component} from 'react';
import { Button, Icon, Slider, Slide} from 'react-materialize';
import { translationObject } from '../../dictionary/translations';
import { I18n } from 'react-redux-i18n';
import slideImg1 from '../../../images/1.png';
import slideImg2 from '../../../images/2.png';
import slideImg3 from '../../../images/3.png';
import slideImg4 from '../../../images/4.png';
import slideImg5 from '../../../images/55.png';
import slideImg6 from '../../../images/6.png';
import FontAwesome from 'react-fontawesome';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class SliderComponent extends Component {
    render() {       
        return (
            <div>                
                <Slider className="sliderStyle"> 
                    <Slide
                        src={slideImg1}
                        title={I18n.t('slider.name')}
                        placement="left">
                        <div>
                            {I18n.t('slider.title')}
                        </div>                        
                        <div>
                        <a href='https://www.facebook.com/lagozny/' target='_blank'>
                            <Button waves='light' href='http://www.google.com' target="_blank"><FontAwesome name='facebook-square'/>{I18n.t('slider.linkToFacebook')}</Button>
                        </a>
                            
                        </div>
                        
                    </Slide>
                    <Slide
                        src={slideImg6}
                        title={I18n.t('slider.name')}
                        placement="center">
                        <div>
                            {I18n.t('slider.title')}
                        </div>                        
                        <div>
                        <a href='https://www.facebook.com/lagozny/' target='_blank'>
                            <Button waves='light' href='http://www.google.com' target="_blank"><FontAwesome name='facebook-square'/>{I18n.t('slider.linkToFacebook')}</Button>
                        </a>
                            
                        </div>
                        
                    </Slide>                    
                     <Slide
                        src={slideImg4}
                        title={I18n.t('slider.name')}
                        placement="left">
                        <div>
                            {I18n.t('slider.title')}
                        </div>                        
                        <div>
                        <a href='https://www.facebook.com/lagozny/' target='_blank'>
                            <Button waves='light' href='http://www.google.com' target="_blank"><FontAwesome name='facebook-square'/>{I18n.t('slider.linkToFacebook')}</Button>
                        </a>
                        </div>
                    </Slide>          
                    <Slide
                        src={slideImg2}
                        title={I18n.t('slider.name')}
                        placement="left">
                        <div>
                            {I18n.t('slider.title')}
                        </div>                        
                        <div>
                        <a href='https://www.facebook.com/lagozny/' target='_blank'>
                            <Button waves='light' href='http://www.google.com' target="_blank"><FontAwesome name='facebook-square'/>{I18n.t('slider.linkToFacebook')}</Button>
                        </a>
                        </div>
                    </Slide>
                    <Slide
                        src={slideImg3}
                        title={I18n.t('slider.name')}
                        >
                        <div>
                            {I18n.t('slider.title')}
                        </div>                        
                        <div>
                        <a href='https://www.facebook.com/lagozny/' target='_blank'>
                            <Button waves='light' href='http://www.google.com' target="_blank"><FontAwesome name='facebook-square'/>{I18n.t('slider.linkToFacebook')}</Button>
                        </a>
                        </div>
                    </Slide>
                    <Slide
                        src={slideImg5}
                        title={I18n.t('slider.name')}
                        placement="left">                        
                        <div>
                            {I18n.t('slider.title')}
                        </div>                        
                        <div>
                        <a href='https://www.facebook.com/lagozny/' target='_blank'>
                            <Button waves='light' href='http://www.google.com' target="_blank"><FontAwesome name='facebook-square'/>{I18n.t('slider.linkToFacebook')}</Button>
                        </a>
                        </div>
                    </Slide>
                </Slider>
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

export default connect(mapStateToProps, matchActionsToDispatch)(SliderComponent)