import React from 'react';
import { ListItemIcon, ListItemText, MenuItem, MenuList } from '@mui/material';
import { Bookmark, Group, Home, Logout, Notifications, Person, Settings, Storefront } from '@mui/icons-material';

const Leftbar = () => {
	return (
		<MenuList sx={{ pt: 9, position: 'sticky', top: 0 }}>
			{menuItemData.map((item, ind) => (
				<MenuItem sx={{ p: 0 }} key={ind}>
					<ListItemIcon sx={{ p: 1.5 }}>{item.icon}</ListItemIcon>
					<ListItemText sx={{ py: 1.5, display: { xs: 'none', sm: 'block' } }}>{item.txt}</ListItemText>
				</MenuItem>
			))}
		</MenuList>
	)
}

export default Leftbar

const menuItemData = [
	{
		icon: <Home fontSize='medium' />,
		txt: 'Homepage'
	},
	{
		icon: <Person fontSize='medium' />,
		txt: 'Friends'
	},
	{
		icon: <Group fontSize='medium' />,
		txt: 'Groups'
	},
	{
		icon: <Notifications fontSize='medium' />,
		txt: 'Notifications'
	},
	{
		icon: <Bookmark fontSize='medium' />,
		txt: 'Collections'
	},
	{
		icon: <Storefront fontSize='medium' />,
		txt: 'Market place'
	},
	{
		icon: <Settings fontSize='medium' />,
		txt: 'Settings'
	},
	{
		icon: <Logout fontSize='medium' />,
		txt: 'Logout'
	}
]