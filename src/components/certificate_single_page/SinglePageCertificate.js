import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './SinglePageCertificate.css'
import { RxCross2 } from 'react-icons/rx'

const SinglePageCertificate = () => {
    const data = useLocation().state
    const navigate = useNavigate()

    return (
        <div className='main_single_page_certificate'>
            {
                data && <div className="single_page_certificate-shadow" onClick={() => {
                    window.history.replaceState({}, data)
                    navigate("/")
                }}></div>
            }xw
            {
                data && <>
                    <div className="single_page_certificate show">
                        <img src={data?.b2} alt="" />
                    </div>
                    <RxCross2 className='cross_single_page_certificate' onClick={() => {
                        window.history.replaceState({}, data)
                        navigate("/")
                    }} />
                </>
            }
        </div>
    )
}

export default SinglePageCertificate
