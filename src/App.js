import React, { useState } from 'react'
import './App.css'
import { createTheme, Grid, ThemeProvider } from '@mui/material';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import Leftbar from './components/Leftbar'
import Rightbar from './components/Rightbar'
import { Add } from './components/Add';

const App = () => {
	const [mode, setMode] = useState('light');
	const darkTheme = createTheme({
		palette: { mode }
	});

	return (
		<ThemeProvider theme={darkTheme}>
			<Navbar setMode={setMode} mode={mode} />
			<Grid container>
				<Grid item width={{ xs: 48, sm: 200 }}>
					<Leftbar mode={mode} />
				</Grid>
				<Grid item sx={{
					width: {
						xs: 'calc(100% - 48px)',
						sm: 'calc(100% - 200px)',
						md: 'calc(100% - 500px)'
					}
				}}>
					<Feed />
				</Grid>
				<Grid item
					width={{ xs: 0, md: 300 }}
					display={{ xs: 'none', md: 'block' }}
				>
					<Rightbar />
				</Grid>
			</Grid>
			<Add />
		</ThemeProvider>
	)
}

export default App