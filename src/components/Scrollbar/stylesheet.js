export default {
    Scrollbar: {
        overflowX: 'auto',
        borderBottom: '1px solid #f5f5f5',
        '&::-webkit-scrollbar': {
            width: '4px',
            height: '3px',
            backgroundColor: '#F5F5F5'
        },
        '&::-webkit-scrollbar-track': {
          '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.3)',
            backgroundColor: '#F5F5F5'
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#000000',
            border: '2px solid black'
        }
    },
}