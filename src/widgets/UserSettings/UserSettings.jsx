import React from 'react';
import {Avatar, Box, IconButton, Menu, MenuItem, Tooltip, Typography} from "@mui/material";
import {Link} from "react-router-dom";

const UserSettings = () => {
	const [anchorElUser, setAnchorElUser] = React.useState(null);
	const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
	const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
	return (
			<Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Профиль">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar src="/broken-image.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
	            <Link>
		            <MenuItem onClick={handleCloseUserMenu}>
			            <Typography textAlign="center" color={"black"}>Профиль</Typography>
								</MenuItem>
							</Link>
							<Link to={"/cart"}>
		            <MenuItem onClick={handleCloseUserMenu}>
			            <Typography textAlign="center" color={"black"}>Корзина</Typography>
								</MenuItem>
							</Link>
	            <Link to={"/developers"}>
		            <MenuItem onClick={handleCloseUserMenu}>
			            <Typography textAlign="center" color={"black"}>Разработчики</Typography>
								</MenuItem>
							</Link>
						</Menu>
			</Box>
	);
};

export default UserSettings;