import React, { useEffect, useState } from "react";
import LayoutAdmin from "../../../layout/LayoutAdmin";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProductsAction,
  removeProductAction,
} from "../../../redux/actions/products.action";
import { deleteProduct, getProducts } from "../../../services/product.service";

const ProductsListPage = () => {
  const [products, setProducts] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [id, setId] = useState();

  useEffect(() => {
    handleGet();
  }, [products]);

  async function handleGet() {
    setProducts(await getProducts());
  }

  const handleYeap = () => {
    setOpen(false);
    deleteProduct(id);
    handleGet();
  };

  function handleDelete(id) {
    setId(id);
    setOpen(true);
  }

  return (
    <LayoutAdmin>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow
              sx={{
                "&:first-of-type th": { fontWeight: "600", fontSize: "16px" },
              }}
            >
              <TableCell>Product Name</TableCell>
              <TableCell align="center">Brand Id</TableCell>
              <TableCell align="center">Category Id</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Discount</TableCell>
              <TableCell align="center">Stock</TableCell>
              <TableCell align="center">Edit</TableCell>
              <TableCell align="center">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products &&
              products?.map((product, index) => (
                <TableRow
                  key={index}
                  sx={{
                    "&:first-of-type td, &:first-of-type th": { border: 0 },
                  }}
                >
                  <TableCell>{product.name}</TableCell>
                  <TableCell align="center">{product.brandId}</TableCell>
                  <TableCell align="center">{product.categoryId}</TableCell>
                  <TableCell align="center">{product.price} AZN</TableCell>
                  <TableCell align="center">
                    {product.discountPercentage}%
                  </TableCell>
                  <TableCell align="center">{product.stock}</TableCell>
                  <TableCell align="center">
                    <Button
                      sx={{
                        color: "green",
                        fontWeight: "500",
                        border: "1px solid green",
                        ":hover": {
                          backgroundColor: "green",
                          color: "white",
                        },
                      }}
                    >
                      Edit
                    </Button>
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      sx={{
                        color: "red",
                        fontWeight: "500",
                        border: "1px solid red",
                        ":hover": {
                          backgroundColor: "red",
                          color: "white",
                        },
                      }}
                      onClick={() => handleDelete(product._id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure about deleting this brand?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Nope</Button>
          <Button onClick={handleYeap}>Yeap</Button>
        </DialogActions>
      </Dialog>
    </LayoutAdmin>
  );
};

export default ProductsListPage;
