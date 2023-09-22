import { useState } from 'react'
import './Footer.css'

import instagramIcon from './assets/instagram.svg'
import githubIcon from './assets/github-mark.svg'
import linkedinIcon from './assets/linkedin.svg'


function Footer() {

    return (
        <footer>
            <div className='footerCard'>
                <div className="socialsLogos">
                    <a className="socialsLogoLink" target='_blank' href="https://www.instagram.com/petetookey/">
                        <img alt='Instagram Logo' className="socialsLogo" src={instagramIcon}></img>
                    </a>
                    <a className="socialsLogoLink" target='_blank' href="https://github.com/ptookey">
                        <img alt='Github Logo' className="socialsLogo" src={githubIcon}></img>
                    </a>
                    <a className="socialsLogoLink" target='_blank' href="https://www.linkedin.com/">
                        <img alt='linkedIn Logo' className="socialsLogo" src={linkedinIcon}></img>
                    </a>
                </div>
            </div>
        </footer>

    )
}


export default Footer
