import { createMuiTheme } from '@material-ui/core/styles';
// import { indigo, red } from '@material-ui/core/colors';

const theme = createMuiTheme({
    color : {
        primary : 'red',
        secondary : 'indigo',
        error : 'amber'
    },
    typography : {
        fontFamily : 'Roboto'
    },
    shape : {
        borderRadius : 4,
        background : 'purple',
        textColor : 'white',
        border : 'black'
    }
})

export default theme;