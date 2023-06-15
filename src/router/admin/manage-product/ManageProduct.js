import React, { useEffect, useState } from 'react'
import '../Admin.css'
import { FiTrash } from 'react-icons/fi'
import { BiPencil } from 'react-icons/bi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from '../../../api/index'
import EditCertificate from './edit_certificate/EditCertificate';

const ManageProduct = () => {
    const [bannerData, setBannerData] = useState([])
    const [certificateData, setCertificateData] = useState([])
    const [bannerRefresh, setBannerRefresh] = useState(false)
    const [certificateRefresh, setCertificateRefresh] = useState(false)
    const [editBannerData, setEditBannerData] = useState(null)


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
        axios.get("/certificate")
            .then((res) => {
                setCertificateData(res.data.innerData)
            })
            .catch(err => {
                console.log(err)
            })
    }, [certificateRefresh])


    return (
        <div className='manage_product'>
            <h4>Manage Product</h4>
            <div className="manage_product_container">
                <h3>Swiper</h3>
                <div className="swiper_container_manage_product">
                    {
                        certificateData?.map((data, inx) =>
                            <div className="manage_product-images" key={inx}>
                                <img src={data.url} alt="" />
                                <div className="delete_btn_manage_product">
                                    <FiTrash
                                        onClick={(e) => {
                                            e.preventDefault()
                                            axios.delete(`/swiper/${data._id}`)
                                                .then(res => {
                                                    setCertificateRefresh(p => !p)
                                                    toast.success(res.data.msg)
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
                <h3>Banner</h3>
                <div className="swiper_container_manage_product">
                    {
                        bannerData?.map((data, inx) =>
                            <div className="manage_product-images" key={inx}>
                                <img src={data.url} alt="" />
                                {
                                    data.headertext && data.secondtext ?
                                        <div className='text_area_manage_product'>
                                            <h4>1st text: {data.headertext}</h4>
                                            <p>2nd text: {data.secondtext}</p>
                                        </div> :
                                        <div className='text_area_manage_product'></div>
                                }
                                <div className="delete_btn_manage_product"
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
                                    }}
                                >
                                    <FiTrash />
                                </div>
                                <div className="edit_btn_manage_product">
                                    <BiPencil onClick={() => setEditBannerData(data)} />
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            <ToastContainer />
            <EditCertificate editBannerData={editBannerData} setEditBannerData={setEditBannerData} setBannerRefresh={setBannerRefresh} />
        </div>
    )
}

export default ManageProduct
