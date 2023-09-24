import './AboutMe.css'
import flameIcon from './assets/fire.svg'
import { motion as m } from 'framer-motion'

function AboutMe({ currentPage, handlePageChange }) {
    return (
        <div className='aboutMeMain'>
            <m.div
                className='aboutMeContentBorderLeft'
                initial={{
                    opacity: 0,
                    x: "-100%"
                }}
                animate={{
                    opacity: 1,
                    x: "0"
                }}
                transition={{
                    duration: 0.3,
                    ease: 'easeInOut'
                }}
            >
                <img alt='Flame Icon' className='aboutMeContentIcon' src={flameIcon}></img>
            </m.div>

            <m.div
                className='aboutMeContentBorderRight'
                initial={{
                    opacity: 0,
                    x: "100%"
                }}
                animate={{
                    opacity: 1,
                    x: '0'
                }}
                transition={{
                    duration: 0.3,
                    ease: 'easeInOut'
                }}
            ></m.div>

            <m.div
                initial={{
                    opacity: 0,
                    scale: 0.1
                }}
                animate={{
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 0.3,
                    ease: 'easeInOut'
                }}
                className='aboutMeContentContainer'>

                <div

                    className='aboutMeContentTextContainer'>
                    <h2 className='aboutMeContentText'>My name is Peter Tookey, a web developer passionate about blending design creativity with coding expertise to create user-friendly and visually appealing websites while staying up-to-date with the latest web development trends.</h2>
                </div>
            </m.div>
        </div>
    )
}

export default AboutMe