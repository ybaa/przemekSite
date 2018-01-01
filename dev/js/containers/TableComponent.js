import React, {Component} from 'react';
import { Table, Col, Row, Icon } from 'react-materialize';
import { I18n } from 'react-redux-i18n';
import PropTypes from 'prop-types';
import stpnImg from '../../../images/stpn.png';
import athleticClubImg from '../../../images/athleticClub.png';
import malagaImg from '../../../images/malaga.png';
import espanolImg from '../../../images/espanol.png';
import pzpnImg from '../../../images/pzpn.png';
import tottenhamImg from '../../../images/tottenham.png';
import polandImg from '../../../images/poland.png';
import spainImg from '../../../images/spain.png';
import englandImg from '../../../images/england.png';
import ajaxImg from '../../../images/ajax.png';
import awfImg from '../../../images/awf.png';
import wssImg from '../../../images/wss.png';
import soccerServicesImg from '../../../images/soccerServices.png';
import smsImg from '../../../images/sms.png';
import sportimaImg from '../../../images/sportima.png';
import legiaImg from '../../../images/legia.png';
import FontAwesome from 'react-fontawesome';

class TableComponent extends Component {

    
    render() {       
       
        let tableContent = I18n.t(this.props.education).map( (current) => {
            let clubImg = '';
            let countryImg = '';            
            switch (current.country) {
                case 'poland':
                    countryImg = <img src={polandImg} /> 
                    break;
                case 'spain':
                    countryImg = <img src={spainImg} />
                    break;
                case 'england':
                    countryImg = <img src={englandImg} />
                    break;
                default:
                    countryImg='';
                    break;
            }

            switch (current.logo) {
                case 'athleticClub':
                    clubImg = <img src={athleticClubImg} />
                    break;
                case 'legia':
                    clubImg = <img src={legiaImg} />
                    break;
                case 'stpn':
                    clubImg = <img src={stpnImg} />
                    break;
                case 'malaga':
                    clubImg = <img src={malagaImg} />
                    break;
                case 'espanol':
                    clubImg = <img src={espanolImg} />
                    break;
                case 'soccerServices':
                    clubImg = <img src={soccerServicesImg} />
                    break;
                case 'tottenham':
                    clubImg = <img src={tottenhamImg} />
                    break;
                case 'pzpn':
                    clubImg = <img src={pzpnImg} />
                    break;
                case 'ajax':
                    clubImg = <img src={ajaxImg} />
                    break;                    
                case 'awf':
                    clubImg = <img src={awfImg} />
                    break;
                case 'wss':
                    clubImg = <img src={wssImg} />
                    break;
                case 'sms':
                    clubImg = <img src={smsImg} />
                    break;
                case 'sportima':
                    clubImg = <img src={sportimaImg} />
                    break;              
                case 'none':
                    clubImg = ''
                    break;

                default:
                    clubImg='';
                    break;
            }

            return <tr>
                    <td> {countryImg} </td>
                    <td> {clubImg} </td>                    
                    <td> {current.description}  </td>
                    <td> {current.date}  </td>
                </tr>
        });
        
        return (
            <div>    
                <Row>                    
                    <Col s={10} m={8} l={8} offset="s1 m2 l2">
                    <Row className='animated fadeIn'> 
                        <Col>
                            <FontAwesome className="edu" name={this.props.icon}/>                                                
                        </Col>
                        <Col>
                            <h2> {I18n.t(this.props.title)} </h2>
                        </Col>
                    </Row>
                    <Row className='animated slideInUp'>
                        <Table className="striped centered">
                          

                            <tbody>
                                {tableContent}
                            </tbody>
                            </Table>
                            </Row>
                    </Col>

                </Row>                          
            </div>
           
        );
    }
}

TableComponent.PropTypes = {
    title: PropTypes.string.isRequired,
    education: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    
}

export default TableComponent;
