import React from 'react'
import Post from './Post'
import { Box, Grid } from '@mui/material'

const Feed = () => {
	return (
		<Box sx={{ p: 1, pt: 9 }}>
			<Grid container spacing={{ xs: 0, sm: 2 }} rowSpacing={2}>
				{posts.map((post, index) => (
					<Grid key={index} item xs={12} lg={6} xl={4} >
						<Post {...post} />
					</Grid>
				))}
			</Grid>
		</Box >
	)
}

export default Feed

const posts = [
	{
		header: {
			logo: 'https://randomuser.me/api/portraits/men/30.jpg',
			name: 'Daniel Leonard',
			date: 'January 14, 2022'
		},
		media: {
			img: 'https://source.unsplash.com/400x300/?laptop',
			alt: 'laptop',
			content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus perspiciatis in maxime labore eius quidem minima fuga possimus tenetur voluptates'
		},
		actions: {
			likes: 12,
			comments: 75
		}
	},
	{
		header: {
			logo: 'https://randomuser.me/api/portraits/men/31.jpg',
			name: 'Clive Reyes',
			date: 'February 3, 2022'
		},
		media: {
			img: 'https://source.unsplash.com/400x300/?camera',
			alt: 'camera',
			content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus perspiciatis in maximefuga possimus tenetur voluptates suscipit facilis hic alias ducimus, dolorem, necessitatibus'
		},
		actions: {
			likes: 1415,
			comments: 117
		}
	},
	{
		header: {
			logo: 'https://randomuser.me/api/portraits/women/30.jpg',
			name: 'Leigh Twitty',
			date: 'March 12, 2022'
		},
		media: {
			img: 'https://source.unsplash.com/400x300/?meal',
			alt: 'meal',
			content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus perspiciatis in tenetur voluptates suscipit facilis hic alias ducimus, dolorem, necessitatibus'
		},
		actions: {
			likes: 590,
			comments: 53
		}
	},
	{
		header: {
			logo: 'https://randomuser.me/api/portraits/women/31.jpg',
			name: 'Gillian Gilbert',
			date: 'April 1, 2022'
		},
		media: {
			img: 'https://source.unsplash.com/400x300/?shoes',
			alt: 'shoes',
			content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus perspiciatis in maxime labore eius quidem minima fuga possimus tenetur voluptates suscipit facilis hic alias ducimus'
		},
		actions: {
			likes: 984,
			comments: 33
		}
	},
]