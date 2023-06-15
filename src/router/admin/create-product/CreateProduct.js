import React, { useState } from 'react'
import axios from '../../../api/index'
import '../Admin.css'

const CreateProduct = () => {
    const [imageLink, setImageLink] = useState(""),
        [checking, setChecking] = useState(""),
        [loading, setLoading] = useState(false),
        [headertext, setHeaderText] = useState(""),
        [secondtext, setSecondText] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()
        if (checking === "certificate") {
            const data = {
                url: imageLink
            }
            setLoading(true)
            axios.post(`/certificate`, data)
                .then((res) => {
                    console.log(res)
                    setImageLink("")
                })
                .catch((err) => {
                    console.log(err)
                }).finally(() => {
                    setLoading(false)
                })
        }
        else if (checking === "banner") {
            const data = {
                url: imageLink,
                headertext,
                secondtext
            }
            setLoading(true)
            axios.post(`/banner`, data)
                .then((res) => {
                    console.log(res)
                    setImageLink("")
                })
                .catch((err) => {
                    console.log(err)
                }).finally(() => {
                    setLoading(false)
                })
        }
    }
    return (
        <div className='create-product_page'>
            <h5>Create Product</h5>
            <form onSubmit={handleSubmit} action="" className='create_product-form'>
                <div className="create-product_checkbox_container">
                    <p>Certificate</p>
                    <input required onChange={(e) => setChecking(e.target.value)} value="certificate" type="radio" name='data-type' />
                    <p>Banner</p>
                    <input required value="banner" onChange={(e) => setChecking(e.target.value)} type="radio" name='data-type' />
                </div>
                {
                    checking === "certificate" ?
                        <>
                            <input required type="text" placeholder='image link' value={imageLink} onChange={(e) => setImageLink(e.target.value)} />
                            <button disabled={loading} type='submit'>{loading ? "Loading..." : "Upload New Picture"}</button>
                        </>
                        :
                        checking === "banner" ?
                            <>
                                <input required type="text" placeholder='header text' value={headertext} onChange={(e) => setHeaderText(e.target.value)} />
                                <input required type="text" placeholder='second banner text' value={secondtext} onChange={(e) => setSecondText(e.target.value)} />
                                <input required type="text" placeholder='image link' value={imageLink} onChange={(e) => setImageLink(e.target.value)} />
                                <button disabled={loading} type='submit'>{loading ? "Loading..." : "Upload New Picture"}</button>
                            </> :
                            <>
                            </>
                }
            </form>
        </div >
    )
}

export default CreateProduct
