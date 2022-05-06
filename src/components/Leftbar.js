import React, { useState } from 'react';
import { colors, createTheme, ListItemIcon, ListItemText, MenuItem, MenuList } from '@mui/material';
import { Bookmark, Group, Home, Logout, Notifications, Person, Settings, Storefront } from '@mui/icons-material';
const initialState = new Array(8).fill(false);

const Leftbar = ({ mode }) => {
	const [isActive, setIsActive] = useState(initialState);
	const listStyle = {
		pt: 9,
		position: 'sticky',
		top: 0,
		bgcolor: 'background.default',
		color: 'text.primary',
		minHeight: '100vh'
	}

	const handleClick = (ind) => {
		setIsActive(initialState.map((_, i) => i === ind));
	}

	const theme = createTheme({
		palette: {
			activeColor: mode === 'dark' ? colors.blueGrey[700] : colors.lightBlue[400]
		}
	});

	return (
		<MenuList sx={listStyle}>
			{menuItemData.map((item, ind) => (
				<MenuItem sx={{
					p: 0,
					bgcolor: isActive[ind] && theme.palette.activeColor,
					'&:hover': {
						bgcolor: isActive[ind] && theme.palette.activeColor
					}
				}} key={ind} onClick={() => handleClick(ind)}>
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