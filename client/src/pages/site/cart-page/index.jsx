import React, { useEffect } from 'react'
import LayoutSite from "../../../layout/LatoutSite";
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { addToCartAction, removeCartAction } from "../../../redux/actions/cart.action";
import { useDispatch, useSelector } from "react-redux";

const CartPage = () => {

  const cartState = useSelector((state) => state.cartReducer);

  const dispatch = useDispatch()

  const removeFromCart = (id) => {
    dispatch(removeCartAction(id))
    
  }


  return (
    <LayoutSite>
      <Box marginTop='130px'>
      <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Product name</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">Total Price</TableCell>
            <TableCell align="center">One more</TableCell>
            <TableCell align="center">Count</TableCell>
            <TableCell align="center">One less</TableCell>
            <TableCell align="center">Remove</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartState.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">+</TableCell>
              <TableCell align="right">Count</TableCell>
              <TableCell align="right">-</TableCell>
              <TableCell align="right"><Button onClick={() => removeFromCart(row._id)} variant="text">Remove from cart</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> 
      </Box>
    </LayoutSite>
  )
}

export default CartPage