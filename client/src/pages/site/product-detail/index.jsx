import React from "react";
import LayoutSite from "../../../layout/LatoutSite";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Grid from "@mui/material/Grid";
import SimpleImageSlider from "react-simple-image-slider";
import styled from "@emotion/styled";
import { Helmet } from "react-helmet";

const ProductDetail = () => {

  const product = {
    name: "Iphone 14",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eius dolor. Reiciendis nostrum fuga, numquam aliquam exercitationem repellendus harum ab, molestias sapiente, doloribus voluptatum dolore?",
    price: 1500,
    category: "phone",
    stock: 17,
    images: [
      "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1662703105/Croma%20Assets/Communication/Mobiles/Images/261963_oqrd6j.png/mxw_640,f_auto",
      "https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-silver-220907_inline.jpg.large.jpg",
      "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/iphone_14_pro_lgd.jpg",
    ],
  };

  return (
    <>
      <Helmet>
        <title>{product.name}</title>
        <meta name="description" content={product.description} />
      </Helmet>
      <LayoutSite>
        <div style={{ marginTop: "80px" }}>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: "80vh" }}
          >
            <Grid item xs={12} md={6} display="flex" justifyContent="center">
              <SimpleImageSlider
                width={400}
                height={400}
                images={product.images}
                showBullets={true}
                showNavs={true}
                slideDuration={1.5}
                loop={true}
                startIndex={3}
                autoPlay={true}
              />
            </Grid>
            <Grid item xs={12} md={6} padding="10px">
              <Content>
                <h1 sx={{ m: 2 }}>{product.name}</h1>
                <h3 sx={{ m: 2 }}>Category: {product.category}</h3>
                <h4>Price: {product.price} Azn</h4>
                <h4>Stock: {product.stock}</h4>
                <p>Description: {product.description}</p>
                <Button variant="outlined">
                  Add to Cart <AddShoppingCartIcon />
                </Button>
              </Content>
            </Grid>
          </Grid>
        </div>
      </LayoutSite>
    </>
  );
};

export default ProductDetail;

// ----------style----------

const Content = styled.div`
  h1 {
    color: #ff8b39;
  }
  h3,
  h4,
  p {
    margin: 10px 0;
  }
  button {
    color: #ff8b39;
    border: 1px solid #ff8b39;
  }
`;
