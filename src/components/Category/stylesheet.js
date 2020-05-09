export default {
    Category: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '8px 0',
        flexGrow: 1,
        borderLeft: '1px solid #f5f5f5',
        borderRight: '1px solid #f5f5f5',
        cursor: 'pointer',
        '&.isActive': {
            color: 'red',
        },
        '&:first-child, &:last-child': {
            borderLeft: 0,
            borderRight: 0
        },
        '&>img': {
            margin: '5px 0',
            height: '24px',
            width: '24px'
        },
        '&:hover': {
            color: 'red',
        },
        '@media screen and (min-width: 1280px)': {
            '&:hover': {
                color: 'red',
                borderBottom: '2px solid red'
            },
            '&.isActive': {
                borderBottom: '2px solid red'
            },
        }
        
    }
}