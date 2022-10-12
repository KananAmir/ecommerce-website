import React from "react";
import LayoutAdmin from "../../../layout/LayoutAdmin";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import styled from "@emotion/styled";

const ProductsListPage = () => {
  const products = [
    {
      name: "Iphone 14",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eius dolor. Reiciendis nostrum fuga, numquam aliquam exercitationem repellendus harum ab, molestias sapiente, doloribus voluptatum dolore?",
      categoryId: 13,
      brandId: 13,
      discountPercentage: 13,
      price: 1500,
      category: "phone",
      stock: 29,
      images: [
        "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1662703105/Croma%20Assets/Communication/Mobiles/Images/261963_oqrd6j.png/mxw_640,f_auto",
        "https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-silver-220907_inline.jpg.large.jpg",
        "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/iphone_14_pro_lgd.jpg",
      ],
    },
    {
      name: "Samsung A52",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eius dolor. Reiciendis nostrum fuga, numquam aliquam exercitationem repellendus harum ab, molestias sapiente, doloribus voluptatum dolore?",
      categoryId: 11,
      brandId: 7,
      discountPercentage: 25,
      price: 650,
      category: "phone",
      stock: 17,
      images: [
        "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1662703105/Croma%20Assets/Communication/Mobiles/Images/261963_oqrd6j.png/mxw_640,f_auto",
        "https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-silver-220907_inline.jpg.large.jpg",
        "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/iphone_14_pro_lgd.jpg",
      ],
    },
  ];

  return (
    <LayoutAdmin>
      <Center>
        {/*<Button*/}
        {/*  sx={{*/}
        {/*    backgroundColor: "#ff8b39",*/}
        {/*    color: "white",*/}
        {/*    padding: "10px 25px",*/}
        {/*    ":hover": {*/}
        {/*      bgcolor: "transparent",*/}
        {/*      color: "#ff8b39",*/}
        {/*      //   border: "1px solid #ff8b39",*/}
        {/*    },*/}
        {/*  }}*/}
        {/*>*/}
        {/*  Add New Product*/}
        {/*</Button>*/}
      </Center>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell align="center">BrandId</TableCell>
              <TableCell align="center">CategoryId</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Discount</TableCell>
              <TableCell align="center">Stock</TableCell>
              <TableCell align="center">Edit</TableCell>
              <TableCell align="center">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow
                key={product.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {product.name}
                </TableCell>
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
                      backgroundColor: "green",
                      color: "white",
                      ":hover": {
                        bgcolor: "transparent",
                        color: "green",
                        //   border: "1px solid #ff8b39",
                      },
                    }}
                  >
                    Edit
                  </Button>
                </TableCell>
                <TableCell align="center">
                  <Button
                    sx={{
                      backgroundColor: "red",
                      color: "white",
                      ":hover": {
                        bgcolor: "transparent",
                        color: "red",
                        // border: "1px solid red",
                      },
                    }}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </LayoutAdmin>
  );
};

export default ProductsListPage;

const Center = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;
