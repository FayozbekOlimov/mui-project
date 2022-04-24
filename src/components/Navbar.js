import React, { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import { AppBar, Avatar, Badge, Box, IconButton, InputBase, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import { AccountCircle, Mail, MoreVertOutlined, Notifications, SearchOutlined } from '@mui/icons-material';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('xs')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 1.5),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: `${theme.spacing(1)} calc(${theme.spacing(2)}) ${theme.spacing(1)} calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
    },
}));

export default function Navbar() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            id={menuId}
            keepMounted
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            id={mobileMenuId}
            keepMounted
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem sx={{ px: 1, py: 0.5 }}>
                <IconButton
                    sx={{ mr: 1 }}
                    size="medium"
                    aria-label="show 4 new mails"
                    color="inherit"
                >
                    <Badge badgeContent={4} color="error">
                        <Mail />
                    </Badge>
                </IconButton>
                <Typography variant='body1'>Messages</Typography>
            </MenuItem>
            <MenuItem sx={{ px: 1, py: 0.5 }}>
                <IconButton
                    sx={{ mr: 1 }}
                    size="medium"
                    aria-label="show 12 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={12} color="error">
                        <Notifications />
                    </Badge>
                </IconButton>
                <Typography variant='body1'>Notifications</Typography>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen} sx={{ px: 1, py: 0.5 }}>
                <IconButton
                    sx={{ mr: 1 }}
                    size="medium"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <Typography variant='body1'>Profile</Typography>
            </MenuItem>
        </Menu>
    );

    return (
        <Box>
            <AppBar>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography
                        variant="h5"
                        noWrap
                        component="div"
                        display={{ xs: 'none', sm: 'block' }}
                    >
                        John Doe
                    </Typography>
                    <Avatar
                        sx={{ width: 36, height: 36, display: { xs: 'block', sm: 'none' } }}
                        src='https://randomuser.me/api/portraits/men/90.jpg'
                        alt='John Doe'
                    />
                    <Search sx={{ flexGrow: 0.5, width: 0 }}>
                        <SearchIconWrapper>
                            <SearchOutlined />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search..."
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <Box sx={{ display: { xs: 'none', sm: 'flex', alignItems: 'center' } }}>
                        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                            <Badge badgeContent={4} color="error">
                                <Mail />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="show 12 new notifications"
                            color="inherit"
                        >
                            <Badge badgeContent={12} color="error">
                                <Notifications />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <Avatar
                                sx={{ width: 36, height: 36 }}
                                src='https://randomuser.me/api/portraits/men/90.jpg'
                                alt='John Doe'
                            />
                        </IconButton>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
                        <IconButton
                            size='large'
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreVertOutlined />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
}
