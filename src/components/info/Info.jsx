import React from 'react'
// import { FaEnvelope, FaLinkedin } from "react-icons/fa"
import infoImg from '../../assets/2023_EK.jpeg'
import './Info.css'

export default function Info() {
    return (
        <div className="info--container">
            <img src={infoImg} className="info--image" alt="Headshot" />
            <h3>Evgenii Kozhushko</h3>
            <h5>Frontend Developer</h5>
            <a href="https://evgenii.ca/" target="_blank"><h6>evgenii.ca</h6></a>
            <div className="info--button--container">
                <a href="mailto:info@evgenii.ca" target="_blank">
                {/* <button className="btn--info--email"><FaEnvelope className='icon--email'/> Email</button> */}
                <button className="btn--info--email">Email</button>
                </a>
                <a href="https://www.linkedin.com/in/evgenii-kozhushko/" target="_blank">
                {/* <button className="btn--info--linkedin"><FaLinkedin className='icon--linkedin'/>LinkedIn</button> */}
                <button className="btn--info--linkedin">LinkedIn</button>
                </a>
            </div>
        </div>
    )
}