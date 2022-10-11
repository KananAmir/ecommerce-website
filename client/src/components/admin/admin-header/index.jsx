import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router';

const AdminHeader = () => {

  const navigate = useNavigate();

  const handleClick = (event) => {
    event.target.value ?
    navigate(`/admin/${event.target.value}`) : navigate(`/admin`)
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', '& > *': { m: 1,},}}>
      <ButtonGroup variant="text" aria-label="text button group">
        <Button onClick={handleClick}>Home</Button>
        <Button onClick={handleClick} value={'users-list-page'}>Users</Button>
        <Button onClick={handleClick} value={'products-list-page'}>Products</Button>
        <Button onClick={handleClick} value={'products-add'}>Add Product</Button>
        <Button onClick={handleClick} value={'products-edit'}>Edit Product</Button>
        <Button onClick={handleClick} value={'discounts'}>Discounts</Button>
      </ButtonGroup>
    </Box>
  );
}

export default AdminHeader