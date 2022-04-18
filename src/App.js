import React from 'react'
import './App.css'
import { Grid } from '@mui/material';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import Leftbar from './components/Leftbar'
import Rightbar from './components/Rightbar'
import { Add } from './components/Add';

const App = () => {
	return (
		<>
			<Navbar />
			<Grid container>
				<Grid item sm={2} xs={2}>
					<Leftbar />
				</Grid>
				<Grid item sm={7} xs={10}>
					<Feed />
				</Grid>
				<Grid item sm={3} xs={0}>
					<Rightbar />
				</Grid>
			</Grid>
			<Add />
		</>
	)
}

export default App