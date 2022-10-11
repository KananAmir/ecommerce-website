import { Route, Routes} from "react-router-dom";

import HomePage from "../pages/site/home";
import UserDetail from "../pages/site/user-detail";
import CartPage from "../pages/site/cart-page";
import ProductDetail from "../pages/site/product-detail";
import SiteLoginPage from "../pages/site/login-page";
import SiteSignUpPage from "../pages/site/signup-page";

import AdminHomePage from "../pages/admin/home";
import UsersListPage from "../pages/admin/users-list-page";
import ProductsListPage from "../pages/admin/products-list-page";
import AdminLoginPage from "../pages/admin/login-page";
import AddProduct from "../pages/admin/add-product";
import EditProduct from "../pages/admin/edit-product";
import NotFound from "pages/site/notfound";

function Routing() {

    return (
        <>
            <Routes>
                <Route path='/' element = {<HomePage/>} />
                <Route path='/login' element = {<SiteLoginPage/>} />
                <Route path='/signup' element = {<SiteSignUpPage/>} />
                <Route path='/product-detail/:name/:id' element = {<ProductDetail/>} />
                <Route path='/user-detail' element = {<UserDetail/>} />
                <Route path='/cart' element = {<CartPage/>} />
                <Route path='*' element = {<NotFound/>} />


                <Route path='/admin' element = {<AdminHomePage/>} />
                <Route path='/admin/login' element = {<AdminLoginPage/>} />
                <Route path='/admin/users-list-page' element = {<UsersListPage/>} />
                <Route path='/admin/products-list-page' element = {<ProductsListPage/>} />
                <Route path='/admin/products-add' element = {<AddProduct/>} />
                <Route path='/admin/products-edit' element = {<EditProduct/>} />
            </Routes>
        </>
    )
}

export default Routing