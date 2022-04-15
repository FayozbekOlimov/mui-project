import React from 'react'
import './App.css'
import { Grid } from '@mui/material';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import Leftbar from './components/Leftbar'
import Rightbar from './components/Rightbar'

const App = () => {
	return (
		<>
			<Navbar />
			<Grid container>
				<Grid item sm={2}>
					<Leftbar />
				</Grid>
				<Grid item sm={7}>
					<Feed />
				</Grid>
				<Grid item sm={3}>
					<Rightbar />
				</Grid>
			</Grid>
		</>
	)
}

export default App