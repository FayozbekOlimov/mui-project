import React from 'react';
import { Bookmark, Cloud, Home, List, Logout, Person, PhotoCamera, PlayCircleOutlined, Settings, Storefront, TabletMac } from '@mui/icons-material';
import { Divider, ListItemIcon, ListItemText, MenuItem, MenuList, Typography } from '@mui/material';
const Leftbar = () => {
	return (
		<MenuList sx={{ pt: 9 }}>
			<MenuItem>
				<ListItemIcon>
					<Home fontSize="small" />
				</ListItemIcon>
				<ListItemText>Homepage</ListItemText>
			</MenuItem>
			<MenuItem>
				<ListItemIcon>
					<Person fontSize="small" />
				</ListItemIcon>
				<ListItemText>Friends</ListItemText>
			</MenuItem>
			<MenuItem>
				<ListItemIcon>
					<List fontSize="small" />
				</ListItemIcon>
				<ListItemText>Lists</ListItemText>
			</MenuItem>
			{/* <Divider /> */}
			<MenuItem>
				<ListItemIcon>
					<PhotoCamera fontSize="small" />
				</ListItemIcon>
				<ListItemText>Camera</ListItemText>
			</MenuItem>
			<MenuItem>
				<ListItemIcon>
					<PlayCircleOutlined fontSize="small" />
				</ListItemIcon>
				<ListItemText>Videos</ListItemText>
			</MenuItem>
			<MenuItem>
				<ListItemIcon>
					<TabletMac fontSize="small" />
				</ListItemIcon>
				<ListItemText>Apps</ListItemText>
			</MenuItem>
			<MenuItem>
				<ListItemIcon>
					<Bookmark fontSize="small" />
				</ListItemIcon>
				<ListItemText>Collections</ListItemText>
			</MenuItem>
			<MenuItem>
				<ListItemIcon>
					<Storefront fontSize="small" />
				</ListItemIcon>
				<ListItemText>Market place</ListItemText>
			</MenuItem>
			<MenuItem>
				<ListItemIcon>
					<Settings fontSize="small" />
				</ListItemIcon>
				<ListItemText>Settings</ListItemText>
			</MenuItem>
			<MenuItem>
				<ListItemIcon>
					<Logout fontSize="small" />
				</ListItemIcon>
				<ListItemText>Logout</ListItemText>
			</MenuItem>
		</MenuList>
	)
}

export default Leftbar
