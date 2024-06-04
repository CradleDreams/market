import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home/Home";
import Cart from "../pages/Cart/Cart";
import React from "react";
import Gallery from "../pages/Gallery/Gallery";


function App() {
	return (
	<>
			<Routes>
				<Route path='/' element={<Home/>}/>
				<Route path='/cart' element={<Cart/>}/>
				<Route path='/developers' element={<Gallery/>}/>
			</Routes>
		</>
  );
}

export default App;
