import { useState } from 'react'
import {Link} from "react-router-dom";
import AdminHeader from "../components/admin/admin-header";

function LayoutAdmin({children}) {

    return (
        <>
            <AdminHeader/>
            <main>
                {children}
            </main>
        </>
    )
}

export default LayoutAdmin