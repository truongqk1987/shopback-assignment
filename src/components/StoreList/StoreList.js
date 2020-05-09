import React from 'react';
import { Row, Col } from 'antd';

import { Store } from 'components';

const StoreList = ({ stores, category }) => {
    const filteredStores = stores.filter(store => store.categoryId === category.id)
    return <Row>
        {
            filteredStores.map(store => <Col key={store.id} xs={8} lg={4}><Store {...store} /></Col>)
        }
    </Row>
}

export default StoreList;