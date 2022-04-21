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
			<Grid container spacing={1}>
				<Grid item width={200}>
					<Leftbar />
				</Grid>
				<Grid item sx={{ width: 'calc(100% - 500px)', borderLeft: '1px solid divider', borderRight: '1px solid divider' }}>
					<Feed />
				</Grid>
				<Grid item width={300}>
					<Rightbar />
				</Grid>
			</Grid>
			<Add />
		</>
	)
}

export default App