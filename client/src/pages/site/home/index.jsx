import React, { useEffect } from "react";
import styled from "@emotion/styled";
import LayoutSite from "../../../layout/LatoutSite";
import SiteCard from "../../../components/site/site-card";
import { Helmet } from "react-helmet";
import {useDispatch, useSelector} from "react-redux";
import {getAllProductsAction} from "../../../redux/actions/products.action";
import { Card, CardContent, CardHeader, Skeleton } from "@mui/material";

const HomePage = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.productsReducer);

  useEffect(() => {
    dispatch(getAllProductsAction())
  }, [dispatch])

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
        <Container>
          {
              data.loading ?
                  Array(10).fill(null).map((e,i) => {
                      return <Card style={{width: '345px', minWidth: '175px'}} key={i} >
                          <CardHeader
                              avatar={<Skeleton animation="wave" variant="circular" width={40} height={40} />}
                              title={<Skeleton
                                  animation="wave"
                                  height={10}
                                  width="80%"
                                  style={{ marginBottom: 6 }}
                              />}
                              subheader= {<Skeleton
                                  animation="wave"
                                  height={10}
                                  width="80%"
                                  style={{ marginBottom: 6 }}
                              />}
                          />
                          <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
                          <CardContent>
                              <div style={{display: 'flex',justifyContent: 'space-between', marginBottom: '13px'}}>
                                  <Skeleton animation="wave" height={10} width="40%" style={{ marginBottom: 6 }} />
                                  <Skeleton animation="wave" height={10} width="40%" />
                              </div>
                              <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                              <Skeleton animation="wave" height={10} width="100%" />
                          </CardContent>
                      </Card>
                  })
                  :
              data.data?.map((item, index) => {
                  return <SiteCard
                      key={index}
                      loading={data.loading}
                      name={item.name}
                      id={item._id}
                      brandId={item.brandId}
                      price={item.price}
                  />
              })
          }
        </Container>
      </LayoutSite>
    </>
  );
};

export default HomePage;

// -----------style----------------

const Container = styled.div`
  padding: 130px 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 33px;
`;
