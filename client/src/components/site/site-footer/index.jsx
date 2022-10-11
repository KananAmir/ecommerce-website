import React from 'react';
import styled from '@emotion/styled';

const SiteFooter = () => {

  return (
      <Footer>
          <span>© 2022 PYP All rights reserved.</span>
      </Footer>
  )
}

export default SiteFooter;


//----------style----------
const Footer = styled.footer`
  display: flex;
  justify-content: center;
  padding: 13px;
  background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
  
  span{
    font-size: 13px;
    color: white;
    font-weight: bold;
  }
`