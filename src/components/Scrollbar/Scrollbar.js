import React from 'react';
import injectSheet from 'react-jss';

import stylesheet from './stylesheet';

export const Scrollbar = ({ classes, children, id }) => <div id={id} className={classes.Scrollbar}>
    {children}
</div>

export default injectSheet(stylesheet)(Scrollbar)