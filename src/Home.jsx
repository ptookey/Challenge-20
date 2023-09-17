import './Home.css'
import Typewriters from './Typewriter'

function Home() {

    return (
        <div className='homeMain'>
            <h1 className='homeMainWelcome'>
                <Typewriters></Typewriters>
            </h1>
        </div>
    )
}

export default Home