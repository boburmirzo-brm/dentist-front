import React, { useEffect, useState } from 'react'
import { RxCross2 } from 'react-icons/rx'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from '../../../../api/index'
import './EditCertificate.css'

const EditCertificate = ({ editBannerData, setEditBannerData, setBannerRefresh }) => {
    const [headertext, setHeaderText] = useState("")
    const [secondtext, setSecondText] = useState("")
    const [imageLink, setImageLink] = useState("")
    const [loading, setLoading] = useState(false)

    document.body.style.overflow = editBannerData ? "hidden" : "auto"

    useEffect(() => {
        if (editBannerData) {
            setImageLink(editBannerData?.url)
            setHeaderText(editBannerData?.headertext)
            setSecondText(editBannerData?.secondtext)
        }
    }, [editBannerData])

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        let updatefile = {
            url: imageLink,
            headertext,
            secondtext
        }
        axios.put(`/banner/${editBannerData._id}`, updatefile)
            .then((res) => {
                setEditBannerData(null)
                setBannerRefresh(p => !p)
                toast.success(res.data.msg)
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }
    return (
        <div className='main_page_edit_banner_page'>
            {
                editBannerData &&
                <div className='edit_banner_page-shadow'
                    onClick={() => {
                        setEditBannerData(null)
                    }}
                ></div>
            }
            {
                editBannerData &&
                <div className='edit_banner_page show'>
                    <img src={editBannerData?.url} alt="" />
                    <form className='edit_banner_page_form' action="" onSubmit={handleSubmit}>
                        <input required type="text" placeholder='Image link' value={imageLink ? imageLink : ""} onChange={(e) => setImageLink(e.target.value)} />
                        <input required type="text" placeholder='header text' value={headertext ? headertext : ""} onChange={(e) => setHeaderText(e.target.value)} />
                        <input required type="text" placeholder='second text' value={secondtext ? secondtext : ""} onChange={(e) => setSecondText(e.target.value)} />
                        <button disabled={loading} type='submit'>{loading ? "Loading..." : "Update"}</button>
                    </form>
                    <RxCross2 onClick={() =>
                        setEditBannerData(null)
                    } />
                </div>
            }
            <ToastContainer />
        </div>
    )
}

export default EditCertificate
