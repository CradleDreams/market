import React from 'react';


const CartList = ({image, name, price, grame, count}) => {
	return (
		<tr>
			<th><img src={image} style={{backgroundSize: "cover", width: 150, height: 150}}/></th>
			<th style={{padding: 20, fontSize: 20, fontFamily: "Heltica"}}>
				{name}
			</th>
			<th style={{padding: 20, fontSize: 20, fontFamily: "Heltica"}}>
				{price} ₽
			</th>
			<th style={{padding: 20, fontSize: 20, fontFamily: "Heltica"}}>
				{grame} г.
			</th>
				<th style={{padding: 20, fontFamily: "Heltica", fontSize: 30}}>
					{count} шт.
				</th>
		</tr>
	);
};

export default CartList;