import React from 'react';
import injectSheet from 'react-jss';

import stylesheet from './stylesheet';

const ShowAllStoresButton = ({ classes, children }) => <div className={classes.ShowAllStoresButton}>
    <a href="https://www.goshopback.vn/tat-ca-doi-tac">View All Popular Stores</a>
</div>

export default injectSheet(stylesheet)(ShowAllStoresButton)