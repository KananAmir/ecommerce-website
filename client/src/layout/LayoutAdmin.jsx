import { useState } from 'react'
import {Link} from "react-router-dom";
import AdminHeader from "../components/admin/admin-header";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

function LayoutAdmin({children}) {

    return (
        <>
            <AdminHeader/>
            <CssBaseline />
            <Container fixed>
                {children}
            </Container>
        </>
    )
}

export default LayoutAdmin