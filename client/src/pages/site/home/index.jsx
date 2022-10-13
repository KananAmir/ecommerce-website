import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import LayoutSite from "../../../layout/LatoutSite";
import SiteCard from "../../../components/site/site-card";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsAction } from "../../../redux/actions/products.action";
import { getCategories } from "services/category.service";

import {
  Card,
  CardContent,
  CardHeader,
  Skeleton,
  TextField,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Box,
} from "@mui/material";

const HomePage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productsReducer);
  const [categories, setCategories] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    dispatch(getAllProductsAction());
    getAllCategories();
  }, [dispatch]);

  const getAllCategories = async () => {
    setCategories(await getCategories());
  };

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <>
      <Helmet>
        <title>Shop Your Way</title>
        <meta
          name="description"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quas ea architecto? Dignissimos illo dolorum nesciunt ipsa dicta accusamus repudiandae corporis ad neque voluptatum distinctio a dolor, asperiores, odit aut?"
        />
      </Helmet>
      <LayoutSite>
        <Center>
          <Box sx={{ minWidth: 200 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                label="Category"
                onChange={handleChange}
              >
                {categories &&
                  categories.map((item) => (
                    <MenuItem value={item.name}>{item.name}</MenuItem>
                  ))}
              </Select>
            </FormControl>
          </Box>

          <TextField
            id="outlined-basic"
            label="Search Product"
            variant="outlined"
          />
        </Center>
        <Container>
          {data.loading
            ? Array(10)
                .fill(null)
                .map((e, i) => {
                  return (
                    <Card style={{ width: "345px", minWidth: "175px" }} key={i}>
                      <CardHeader
                        avatar={
                          <Skeleton
                            animation="wave"
                            variant="circular"
                            width={40}
                            height={40}
                          />
                        }
                        title={
                          <Skeleton
                            animation="wave"
                            height={10}
                            width="80%"
                            style={{ marginBottom: 6 }}
                          />
                        }
                        subheader={
                          <Skeleton
                            animation="wave"
                            height={10}
                            width="80%"
                            style={{ marginBottom: 6 }}
                          />
                        }
                      />
                      <Skeleton
                        sx={{ height: 190 }}
                        animation="wave"
                        variant="rectangular"
                      />
                      <CardContent>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginBottom: "13px",
                          }}
                        >
                          <Skeleton
                            animation="wave"
                            height={10}
                            width="40%"
                            style={{ marginBottom: 6 }}
                          />
                          <Skeleton animation="wave" height={10} width="40%" />
                        </div>
                        <Skeleton
                          animation="wave"
                          height={10}
                          style={{ marginBottom: 6 }}
                        />
                        <Skeleton animation="wave" height={10} width="100%" />
                      </CardContent>
                    </Card>
                  );
                })
            : data.data?.map((item, index) => {
                return (
                  <SiteCard
                    key={index}
                    loading={data.loading}
                    // name={item.name}
                    name={item.name ? item.name : ""}
                    id={item._id}
                    brandId={item.brandId}
                    price={item.price}
                  />
                );
              })}
        </Container>
      </LayoutSite>
    </>
  );
};

export default HomePage;

// -----------style----------------

const Container = styled.div`
  padding: 30px 0 130px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 33px;
`;
const Center = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
`;
