/**
 * @author Daham Pathiraja
 * @email Daham.Pathiraja@syscolabs.com
 * @create date 2019-08-18 08:36:26
 * @modify date 2019-08-18 08:36:26
 * @desc Initialize the custom theme for the overall application.
 */

import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    palette: {
        type: 'light',
        primary: {
            main: "#00d8ff",
            contrastText: "#FFFFFF"
        },
        secondary: {
            main: "#00d8ff"
        },
        error: {
            main: "#D32F2F"
        }
    },
    typography: {
        fontSize: 12,
      }
});

