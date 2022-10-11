import { useState } from 'react'
import {Link} from "react-router-dom";
import AdminHeader from "../components/admin/admin-header";
import AdminFooter from "../components/admin/admin-footer";

function LayoutAdmin({children}) {

    return (
        <>
            <AdminHeader/>
                <main>
                    {children}
                </main>
            <AdminFooter>I am Footer of Admin</AdminFooter>
        </>
    )
}

export default LayoutAdmin