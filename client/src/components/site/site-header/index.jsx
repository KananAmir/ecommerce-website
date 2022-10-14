import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import logo from "../../../assets/shoplogo.png";
import avatarImg from "../../../assets/default_avatar.jpg";
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const SiteHeader = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [cartIcon, setCartIcon] = useState(0);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [isLogged, setIsLogged] = useState(false);
  return (
    <AppBar
      sx={{
        position: "fixed",
        height: "80px",
        background:
          "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
      }}
    >
      <Container sx={{ height: "100%" }} maxWidth="xl">
        <Toolbar
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          disableGutters
        >
          {/* Logo */}
          <Button>
            <Link to="/">
              <img
                width={70}
                height={40}
                sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                src={logo}
                alt="logo"
              />
            </Link>
          </Button>
          {/* User Info */}
          {/*<Box>*/}
          {/*  <Button>*/}
          {/*    <Link to="/cart"><ShoppingCartIcon className={styles.carticon}></ShoppingCartIcon><sup>0</sup></Link>*/}
          {/*  </Button>*/}
          {/*</Box>*/}
         <Box>
          {isLogged === true ? (
              <>
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="User Info">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <img
                        width={40}
                        height={40}
                        style={{ borderRadius: "50%" }}
                        alt="default avatar"
                        src={avatarImg}
                      />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Link to="user-detail">
                        <Typography textAlign="center">Account</Typography>
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography onClick={handleClickOpen} textAlign="center">
                        Log Out
                      </Typography>
                    </MenuItem>
                    {/* Log Out Modal */}
                    <Dialog
                      fullScreen={fullScreen}
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="responsive-dialog-title"
                    >
                      <DialogTitle id="responsive-dialog-title">
                        {"Log Out"}
                      </DialogTitle>
                      <DialogContent>
                        <DialogContentText>
                          Are you sure to log out?
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Button autoFocus onClick={handleClose}>
                          Yes
                        </Button>
                        <Button onClick={handleClose} autoFocus>
                          No
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </Menu>
                </Box>
              </>
            ) : (
              <>
              <Box>
                <Button>
                  <Link to='/login'>
                    <Typography sx={{color:'white',fontWeight:'bold'}} textAlign="center">Login</Typography>
                  </Link>
                </Button>
                <Button>
                  <Link to='/signup'>
                    <Typography  sx={{color:'white',fontWeight:'bold'}} textAlign="center">Sign Up</Typography>
                  </Link>
                </Button>
                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={cartIcon} color="secondary">
                    <ShoppingCartIcon />
                  </StyledBadge>
                </IconButton>
              </Box>
              </>
            )}
         </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default SiteHeader;
 