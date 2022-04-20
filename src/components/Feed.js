import { Box, Grid } from '@mui/material'
import React from 'react'
import Post from './Post'

const Feed = () => {
	return (
		<Box sx={{ p: 1.5, pt: 9 }}>
			<Grid container gap={2}>
				<Grid item sm={6}>
					<Post />
				</Grid>
				<Grid item sm={6}>
					<Post />
				</Grid>
				<Grid item sm={6}>
					<Post />
				</Grid>
				<Grid item sm={6}>
					<Post />
				</Grid>
			</Grid>
		</Box>
	)
}

export default Feed