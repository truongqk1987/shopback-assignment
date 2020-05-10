import React from 'react';
import injectSheet from 'react-jss';
import { Col }from 'antd'

import stylesheet from './stylesheet';

export const ShowAllStoresButton = ({ classes }) => <Col xs={0} lg={24}><div className={classes.ShowAllStoresButton}>
    <a href="https://www.goshopback.vn/tat-ca-doi-tac">View All Popular Stores</a>
</div></Col>

export default injectSheet(stylesheet)(ShowAllStoresButton)