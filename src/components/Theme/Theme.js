//MUI Theme imports and customization
import { createMuiTheme } from '@material-ui/core/styles';

const customTheme = createMuiTheme({
	palette: {
		primary: {
			main: '#4db6ac'
		},
		secondary: { 
			main: '#b9f6ca'
		},
	},
  	typography: {
		  fontFamily: ['Courier']
	  }
});

export default customTheme;