import React from 'react'
import Post from './Post'
import { Box, Grid } from '@mui/material'

const Feed = () => {
	return (
		<Box sx={{ p: 1.5, pt: 9 }}>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={6}>
					<Post />
				</Grid>
				<Grid item xs={12} sm={6}>
					<Post />
				</Grid>
				<Grid item xs={12} sm={6}>
					<Post />
				</Grid>
				<Grid item xs={12} sm={6}>
					<Post />
				</Grid>
			</Grid>
		</Box>
	)
}

export default Feed