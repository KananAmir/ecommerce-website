import React from 'react';
import styled from '@emotion/styled';

const SiteFooter = () => {

  return (
      <Footer>
          <span>© 2020 PYP All rights reserved.</span>
      </Footer>
  )
}

export default SiteFooter;


//----------style----------
const Footer = styled.footer`
  display: flex;
  justify-content: center;
  padding: 13px;
  background-color: #f44336;
  
  span{
    font-size: 13px;
    color: white;
  }
`