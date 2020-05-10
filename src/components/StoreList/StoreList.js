import React from 'react';
import { Row, Col } from 'antd';
import injectSheet from 'react-jss';

import { Store } from 'components';

import stylesheet from './stylesheet';

export const StoreList = ({ stores, category, classes }) => {
    const filteredStores = stores.filter(store => store.categoryId === category.id)
    return <Row className={classes.StoreList}>
        {
            filteredStores.map((store, index) => <Col key={store.id} xs={index > 7 ? 0 : 8} lg={4}><Store {...store} /></Col>)
        }
        <Col className="all-stores" xs={8} lg={0} >
            <a href="https://www.goshopback.vn/tat-ca-doi-tac">All Stores</a>
        </Col>
    </Row>
}

export default injectSheet(stylesheet)(StoreList);