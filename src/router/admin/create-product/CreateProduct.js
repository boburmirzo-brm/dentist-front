import React, { useState } from 'react'
import '../Admin.css'

const CreateProduct = () => {
    const [imageLink, setImageLink] = useState(""),
        [checking, setChecking] = useState(""),
        [loading, setLoading] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(checking);
        setLoading(true)
        // axios.post(`/${checking}`, imageLink)
        //     .then((res) => {
        //         console.log(res)
        //         setImageLink("")
        //     })
        //     .catch((err) => {
        //         console.log(err)
        //     }).finally(() => {
        //         setLoading(false)
        //     })
    }
    return (
        <div className='create-product_page'>
            <h5>Create Product</h5>
            <form onSubmit={handleSubmit} action="" className='create_product-form'>
                <div className="create-product_checkbox_container">
                    <p>Swiper</p>
                    <input required onChange={(e) => setChecking(e.target.value)} value="swiper" type="radio" name='data-type' />
                    <p>Banner</p>
                    <input required value="banner" onChange={(e) => setChecking(e.target.value)} type="radio" name='data-type' />
                </div>
                <input required type="text" placeholder='image link' value={imageLink} onChange={(e) => setImageLink(e.target.value)} />
                <button disabled={loading} type='submit'>{loading ? "Loading..." : "Upload New Picture"}</button>
            </form>
        </div>
    )
}

export default CreateProduct
