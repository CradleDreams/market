import Product from "../../widgets/Product/Product";
import {
	Box,
	CssBaseline,
	Toolbar
} from "@mui/material";
import {BooksList1, BooksList2} from "../../App/Data"
import React from 'react';
import Header from "../../widgets/Header/Header";
import Sidebar from "../../widgets/Sidebar/Sidebar";

const Home = () => {
	
  return (
			<Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header/>
      <Sidebar/>
      <Box component="main" sx={{ flexGrow: 1, p: 3}}>
        <Toolbar />
        <div style={{display:"flex", marginLeft: 25}}>
          {BooksList1.map((item)=>
            <Product
              {...item}
            />
          )}
	        </div>
	      <div style={{display:"flex", marginLeft: 10}}>
          {BooksList2.map((item)=>
            <Product
              {...item}
            />
          )}
	        </div>
      </Box>
    </Box>
	);
};

export default Home;