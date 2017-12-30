import React, { Component } from 'react';
import { Parallax } from 'react-materialize';
import { I18n } from 'react-redux-i18n';
import PropTypes from 'prop-types';
import photo from '../../../images/omnie2.png';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class AboutMeComponent extends Component {
    render() {
        let paragraphs = I18n.t('aboutMe').map((item, id) => {
            return <p className="grey-text text-darken-3 lighten-3" key={id}>
                {item.p}
            </p>
        });
        return (
            <div>
                <div className="section white">
                    <div className="row container">
                        <h2 className="header">{I18n.t('aboutMeTitle')}</h2>
                        {paragraphs}
                    </div>
                </div>
                <Parallax imageSrc={photo} />
            </div>

        );
    }
}

function mapStateToProps(state) {
    return {
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

export default connect(mapStateToProps, matchActionsToDispatch)(AboutMeComponent)

