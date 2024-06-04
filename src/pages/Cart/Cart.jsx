import React from 'react';
import {Box, CssBaseline, FormControlLabel, Switch, Toolbar, Typography} from "@mui/material";
import Header from "../../widgets/Header/Header";
import Sidebar from "../../widgets/Sidebar/Sidebar";
import CartList from "../../widgets/CartList/CartList";

const Cart = () => {
	const [switchPrice, setSwitchPrice] = React.useState(false);
	const [switchGrame, setSwitchGrame] = React.useState(false);
	const handleChangePrice = (event) => {
    setSwitchPrice(event.target.checked);
  };
	const handleChangeGrame = (event) => {
    setSwitchGrame(event.target.checked);
  };
	return (
		<Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header/>
      <Sidebar/>
			<Box component="main" sx={{flexGrow: 1, p: 3}}>
				<Toolbar/>
				<center><div style={{display: "flex", justifyContent: "space-between", width: 700}}>
					<FormControlLabel
	          control={<Switch color="primary" checked={switchPrice} onChange={handleChangePrice}/>}
	          label={switchPrice ? 'Скрыть итоговую цену' : "Показать итоговую цену"}
	          labelPlacement="start"
	        />
					<FormControlLabel
	          control={<Switch color="primary" checked={switchGrame} onChange={handleChangeGrame}/>}
	          label={switchGrame ? "Скрыть итоговый вес" : "Показать итоговый вес"}
	          labelPlacement="start"
	        />
				</div></center>
				<table>
					{carts.map((item) =>
						<CartList
							{...item}
						/>
					)}
				</table>
				<div>
					{switchPrice &&
					<Typography sx={{fontSize: 30, fontFamily: "Helvetica", marginTop: 5}}>Итоговая цена: {carts.reduce((res, i) => res + (i.price * i.count), 0)} ₽</Typography>
						}
					{switchGrame &&
					<Typography sx={{fontSize: 30, fontFamily: "Helvetica", marginTop: 5}}>Итоговый вес: {carts.reduce((res, i) => res + (i.grame * i.count), 0)} г.</Typography>
						}
				</div>
			</Box>
		</Box>
	);
};

export default Cart;
export const carts = []