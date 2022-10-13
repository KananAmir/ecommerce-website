import React, { useEffect, useState } from "react";
import LayoutSite from "../../../layout/LatoutSite";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Grid from "@mui/material/Grid";
import SimpleImageSlider from "react-simple-image-slider";
import styled from "@emotion/styled";
import { Helmet } from "react-helmet";
import { useParams } from "react-router";
import { getProductsDetail } from "services/product.service";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

const ProductDetail = () => {
  const [product, setProductDetail] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    stock: "",
    images: [],
  });

  const [isLoading, setIsLoading] = useState(true);

  let { id } = useParams();

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    setProductDetail(await getProductsDetail(id));
    setIsLoading(false);
  };

  const sliderImages = [];
  product.images.forEach(item => {
    sliderImages.push(`http://localhost:8080/${item}`);
  })

  return (
    <>
      <Helmet>
        <title>{product.name}</title>
        <meta name="description" content={product.description} />
      </Helmet>
      <LayoutSite>
        <div style={{ marginTop: "80px" }}>
          {isLoading ? (
            <Center>
              <Stack sx={{ color: "grey.500" }} spacing={2} direction="row">
                <CircularProgress color="secondary" />
                <CircularProgress color="success" />
                <CircularProgress color="inherit" />
              </Stack>
            </Center>
          ) : (
            <Grid
              container
              spacing={2}
              alignItems="center"
              justifyContent="center"
              style={{ minHeight: "87.5vh" }}
            >
              <Grid item xs={12} md={6} display="flex" justifyContent="center">
                <SimpleImageSlider
                  width={400}
                  height={400}
                  images={sliderImages}
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
          )}
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
const Center = styled.div`
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
