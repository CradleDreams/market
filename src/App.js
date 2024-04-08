import Market from "./components/Market";
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import {
	AppBar, Avatar,
	Box,
	CssBaseline,
	Divider, Drawer,
	List,
	ListItem,
	ListItemButton, ListItemIcon, ListItemText,
	Toolbar,
	Typography
} from "@mui/material";
import React from "react";


const drawerWidth = 240;
function App() {
	const [open, setOpen] = React.useState(true);
	const pages = ['Акции', 'Меню', 'Адреса', 'Бонусы', 'Подарочные карты', 'Доставка', 'О компании'];
	const menu = ['Новинки', 'Завтраки', 'Ланчи', 'Ужин', 'Чай', 'Холодные напитки', 'Сэндвичи и роллы', 'Салаты', 'Основные блюда', 'Блинчики', 'Десерты', 'Детское меню', 'Рекомендуем']
	const BooksList1 =[{
		image: 'https://shoko.ru/upload/iblock/1b9/44qwk8mc487pdxi60qiq3dxvyb2ftf43.jpg',
		name: 'ОСЕННИЙ САЛАТ С ПЕЧЁНОЙ ТЫКВОЙ И СВЁКЛОЙ',
		price: '410 ₽',
		grame: '210 г.'
	},{
		image: 'https://shoko.ru/upload/iblock/d44/u2h5x74nswwyj53kp2zaj9vxzg1f2t2f.jpg',
		name: 'САЛАТ ИЗ ПЕЧЁНЫХ БАКЛАЖАНОВ С СОУСОМ ГАМАДАРИ',
		price: '490 ₽',
		grame: '220 г.'
	},{
		image: 'https://shoko.ru/upload/iblock/84d/k8nw6y1cf6vqur5eulu7xue1pxageafu.jpg',
		name: 'ЧИЗБУРГЕР',
		price: '490 ₽',
		grame: '200 г.'
	}]
	const BooksList2 =[{
		image: 'https://shoko.ru/upload/iblock/3bd/tg7z0ttewg76zlr22h1usorotrn5bz0e.jpg',
		name: 'РОЛЛ С ГОВЯЖЬЕЙ КОЛБАСКОЙ И КАРТОФЕЛЬНЫМ ПЮРЕ',
		price: '330 ₽',
		grame: '250 г.'
	},,{
		image: 'https://shoko.ru/upload/iblock/5cd/eu43j429nchibcsm6w8gp5aotr0r61md.jpg',
		name: 'БРУСКЕТТА 4 СЫРА И КОНФИ ИЗ ИНЖИРА',
		price: '350 ₽',
		grame: '110 г.'
	},,{
		image: 'https://shoko.ru/upload/iblock/282/fyxsnqf23zl40rnksmjw889h7avjsiwl.jpg',
		name: 'ЖАРЕНЫЙ СЫР БРИ С КОНФИ ИЗ ИНЖИРА',
		price: '650 ₽',
		grame: '190 г.'
	},]
  return (
		<>
			 <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 , backgroundColor: '#342022'}}>
        <Toolbar>
	        <Typography variant="h6" noWrap component="div" sx={{mr: 15}}>
	           Шоколадница
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
	          <Avatar src="/broken-image.jpg" />
          </Typography>
        </Toolbar>
      </AppBar>
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
      <Box component="main" sx={{ flexGrow: 1, p: 3}}>
        <Toolbar />
        <div style={{display:"flex", marginLeft: 25}}>
          {BooksList1.map((item)=>
            <Market
              {...item}
            />
          )}
	        </div>
	      <div style={{display:"flex", marginLeft: 10}}>
          {BooksList2.map((item)=>
            <Market
              {...item}
            />
          )}
	        </div>
      </Box>
    </Box>
			</>
  );
}

export default App;
