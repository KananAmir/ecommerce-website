import React from 'react';
import styled from '@emotion/styled';
import LayoutSite from "../../../layout/LatoutSite";
import SiteCard from "../../../components/site/site-card";

const HomePage = () => {
  return (
    <LayoutSite>
        <Container>
            <SiteCard/>
            <SiteCard/>
            <SiteCard/>
            <SiteCard/>
            <SiteCard/>
        </Container>
    </LayoutSite>
  )
}

export default HomePage

// -----------style----------------

const Container = styled.div`
  padding: 50px 100px;
  display: flex; 
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 33px;
`