import React from 'react';
import SliderComponent from '../containers/SliderComponent';
import NavbarComponent from '../containers/NavbarComponent';
import HomeComponent from '../containers/HomeComponent';
import MediaItemComponent from '../containers/MediaItemComponent';
import MediaManagerComponent from '../containers/MediaManager';
import AboutMeComponent from '../containers/AboutMeComponent';
import FooterComponent from '../containers/FooterComponent';
import { translationObject } from '../../dictionary/translations';
import { I18n } from 'react-redux-i18n';
import { Row, Col } from 'react-materialize';
import EducationComponent from '../containers/EducationComponent';
import WorkComponent from '../containers/WorkComponent';
import ContactComponent from '../containers/ContactComponent';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
require('../../scss/style.scss');
require('../../scss/animate.css');


const App = () => (
    
         <Router>
           <div className='wrapper'>
              <div>
                <NavbarComponent />              
                <SliderComponent />
                
                <Route exact path="/" component={HomeComponent} />
                <Route path="/about" component={AboutMeComponent}/>
                <Route path="/media" component={MediaManagerComponent}/>
                <Route path="/contact" component={ContactComponent}/>
                <Route path="/education" component={EducationComponent}/>
                <Route path="/work" component={WorkComponent}/>        
              </div>

              <div>
                <FooterComponent />        
              </div>
            </div>
        </Router> 


       
        
    
);

export default App;
