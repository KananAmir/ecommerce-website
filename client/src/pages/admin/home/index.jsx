import React, {useEffect} from 'react'
import LayoutAdmin from "../../../layout/LayoutAdmin";
import {useNavigate} from "react-router";

const AdminHomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/admin/products-list-page');
  },[])

  return (
    <LayoutAdmin>Admin HomePage</LayoutAdmin>
  )
}

export default AdminHomePage;