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
  const [isFiltered, setIsFiltered] = useState(false);
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState({});
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(getAllProductsAction());
    getAllCategories();
  }, [dispatch]);

  const getAllCategories = async () => {
    setCategories(await getCategories());
  };

  const handleChange = (event) => {
    setCategoryId(event.target.value);
    setIsFiltered(true);
    if (event.target.value === "all") {
      setIsFiltered(false);
    }
  };

  const handleSearchInputChange = (event) => {
    setSearch(event.target.value);
  };

  const renderProducts = () => {
    let result;
    isFiltered
      ? (result = data.data
          ?.filter((item) => item.categoryId === categoryId)
          .map((item, index) => {
            return (
              <SiteCard
                key={index}
                loading={data.loading}
                name={item.name ? item.name : ""}
                img={item.images[0]}
                id={item._id}
                date={item.createdAt}
                price={item.price}
              />
            );
          }))
      : (result = data.data?.map((item, index) => {
          return (
            <SiteCard
              key={index}
              loading={data.loading}
              name={item.name ? item.name : ""}
              img={item.images[0]}
              id={item._id}
              date={item.createdAt}
              price={item.price}
            />
          );
        }));
    return result;
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
                value={categoryId}
                label="Category"
                onChange={handleChange}
              >
                <MenuItem value={"all"}>All Products</MenuItem>
                {categories &&
                  categories.map((item, index) => (
                    <MenuItem key={index} value={item._id}>
                      {item.name}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </Box>

          <TextField
            id="outlined-basic"
            label="Search Product"
            variant="outlined"
            value={search}
            onChange={(event) => handleSearchInputChange(event)}
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
            : !search.length
            ? renderProducts()
            : data.data
                ?.filter((item) =>
                  item.name.toLocaleLowerCase("en-US").includes(search)
                )
                .map((item, index) => {
                  return (
                    <SiteCard
                      key={index}
                      loading={data.loading}
                      name={item.name ? item.name : ""}
                      img={item.images[0]}
                      id={item._id}
                      date={item.createdAt}
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
  padding: 30px 0;
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
