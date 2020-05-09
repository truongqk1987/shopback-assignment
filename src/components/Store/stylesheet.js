export default {
    Store: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '1rem',
        cursor: 'pointer',
        '&:hover': {
            background: 'rgba(64,72,90,.02)',
        },
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
        '@media only screen and (max-width: 600px)': {
            '&>.title-text': { color: 'red' }
        },
        '&>.subtitle-text': {
            color: '#a6aec0',
            fontSize: '0.7rem',
            minHeight: '1.8em'
        }
    }
}