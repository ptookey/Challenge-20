import { useState } from 'react'
import './Footer.css'
import facebookIcon from './assets/Facebook.png'
import pinterestIcon from './assets/Pinterest.png'
import instagramIcon from './assets/Instagram.png'



function Footer() {

    return (
        <footer>
            <div className='footerCard'>
                <div className="socialsLogos">
                    <img alt='Facebook Logo' className="socialsLogo" src={facebookIcon}></img>
                    <img alt='Instagram Logo' className="socialsLogo" src={instagramIcon}></img>
                    <img alt='Pinterest Logo' className="socialsLogo" src={pinterestIcon}></img>
                </div>
            </div>
        </footer>

    )
}


export default Footer
