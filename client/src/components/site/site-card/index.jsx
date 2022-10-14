import React, {useEffect, useState} from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Avatar,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCartAction } from "../../../redux/actions/cart.action";

const SiteCard = (props) => {
    const[brand, setBrand] = useState();

    useEffect(() => {
        handleBrand();
    }, [])

    async function handleBrand(){
        let result = await props.brandName;
        setBrand(result.name);
    }

  const dispatch = useDispatch()

  const onAddToCart = () => {    
    dispatch(addToCartAction(props))
  }

  return (
    <Card style={{ width: "345px", minWidth: "175px" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {props.name[0]}
          </Avatar>
        }
        title={brand}
        subheader={`${props.date.slice(0, 10)} / ${props.date.slice(11, 16)}`}
      />
      <Link
        to={`/product-detail/${props._id}/${props.name
          .toLocaleLowerCase("en-US")
          .split(" ")
          .join("-")}`}
      >
        <CardMedia component="img" height="194" image={`http://localhost:8080/${props.img}`} alt="img" />
      </Link>
      <CardContent>
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "13px",
            }}
          >
            <h2>{props.price} AZN</h2>
            <AddShoppingCartIcon style={icon} onClick={onAddToCart} />
          </div>
          <Typography variant="body2" color="text.secondary">
            {props.name}
          </Typography>
        </>
      </CardContent>
    </Card>
  );
};

export default SiteCard;

// --------------style-----------------
const icon = {
  color: "#f44336",
  cursor: "pointer",
};
