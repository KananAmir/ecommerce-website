import React, { useState, useEffect } from "react";
import {
  Box,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CategoryIcon from '@mui/icons-material/Category';
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
import { Link, useLocation } from "react-router-dom";

const AdminHeader = () => {
  const location = useLocation();

  const listOne = [
    { title: "Home", to: "/admin", icon: <HomeIcon /> },
    { title: "Users", to: "/admin/users-list-page", icon: <GroupIcon /> },
    {
      title: "Products",
      to: "/admin/products-list-page",
      icon: <ProductionQuantityLimitsIcon />,
    },
    { title: "Categories", to: "/admin/categories", icon: <CategoryIcon /> },
    { title: "Brands", to: "/admin/brands", icon: <BrandingWatermarkIcon /> },
  ];

  const listTwo = [
    {
      title: "Add Product",
      to: "/admin/products-crud",
      icon: <AddCircleIcon />,
    },
  ];

  return (
    <Box sx={{ overflow: "auto" }}>
      <List>
        {listOne.map((item, index) => {
          return (
            <ListItem
              key={index}
              disablePadding
              component={Link}
              to={item.to}
              selected={item.to === location.pathname}
            >
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <List>
        {listTwo.map((item, index) => {
          return (
            <ListItem
              key={index}
              disablePadding
              component={Link}
              to={item.to}
              selected={item.to === location.pathname}
            >
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default AdminHeader;
