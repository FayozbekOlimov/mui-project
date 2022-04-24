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
				<Grid item width={{ xs: 45, sm: 200 }}>
					<Leftbar />
				</Grid>
				<Grid item sx={{
					width: {
						xs: 'calc(100% - 45px)',
						sm: 'calc(100% - 200px)',
						md: 'calc(100% - 500px)'
					},
					borderLeft: '1px solid divider',
					borderRight: '1px solid divider'
				}}>
					<Feed />
				</Grid>
				<Grid item width={{ xs: 0, md: 300 }} display={{ xs: 'none', md: 'block' }}>
					<Rightbar />
				</Grid>
			</Grid>
			<Add />
		</>
	)
}

export default App