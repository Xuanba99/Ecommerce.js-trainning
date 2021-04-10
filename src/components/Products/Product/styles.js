import { easing, makeStyles } from '@material-ui/core/styles';
import { ScatterPlot } from '@material-ui/icons';

export default makeStyles(() => ({
    root: {
        maxWidth: '100%',
        maxHeight: '400px'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
        transition: 'all 0.1s ease-in',
        '&:hover': {
            transform: 'scale(1.1)'
        }
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: '-5px'
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    nameProduct: {
        fontSize: '17px',
        height: '80px',
    }
}));