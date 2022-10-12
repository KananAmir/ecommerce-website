import React  from 'react'
import AdminHeader from "../components/admin/admin-header";
import { Box, AppBar, Toolbar, Typography, Drawer, CssBaseline } from "@mui/material";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import {Link} from "react-router-dom";

const drawerWidth = 240;

function LayoutAdmin({children}) {

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar style={{display: 'flex', justifyContent: 'space-between'}}>
                    <Typography variant="h6" noWrap component="div">
                        Admin Panel
                    </Typography>
                    <Typography variant="h6" noWrap component="div">
                        <Link to='/' style={linkStyle}>
                            {/*htmlColor='radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)'*/}
                            <svg width={0} height={0}>
                                <linearGradient id="linearColors" x1={1} y1={0} x2={1} y2={1}>
                                    <stop offset={0} stopColor="rgba(238,174,202,1)" />
                                    <stop offset={1} stopColor="rgba(148,187,233,1)" />
                                </linearGradient>
                            </svg>
                            <ExitToAppIcon sx={{ fill: "url(#linearColors)" }} />
                            Go to Site
                        </Link>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Toolbar />
                <AdminHeader/>
            </Drawer>
            <Box component="main" style={{marginTop: '65px'}} sx={{ flexGrow: 1, p: 3 }}>
                {children}
            </Box>
        </Box>
    )
}

export default LayoutAdmin;

//------------style-------------
const linkStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '120px',
    color: 'white'
}