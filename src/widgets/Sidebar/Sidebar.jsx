import React from 'react';
import {Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar} from "@mui/material";
import {menu} from "../../App/Data";
import SaveAltIcon from "@mui/icons-material/SaveAlt";

const Sidebar = () => {
	const [open, setOpen] = React.useState(true);
	const drawerWidth = 240;
	return (
		<>
			<Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {menu.map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemText primary={text}/>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
              <ListItem disablePadding>
                <ListItemButton onClick={() => setOpen(!open)}>
                  <ListItemIcon>
                    <SaveAltIcon/>
                  </ListItemIcon>
                  <ListItemText primary={'Cкачать прейскурант'} />
                </ListItemButton>
              </ListItem>
	          {open && (<ListItemText primary={'В прейскуранте Вы найдете информацию о калорийности блюди таблицу БЖУ. Меню в некоторык кофеймах сети может отличаться.'} sx={{ml: 2, mr: 2}}/>)}
          </List>
        </Box>
      </Drawer>
		</>
	);
};

export default Sidebar;