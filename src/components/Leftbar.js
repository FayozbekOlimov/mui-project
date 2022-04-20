import React from 'react';
import { ListItemIcon, ListItemText, MenuItem, MenuList } from '@mui/material';
import { Bookmark, FormatListBulletedTwoTone, Group, Home, Logout, Notifications, Person, PhotoCamera, PlayCircleOutlined, Settings, Storefront, TabletMac } from '@mui/icons-material';

const Leftbar = () => {
	return (
		<MenuList sx={{ pt: 9, position: 'sticky', top: 0 }}>
			{menuItemData.map((item, ind) => (
				<MenuItem sx={{ p: 1.5 }} key={ind}>
					<ListItemIcon>{item.icon}</ListItemIcon>
					<ListItemText>{item.txt}</ListItemText>
				</MenuItem>
			))}
		</MenuList>
	)
}

export default Leftbar

const menuItemData = [
	{
		icon: <Home fontSize="small" />,
		txt: 'Homepage'
	},
	{
		icon: <Person fontSize="small" />,
		txt: 'Friends'
	},
	{
		icon: <Group fontSize='small' />,
		txt: 'Groups'
	},
	{
		icon: <Notifications fontSize='small' />,
		txt: 'Notifications'
	},
	// {
	// 	icon: <PhotoCamera fontSize="small" />,
	// 	txt: 'Camera'
	// },
	// {
	// 	icon: <PlayCircleOutlined fontSize="small" />,
	// 	txt: 'Videos'
	// },
	// {
	// 	icon: <TabletMac fontSize="small" />,
	// 	txt: 'Apps'
	// },
	{
		icon: <Bookmark fontSize="small" />,
		txt: 'Collections'
	},
	{
		icon: <Storefront fontSize="small" />,
		txt: 'Market place'
	},
	{
		icon: <Settings fontSize="small" />,
		txt: 'Settings'
	},
	{
		icon: <Logout fontSize="small" />,
		txt: 'Logout'
	}
]