import React from 'react'
import Typewriter from 'typewriter-effect'

function Typewriters () {
    return (
        <div className='typewriterContainer'>
                <Typewriter
                    options={{
                        autoStart: true,
                        loop: false,
                        delay: 50,
                        strings: ["Welcome"],
                        pauseFor: 15000,
                    }}
                >
                </Typewriter>
        </div>

    )

}

export default Typewriters