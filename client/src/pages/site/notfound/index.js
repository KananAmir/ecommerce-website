import { Box, Button } from "@mui/material";
import { Container } from "@mui/system";
import LayoutSite from "layout/LatoutSite";
import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <LayoutSite>
        <Container  sx={{ marginTop: "80px",height:'82.5vh' }} >
        <Box style={{justifyContent:'center',display:'flex',alignItems:'center',height:'100%'}}>
       <div>
       <h1 >Not Found</h1>
       <p>Looks like you're lost</p>
        <Link to="/">
           <Button sx={{marginTop:'20px'}} variant="outlined">
                Go Back Home
           </Button>
        </Link>
       </div>
      </Box>
        </Container>
     
    </LayoutSite>
  );
}

export default NotFound;
