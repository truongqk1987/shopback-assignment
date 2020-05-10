import React from 'react';
import injectSheet from 'react-jss';
import { Col, Row } from 'antd';

import {optimizeStoreDisplayTex} from 'utils';

import stylesheet from './stylesheet';

export const Store = ({ displayText, alt, logoUrl, oldDisplayText, classes, shortname }) => {
    
    return <div className={classes.Store}>
        <a title={alt} href={`https://www.goshopback.vn${shortname}`}>
            <img className="logo" alt={alt} src={logoUrl}/>
        </a>
        <Row className="title-text">
            <Col xs={0} lg={24}>{displayText}</Col>
            <Col xs={24} lg={0}>{optimizeStoreDisplayTex(displayText)}</Col>
        </Row>
        <div className="subtitle-text">{oldDisplayText}</div>
    </div>
}

export default injectSheet(stylesheet)(Store);