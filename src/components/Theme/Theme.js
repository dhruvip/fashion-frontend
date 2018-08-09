//MUI Theme imports and customization
import { createMuiTheme } from '@material-ui/core/styles';

const theme =  createMuiTheme({
	palette: {
		primary: {
			main: '#4ab2a9'
		},
		secondary: { 
			main: '#cae2d5'
		},
	},
  	typography: {
		  fontFamily: ['Courier']
	  }
});
console.log(theme)
export default theme;