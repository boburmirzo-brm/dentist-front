import React from 'react'
import { FiEdit2 } from 'react-icons/fi'
import { TbHomeEdit } from 'react-icons/tb'
import CreateProduct from './create-product/CreateProduct'
import ManageProduct from './manage-product/ManageProduct'
import { NavLink, Routes, Route } from 'react-router-dom'
import './Admin.css'

const Admin = () => {

    return (
        <div className='admin_page'>
            <div className="admin_page-sidebar">
                <div className="admin_page-sidebar-logo">
                    <h1 className='admin-page_sidebar-logo-text'>Admin</h1>
                    <h1 className='admin-page_sidebar-logo-second-text'>A</h1>
                </div>
                <ul className='admin_page-links-container'>
                    <NavLink to="create-product">
                        <li className='admin_page-sidebar-links'>
                            <FiEdit2 />
                            <p>Create-product</p>
                        </li>
                    </NavLink>
                    <NavLink to="manage-product">
                        <li className='admin_page-sidebar-links'>
                            <TbHomeEdit />
                            <p>Manage-Product</p>
                        </li>
                    </NavLink>
                </ul>
            </div>
            <div className="admin_page-main">
                <Routes>
                    <Route path="/create-product" element={<CreateProduct />} />
                    <Route path="/manage-product" element={<ManageProduct />} />
                </Routes>
            </div>
        </div>
    )
}

export default Admin
