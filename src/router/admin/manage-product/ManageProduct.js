import React from 'react'
import '../Admin.css'
import { FiTrash } from 'react-icons/fi'

const ManageProduct = () => {
    return (
        <div className='manage_product'>
            <h4>Manage Product</h4>
            <div className="manage_product_container">
                <h5>Swiper</h5>
                <div className="swiper_container_manage_product">
                    <div className="manage_product-images">
                        <img src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" alt="" />
                        <div className="delete_btn_manage_product">
                            <FiTrash />
                        </div>
                    </div>
                </div>
                <h5>Banner</h5>
                <div className="banner_container_manage_product">
                    <div className="manage_product-images">
                        <img src="https://puducherry-dt.gov.in/wp-content/themes/district-theme-2/images/blank.jpg" alt="" />
                        <div className="delete_btn_manage_product">
                            <FiTrash />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManageProduct
