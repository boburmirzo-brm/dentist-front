import React, { useEffect, useState } from 'react'
import '../Admin.css'
import { FiTrash } from 'react-icons/fi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from '../../../api/index'

const ManageProduct = () => {
    const [bannerData, setBannerData] = useState([])
    const [swiperData, setSwiperData] = useState([])
    const [bannerRefresh, setBannerRefresh] = useState(false)
    const [swiperRefresh, setSwiperReFresh] = useState(false)


    useEffect(() => {
        axios.get("/banner")
            .then((res) => {
                setBannerData(res.data.innerData)
            })
            .catch(err => {
                console.log(err)
            })
    }, [bannerRefresh])

    useEffect(() => {
        axios.get("/swiper")
            .then((res) => {
                setSwiperData(res.data.innerData)
            })
            .catch(err => {
                console.log(err)
            })
    }, [swiperRefresh])


    return (
        <div className='manage_product'>
            <h4>Manage Product</h4>
            <div className="manage_product_container">
                <h5>Swiper</h5>
                <div className="swiper_container_manage_product">
                    {
                        swiperData?.map((data, inx) =>
                            <div className="manage_product-images" key={inx}>
                                <img src={data.url} alt="" />
                                <div className="delete_btn_manage_product">
                                    <FiTrash
                                        onClick={(e) => {
                                            e.preventDefault()
                                            axios.delete(`/swiper/${data._id}`)
                                                .then(res => {
                                                    setSwiperReFresh(p => !p)
                                                    toast.success(res.data.msg)
                                                    console.log(res.data.msg)
                                                })
                                                .catch(err => {
                                                    console.log(err)
                                                })
                                        }} />
                                </div>
                            </div>
                        )
                    }
                </div>
                <h5>Banner</h5>
                <div className="swiper_container_manage_product">
                    {
                        bannerData?.map((data, inx) =>
                            <div className="manage_product-images" key={inx}>
                                <img src={data.url} alt="" />
                                <div className="delete_btn_manage_product">
                                    <FiTrash
                                        onClick={(e) => {
                                            e.preventDefault()
                                            axios.delete(`/banner/${data._id}`)
                                                .then(res => {
                                                    setBannerRefresh(p => !p)
                                                    toast.success(res.data.msg)
                                                    console.log(res.data.msg)

                                                })
                                                .catch(err => {
                                                    console.log(err)
                                                })
                                        }} />
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default ManageProduct
