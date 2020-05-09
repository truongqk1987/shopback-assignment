import React from 'react';
import injectSheet from 'react-jss';

import stylesheet from './stylesheet';

const Scrollbar = ({ classes, children }) => <div className={classes.Scrollbar}>
    {children}
</div>

export default injectSheet(stylesheet)(Scrollbar)