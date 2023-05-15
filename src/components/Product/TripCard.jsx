import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import { useTrip } from '../../contexts/TripContextProvider';
import { useNavigate } from 'react-router-dom';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useCart } from '../../contexts/CartContextProvider';


export default function TripCard({ item }) {
  const navigate = useNavigate();
  const {deleteTrip} =useTrip();
  const {addProductToCart,checkProductInCart}=useCart();
    return (
      <Card sx={{ maxWidth: 345, my: "20px",mx:"5px", minWidth: 395}}>
        <CardMedia
          sx={{ height: 260 }}
          image={item.picture}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.location}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.price}
          </Typography>
        </CardContent>
        <CardActions>
            <>
              <Button size="small" onClick={() => navigate(`/edit/${item.id}`)}>
                Edit
              </Button>
              <Button size="small" onClick={()=>{deleteTrip(item.id)}}>
                Delete
              </Button>
            </>
            <IconButton onClick={()=>addProductToCart(item)}>
              <AddShoppingCartIcon 
              color={checkProductInCart(item.id) ? "primary" : ""}/>
            </IconButton>
  
          <Button size="small" onClick={()=>navigate(`/details/${item.id}`)}>Details</Button>
        </CardActions>
      </Card>
    );
  }
  