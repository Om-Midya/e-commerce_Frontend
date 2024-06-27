import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import { FaShoppingCart, FaUser, FaBars } from 'react-icons/fa';

export const Header: React.FC = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="fixed">
            <Toolbar>
                <Typography variant="h6" style={{
                    display: 'flex',
                    flexGrow: 1,
                }}>
                    E-Commerce
                </Typography>
                <div>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>Settings</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                </div>
                <div style={{
                    width: '20%',
                    display: 'flex',
                    justifyContent: 'space-between',
                }}>
                    <Button color="inherit" startIcon={<FaShoppingCart />}>
                        Cart
                    </Button>
                    <Button color="inherit" startIcon={<FaUser />}>
                        Login
                    </Button>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={handleMenu}
                    >
                        <FaBars />
                    </IconButton>
                </div>

            </Toolbar>
        </AppBar>
    );
}
