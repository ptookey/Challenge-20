import './Projects.css'

function Projects(props) {
    return (
        <div className='projectMain'>
            <div className='aboutMeMain'>
                <m.div
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: 1
                    }}
                    transition={{
                        duration: 0.25,
                        ease: 'easeInOut'
                    }}
                >
                    <div className='aboutMeContentBorderLeft'></div>
                    <div className='aboutMeContentBorderRight'></div>
                    <div className='aboutMeContentContainer'>

                        <img alt='Flame Icon' className='aboutMeContentIcon' src={flameIcon}></img>
                        <m.div
                            initial={{
                                opacity: 0
                            }}
                            animate={{
                                opacity: 1
                            }}
                            transition={{
                                duration: 0.5,
                                ease: 'easeInOut'
                            }}

                            className='aboutMeContentTextContainer'>
                            <h2 className='aboutMeContentText'>My name is Peter Tookey, I am a web developer passionate about blending design creativity with coding expertise to create user-friendly and visually appealing websites while staying up-to-date with the latest web development trends.</h2>
                        </m.div>
                    </div>
                </m.div>
            </div>
        </div>
    )
}