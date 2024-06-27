import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import { FaShoppingCart, FaUser, FaBars, FaSearch } from 'react-icons/fa';
import {InputAdornment} from "@mui/material";

export const Header: React.FC = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [search, setSearch] = React.useState<string>('');

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };

    const handleSearch = () => {
        console.log('Search:', search);
        // Implement your search logic here
    };

    return (
        <AppBar position="fixed">
            <Toolbar
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                <Typography variant="h6" style={{
                    display: 'flex',
                    justifyContent: 'space-around',
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

                <TextField
                    id="input-with-icon-adornment"
                    value={search}
                    onChange={handleSearchChange}
                    placeholder="Search..."
                    variant="outlined"
                    size="small"
                    style={{
                        marginRight: '10px',
                        width: '60%',
                        backgroundColor: 'white',
                }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <FaSearch />
                            </InputAdornment>
                        ),
                    }}
                />
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

            </Toolbar>
        </AppBar>
    );
}
