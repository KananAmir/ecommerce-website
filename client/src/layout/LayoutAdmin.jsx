import React  from 'react'
import AdminHeader from "../components/admin/admin-header";
import { Box, AppBar, Toolbar, Typography, Drawer, CssBaseline } from "@mui/material";

const drawerWidth = 240;

function LayoutAdmin({children}) {

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Admin
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
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                {children}
            </Box>
        </Box>
    )
}

export default LayoutAdmin