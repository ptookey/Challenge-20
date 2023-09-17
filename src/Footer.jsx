import { useState } from 'react'
import './Footer.css'
import facebookIcon from './assets/Facebook.png'
import pinterestIcon from './assets/Pinterest.png'
import instagramIcon from './assets/Instagram.png'



function Footer() {

    return (
        <footer>
            <div className='footerCard contact'>
                <div className="socialsLogos">
                    <img className="socialsLogo" src={facebookIcon}></img>
                    <img className="socialsLogo" src={instagramIcon}></img>
                    <img className="socialsLogo" src={pinterestIcon}></img>
                </div>
            </div>
        </footer>

    )
}


export default Footer
