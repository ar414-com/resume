import {createMuiTheme} from '@material-ui/core/styles';

export default createMuiTheme({
    palette: {
        primary: {
            main: process.env.REACT_APP_THEME_COLOR_PRIMARY,
        },
        secondary: {
            main: process.env.REACT_APP_THEME_COLOR_SECONDARY,
        },
    },
});
