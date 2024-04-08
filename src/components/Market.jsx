import React from 'react';
import {Box, Button, CardActions, CardContent, Modal, Typography} from "@mui/material";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const Market = ({image,name,price,grame}) => {
	const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
	return (
		<div>
			<CardContent sx={{width: 350, height: 480}}>
      <img src={image} style={{width: 350, height: 350}}/>
				<br></br><br></br>
      <Typography sx={{ mb: 1.5}}>
	      <center>
	      {name}
		      </center>
      </Typography>
				<Typography sx={{ mb: 1.5 }} color="text.secondary">
	      {grame}
      </Typography>
    </CardContent>
    <CardActions>
      <Button onClick={handleOpen} sx={{ml: 15}}>Купить</Button>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      <img src={image} style={{width: 350, height: 350}}/>
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
	    <center>
	    {price}
		    </center>
	    <br></br>
    </Typography>
	  <Button variant={"contained"} sx={{width: 350}}>Купить</Button>
  </Box>
</Modal>
    </CardActions>
		</div>
	);
};

export default Market;