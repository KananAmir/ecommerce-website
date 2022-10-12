import React from 'react';
import { Card, CardHeader, CardMedia, CardContent, Avatar, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {Link} from "react-router-dom";

const SiteCard = (props) => {


    if(!props.img || !props.name || !props.id || !props.brandId || !props.price) {
        return null
    }

    console.log(props)

    return (
        <Card style={{width: '345px', minWidth: '175px'}}>
            <CardHeader
                avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    {props?.name[0]}
                        </Avatar>
                }
                title={props?.name}
                subheader={props?.brandId}
            />
                <Link to ={`/product-detail/${props?.id}/${props?.name}`}>
                    <CardMedia
                        component="img"
                        height="194"
                        image={props.img}
                        alt="img"
                    />
                </Link>
            <CardContent>
                <>
                    <div style={{display: 'flex',justifyContent: 'space-between', marginBottom: '13px'}}>
                        <h2>{props?.price} AZN</h2>
                        <AddShoppingCartIcon style={icon}/>
                    </div>
                    <Typography variant="body2" color="text.secondary">
                        {props?.name}
                    </Typography>
                </>
            </CardContent>
        </Card>
    )
}

export default SiteCard;


// --------------style-----------------
const icon = {
    color: '#f44336',
    cursor: 'pointer',
}
