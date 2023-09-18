import './AboutMe.css'
import flameIcon from './assets/fire.svg'

function AboutMe() {
    return (
        <div className='aboutMeMain'>
            <div className='aboutMeContentBorderLeft'></div>
            <div className='aboutMeContentBorderRight'></div>
            <div className='aboutMeContentContainer'>
                <img alt='Flame Icon' className='aboutMeContentIcon' src={flameIcon}></img>
                <div className='aboutMeContentTextContainer'>
                    <h2 className='aboutMeContentText'>My name is Peter Tookey, I am a web developer passionate about blending design creativity with coding expertise to create user-friendly and visually appealing websites while staying up-to-date with the latest web development trends.</h2>
                </div>
            </div>
        </div>
    )
}

export default AboutMe