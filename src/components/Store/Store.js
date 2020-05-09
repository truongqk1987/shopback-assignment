import React from 'react';
import injectSheet from 'react-jss';

import stylesheet from './stylesheet';

const Store = ({ displayText, alt, logoUrl, oldDisplayText, classes, shortname }) => <div className={classes.Store}>
        <a title={alt} href={`https://www.goshopback.vn${shortname}`}>
            <img className="logo" alt={alt} src={logoUrl}/>
        </a>
        <div className="title-text">{displayText}</div>
        <div className="subtitle-text">{oldDisplayText}</div>
    </div>

export default injectSheet(stylesheet)(Store);