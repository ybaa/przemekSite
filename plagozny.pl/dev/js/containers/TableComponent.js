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
import latviaImg from '../../../images/latvia.png';
import englandImg from '../../../images/england.png';
import equadorImg from '../../../images/equador.png';
import venezuelaImg from '../../../images/venezuela.png';
import ajaxImg from '../../../images/ajax.png';
import awfImg from '../../../images/awf.png';
import wssImg from '../../../images/wss.png';
import tukumsImg from '../../../images/tukums.png';
import soccerServicesImg from '../../../images/soccerServices.png';
import smsImg from '../../../images/sms.png';
import legiaImg from '../../../images/legia.png';
import nikeImg from '../../../images/nike.png';
import scoutsForFootballImg from '../../../images/scoutsForFootball.png';
import hfImg from '../../../images/hf.png';
import atleticoImg from '../../../images/atletico.png';
import ekstraklasaImg from '../../../images/ekstraklasa.png';
import asystentImg from '../../../images/asystent.png';
import mzpnImg from '../../../images/mzpn.png';
import mbpImg from '../../../images/mbp.png';
import losCarmenImg from '../../../images/losCarmen.png';
import duranImg from '../../../images/duran.png';
import deductorImg from '../../../images/deductor.png';
import FontAwesome from 'react-fontawesome';

class TableComponent extends Component {

    
    render() {       
        let content = I18n.t(this.props.education);
        let tableContent = Object.keys(content).map( (current) => {
            let clubImg = '';
            let countryImg = '';            
            switch (content[current].country) {
                case 'poland':
                    countryImg = <img src={polandImg} /> 
                    break;
                case 'spain':
                    countryImg = <img src={spainImg} />
                    break;
                case 'england':
                    countryImg = <img src={englandImg} />
                    break;
                case 'latvia':
                    countryImg = <img src={latviaImg} />
                    break;
                case 'equador':
                    countryImg = <img src={equadorImg} />
                    break;
                case 'venezuela':
                    countryImg = <img src={venezuelaImg} />
                    break;
                default:
                    countryImg='';
                    break;
            }

            switch (content[current].logo) {
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
                case 'nike':
                    clubImg = <img src={nikeImg} />
                    break;    
                case 'scoutsForFootball':
                    clubImg = <img src={scoutsForFootballImg} />
                    break;     
                case 'atletico':
                    clubImg = <img src={atleticoImg} />
                    break;     
                case 'hf':
                    clubImg = <img src={hfImg} />
                    break;    
                case 'tukums':
                    clubImg = <img src={tukumsImg} />
                    break;    
                case 'ekstraklasa':
                    clubImg = <img src={ekstraklasaImg} />
                    break;          
                case 'asystent':
                    clubImg = <img src={asystentImg} />
                    break;          
                case 'mzpn':
                    clubImg = <img src={mzpnImg} />
                    break;          
                case 'mbp':
                    clubImg = <img src={mbpImg} />
                    break;          
                case 'losCarmen':
                    clubImg = <img src={losCarmenImg} />
                    break;          
                case 'duran':
                    clubImg = <img src={duranImg} />
                    break;          
                case 'deductor':
                    clubImg = <img src={deductorImg} />
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
                    <td> {content[current].description}  </td>
                    <td> {content[current].date}  </td>
                </tr>
        });
        
        return (
            <div>    
                <Row>                    
                    <Col s={12} m={8} l={8} offset=" m2 l2">
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