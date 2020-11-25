import React, {Component} from 'react';
import { Col, Row } from 'react-materialize';
import { translationObject } from '../../dictionary/translations';
import { I18n } from 'react-redux-i18n';
import PropTypes from 'prop-types';
import oleImg from '../../../images/ole.png'
import iplaImg from '../../../images/ipla.png';
import polsatSportImg from '../../../images/polsatsport.png';
import julenImg from '../../../images/julen.png';
import legiaImg from '../../../images/legia.png';
import legianetImg from '../../../images/legianet.png';
import stpnImg from '../../../images/stpn.png';
import theTimesImg from '../../../images/theTimes.png';
import tokImg from '../../../images/tok.png';
import eurosportImg from '../../../images/eurosport.png';
import polsatImg from '../../../images/polsat.png';
import baltyckiFutbolImg from '../../../images/baltyckiFutbol.png';
import newonceImg from '../../../images/newonce.png';
import asystentImg from '../../../images/asystent.png';

class MediaItemComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            imageToLoad: ''
        }
    }

    componentWillMount() {        
        switch(this.props.imgName){            
            case "ole":            
                this.setState({
                    imageToLoad: oleImg
                })
                break;
            case "ipla":            
                this.setState({
                    imageToLoad: iplaImg
                })
                break;
            case "polsatSport":            
                this.setState({
                    imageToLoad: polsatSportImg
                })
                break;
            case "julen":            
                this.setState({
                    imageToLoad: julenImg
                })
                break;
            case "legia":            
                this.setState({
                    imageToLoad: legiaImg
                })
                break;
            case "legianet":            
                this.setState({
                    imageToLoad: legianetImg
                })
                break;
            case "stpn":            
                this.setState({
                    imageToLoad: stpnImg
                })
            break;
                case "theTimes":            
                this.setState({
                    imageToLoad: theTimesImg
                })
                break;
            case "tok":            
                this.setState({
                    imageToLoad: tokImg
                })
                break;
            case "eurosport":            
                this.setState({
                    imageToLoad: eurosportImg
                })
                break;    
            case "polsat":            
                this.setState({
                    imageToLoad: polsatImg
                })
                break;
            case "baltyckiFutbol":            
                this.setState({
                    imageToLoad: baltyckiFutbolImg
                })
                break;          
            case "newonce":            
                this.setState({
                    imageToLoad: newonceImg
                })
                break;          
            case "asystent":            
                this.setState({
                    imageToLoad: asystentImg
                })
                break;          

        } 
    }
    render() {       

        // let articleLink = <p></p>
        let articlesLinksProps = this.props.articleLink
        let articlesLinks = Object.keys(articlesLinksProps).map( (key,id) => {
            return articlesLinksProps[key].length > 0 ? <a href={articlesLinksProps[key]} target="_blank" key={id}> {I18n.t('readFulfArticle').toUpperCase()} </a> : <p></p>;   
        })
        
        
        // let articleLink = this.props.articleLink.length > 0 ? <a href={this.props.articleLink} target="_blank"> {I18n.t('readFulfArticle').toUpperCase()} </a> : <p></p>;   
        return (
            <div>                    
                <Row> 
                    <Col  className="myMediaItem" l={8} m={10} s={12} offset="m1 l2">
                        <Col s={4} m={2} >
                            <div className="helper">
                                <img src={this.state.imageToLoad} className="centeredImg" />
                            </div>
                        </Col>
                        <Col s={8} m={10}>
                            <h5>{this.props.title}</h5>
                            <p>{this.props.description}</p>
                            <div>
                                {articlesLinks} 
                            </div>
                            
                        </Col>
                    </Col>
                </Row> 
            </div>
           
        );
    }
}

MediaItemComponent.PropTypes = {
    imgName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    // articleLink: PropTypes.array
};

export default MediaItemComponent;
