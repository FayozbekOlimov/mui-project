import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import { Add } from './Add'
import Post from './Post'

const Feed = () => {
	return (
		<Box sx={{ p: 1.5, pt: 9, border: '1px solid' }}>
			<Grid container gap={4}>
				<Grid item xs={12}>
					<Post />
				</Grid>
				<Grid item xs={12}>
					<Post />
				</Grid>
				<Grid item xs={12}>
					<Post />
				</Grid>
				<Grid item xs={12}>
					<Post />
				</Grid>
			</Grid>
			{/* <Add /> */}
		</Box>
	)
}

export default Feed