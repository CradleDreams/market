import React from 'react';
import {Box, CssBaseline, Toolbar} from "@mui/material";
import Header from "../../widgets/Header/Header";
import Sidebar from "../../widgets/Sidebar/Sidebar";
import { Carousel } from 'antd';

const contentStyle = {
  margin: 0,
	width: '900px',
  height: '500px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const Gallery = () => {
	return (
		<Box>
      <CssBaseline />
      <Header/>
      <Sidebar/>
			<center><Box component="main" sx={{p: 0, width: 1200, marginTop: 0, marginLeft: 30}}>
        <Toolbar />
				<h1 style={{fontFamily: "Helvetica"}}>Галерея</h1>
	      <Carousel>
		      <div >
		        <h3 style={contentStyle}><img src={"https://s0.rbk.ru/v6_top_pics/media/img/3/39/756738625992393.webp"}
		                                      style={{width: 900, height: 500}}/></h3>
		      </div>
		      <div>
			      <h3 style={contentStyle}><img src={"https://здоровое-питание.рф/upload/iblock/b6f/7319o6l766i3kus8weuxgavskz0m68t8/-Valeryi-Vysotkov-Fotobank-Lori-_1_.jpg"}
			                                    style={{width: 900, height: 500}}/></h3>
		      </div>
		      <div>
			      <h3 style={contentStyle}><img src={"https://rokkd.ru/uploads/5f/8b/49/cd/5f8b49cda80bd0eb207fdf9be7e97ded0a3c6857.jpg"}
			                                    style={{width: 900, height: 500}}/></h3>
		      </div>
		      <div>
			      <h3 style={contentStyle}><img src={"https://d9c81ad3-85af-4ff6-8378-6038ea045e1b.akamaized.net/2022/10/kofe01.jpg"}
			                                    style={{width: 900, height: 500}}/></h3>
		      </div>
	      </Carousel>
			</Box></center>
		</Box>
	);
};

export default Gallery;