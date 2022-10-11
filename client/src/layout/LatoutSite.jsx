import SiteHeader from '../components/site/site-header'
import SiteFooter from '../components/site/site-footer'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

function LayoutSite({children}) {

    return (
        <>
            <SiteHeader/>
                <CssBaseline />
                <Container fixed>
                    {children}
                </Container>
            <SiteFooter/>
        </>
    )
}

export default LayoutSite