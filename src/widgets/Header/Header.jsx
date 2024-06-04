import React from 'react';
import {AppBar,Box, Toolbar, Typography} from "@mui/material";
import {pages} from "../../App/Data";
import UserSettings from "../UserSettings/UserSettings";
import {Link} from "react-router-dom";
const Header = () => {
	return (
		<>
			<AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 , backgroundColor: '#342022'}}>
        <Toolbar>
	        <Typography variant="h6" noWrap component="div" sx={{mr: 15}}>
	           <Link to={'/'}><img src={"images/logo.png"} style={{width: 60, height: 60}}/></Link>
          </Typography>
	        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
	        {pages.map((page) => (
           <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, fontSize: 16}}>
	           {page}
          </Typography>
         ))}
		        </Box>
	        <Typography variant="h6" noWrap component="div" sx={{mr: 7, fontSize: 16, color: 'lightgrey'}}>
	           Москва
          </Typography>
	        <Typography variant="h6" noWrap component="div" sx={{fontSize: 16, color: 'lightgrey'}}>
	          <UserSettings/>
          </Typography>
        </Toolbar>
      </AppBar>
		</>
	);
};

export default Header;