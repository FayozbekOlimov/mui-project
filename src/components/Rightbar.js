import React from 'react'
import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'

const Rightbar = () => {
	return (
		<Box sx={{ pt: 9 }} position='sticky' top={0}>
			<Typography variant='h6'>Online Friends</Typography>
			<AvatarGroup max={6} sx={{ justifyContent: 'start', my: 1 }}>
				<Avatar alt="Remy Sharp" src="https://randomuser.me/api/portraits/men/1.jpg" />
				<Avatar alt="Travis Howard" src="https://randomuser.me/api/portraits/women/2.jpg" />
				<Avatar alt="Jim Kerry" src="" />
				<Avatar alt="Cindy Baker" src="https://randomuser.me/api/portraits/men/3.jpg" />
				<Avatar alt="Agnes Walker" src="https://randomuser.me/api/portraits/women/4.jpg" />
				<Avatar alt="Trevor Henderson" src="https://randomuser.me/api/portraits/men/5.jpg" />
				<Avatar alt="John Doe" src="https://randomuser.me/api/portraits/women/6.jpg" />
			</AvatarGroup>
			<Typography variant='h6' mt={2}>Latest Photos</Typography>
			<ImageList sx={{ width: '100%', py: 1 }} cols={3} rowHeight={110}>
				{imgData.map((item) => (
					<ImageListItem key={item.img}>
						<img
							src={item.img}
							srcSet={item.img}
							alt={item.title}
							loading="lazy"
						/>
					</ImageListItem>
				))}
			</ImageList>
			<Typography variant='h6' mt={2}>Latest Conversations</Typography>
			<List sx={{ width: '100%', maxWidth: 300, bgcolor: 'background.paper' }}>
				<ListItem alignItems="flex-start" sx={{ p: 0 }}>
					<ListItemAvatar>
						<Avatar alt="Remy Sharp" src="https://randomuser.me/api/portraits/women/60.jpg" />
					</ListItemAvatar>
					<ListItemText
						primary="Brunch this weekend?"
						secondary={
							<>
								<Typography
									sx={{ display: 'inline' }}
									component="span"
									variant="body2"
									color="text.primary"
								>
									Ali Connors
								</Typography>
								{" — I'll be in your neighborhood doing errands this…"}
							</>
						}
					/>
				</ListItem>
				<Divider sx={{ ml: 0 }} variant="inset" component="li" />
				<ListItem alignItems="flex-start" sx={{ p: 0 }}>
					<ListItemAvatar>
						<Avatar alt="Travis Howard" src="https://randomuser.me/api/portraits/men/61.jpg" />
					</ListItemAvatar>
					<ListItemText
						primary="Summer BBQ"
						secondary={
							<>
								<Typography
									sx={{ display: 'inline' }}
									component="span"
									variant="body2"
									color="text.primary"
								>
									to Scott, Alex, Jennifer
								</Typography>
								{" — Wish I could come, but I'm out of town this…"}
							</>
						}
					/>
				</ListItem>
				<Divider sx={{ ml: 0 }} variant="inset" component="li" />
				<ListItem alignItems="flex-start" sx={{ p: 0 }}>
					<ListItemAvatar>
						<Avatar alt="Cindy Baker" src="https://randomuser.me/api/portraits/women/62.jpg" />
					</ListItemAvatar>
					<ListItemText
						primary="Oui Oui"
						secondary={
							<>
								<Typography
									sx={{ display: 'inline' }}
									component="span"
									variant="body2"
									color="text.primary"
								>
									Sandra Adams
								</Typography>
								{' — Do you have Paris recommendations? Have you ever…'}
							</>
						}
					/>
				</ListItem>
			</List>
		</Box>
	)
}

export default Rightbar

const imgData = [
	{
		img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
		title: 'Breakfast',
	},
	{
		img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
		title: 'Burger',
	},
	{
		img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
		title: 'Camera',
	},
// 	{
// 		img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
// 		title: 'Coffee',
// 	},
// 	{
// 		img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
// 		title: 'Hats',
// 	},
// 	{
// 		img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
// 		title: 'Honey',
// 	}
];