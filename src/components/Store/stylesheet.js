export default {
    Store: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '1rem',
        '&>a': {
            display: 'block',
            height: '35px',
            '&>.logo': {
                height: '100%',
                marginTop: '5px',
                maxHeight: '30px',
                maxWidth: '100%',
                paddingLeft: 0,
                paddingRight: 0,
                verticalAlign: 'middle',
            }
        },
        '&>.title-text': {
            color: '#40485a',
            marginTop: '10px',
            fontSize: '0.75rem',
            whiteSpace: 'nowrap'
        },
        '&>.subtitle-text': {
            color: '#a6aec0',
            fontSize: '0.5rem',
            minHeight: '1.8em'
        }
    }
}