import React from 'react'
import './index.scss'
import LayoutSite from "../../../layout/LatoutSite";
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Grid from '@mui/material/Grid';

const ProductDetail = () => {
  const product = {
      name: 'Iphone 14',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eius dolor. Reiciendis nostrum fuga, numquam aliquam exercitationem repellendus harum ab, molestias sapiente, doloribus voluptatum dolore?',
      price: 1500,
      category: 'phone',
      stock: 17,
      images: ['https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1662703105/Croma%20Assets/Communication/Mobiles/Images/261963_oqrd6j.png/mxw_640,f_auto','']
    }
  
  return (
    <LayoutSite>
      <div id="product-detail">
        <Grid container spacing={2}
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '90vh' }}
            >
          <Grid item xs={12} md={6}>
             <img width={400} src={product.images[0]} alt="product_detail" />
          </Grid>
          <Grid item xs={12}  md={6}>
          <h1 className='product-name'>{product.name}</h1>
          <h3>Category: {product.category}</h3>
          <h4>Price: {product.price} Azn</h4>
          <h4>Stock: {product.stock}</h4>
          <p>Description: {product.description}</p>
           <div marginTop={20}>
            <Button variant="outlined">Add to Cart <AddShoppingCartIcon /></Button>
           </div>
          </Grid>
        </Grid>
      </div>
    </LayoutSite>
  )
}

export default ProductDetail