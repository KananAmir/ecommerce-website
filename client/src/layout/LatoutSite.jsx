import { useState } from 'react'
import {Link} from "react-router-dom";
import SiteHeader from '../components/site/site-header'
import SiteFooter from '../components/site/site-footer'


function LayoutSite({children}) {

    return (
        <>
            <SiteHeader/>
                <main>
                    {children}
                </main>
            <SiteFooter/>
        </>
    )
}

export default LayoutSite