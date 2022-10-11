import React, {useState} from 'react';
import { styled } from '@mui/material/styles';
import { Card, CardHeader, CardMedia, CardContent,
    CardActions, Avatar, IconButton, Typography, Skeleton } from '@mui/material';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const SiteCard = (props) => {
    // const { loading = false } = props;
    const[loading, setLoading] = useState(false);

    return (
        <Card style={{width: '345px', minWidth: '175px'}}>
            <CardHeader
                avatar={loading ?
                    (
                        <Skeleton animation="wave" variant="circular" width={40} height={40} />
                    ) :
                    (
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            S
                        </Avatar>
                    )
                }
                title={loading ?
                    (
                        <Skeleton
                            animation="wave"
                            height={10}
                            width="80%"
                            style={{ marginBottom: 6 }}
                        />
                    ) :
                    (
                        "Shrimp and Chorizo Paella"
                    )
                }
                subheader= {loading ?
                    (
                        <Skeleton
                            animation="wave"
                            height={10}
                            width="80%"
                            style={{ marginBottom: 6 }}
                        />
                    ) :
                    (
                        "September 14, 2016"
                    )

                }
            />
            {loading ? (
                <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
            ) : (
                <CardMedia
                    component="img"
                    height="194"
                    image={props.img}
                    alt="Paella dish"
                />
            )}
            <CardContent>
                {loading ? (
                    <>
                        <div style={{display: 'flex',justifyContent: 'space-between', marginBottom: '13px'}}>
                            <Skeleton animation="wave" height={10} width="40%" style={{ marginBottom: 6 }} />
                            <Skeleton animation="wave" height={10} width="40%" />
                        </div>
                        <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                        <Skeleton animation="wave" height={10} width="100%" />
                    </>
                ) : (
                    <>
                        <div style={{display: 'flex',justifyContent: 'space-between', marginBottom: '13px'}}>
                            <h2>13 AZN</h2>
                            <AddShoppingCartIcon style={icon}/>
                        </div>
                        <Typography variant="body2" color="text.secondary">
                            This impressive paella is a perfect party dish and a fun meal to cook
                            together with your guests.
                        </Typography>
                    </>
                )}
            </CardContent>
            <CardActions disableSpacing>
            </CardActions>
        </Card>
    )
}

export default SiteCard;



// --------------style-----------------
const icon = {
    color: '#f44336',
    cursor: 'pointer',
}
