import React, { useState, useEffect } from 'react';
import { Box, List, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import DiscountIcon from '@mui/icons-material/Discount';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from "react-router-dom";


const AdminHeader = () => {
  const listOne = [
      {title: 'Home', to: "/admin", icon: <HomeIcon/>},
      {title: 'Users', to: "/admin/users-list-page", icon: <GroupIcon/>},
      {title: 'Products', to: "/admin/products-list-page", icon: <ProductionQuantityLimitsIcon/>},
      {title: 'Discounts', to: "/admin", icon: <DiscountIcon/>}
  ]

    const listTwo = [
      {title: 'Add Product', to: "/admin/products-crud", icon: <AddCircleIcon/>},
      {title: 'Add Category', to: "/admin/category-crud", icon: <AddCircleIcon/>},
      {title: 'Add Brand', to: "/admin/brand-crud", icon: <AddCircleIcon/>},
    ]

  return (
      <Box sx={{ overflow: 'auto' }}>
        <List>
          {
            listOne.map(item => {
              return <Link to={item.to}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.title} />
                  </ListItemButton>
                </ListItem>
              </Link>
            })
          }
        </List>
        <Divider />
        <List>
            {
                listTwo.map((item) => {
                    return <Link to={item.to}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.title} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                })
            }
        </List>
      </Box>
  );
}

export default AdminHeader