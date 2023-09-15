import React, { useEffect, useState } from 'react'
import './Trip.css'

import caret from './assets/Icons/caret.svg'
import caretRight from './assets/Icons/caretRight.svg'




function Trip() {

    function MenuSideBarItem(props) {

        function toggleIcons() {

        }

        const [open, setOpen] = useState(false);
        const [active, setActive] = useState(false);

        if (active) {
            return (
                <div className='menuSideBarItem'>
                    <a href='#' className='menuSideBarIconButton' onClick={() => { setOpen((prevState) => !prevState); setActive((prevState) => !prevState) }} >
                        <img src={caret} className='menuSideBarIcon'></img>
                    </a>
                    <a>
                        <h1>{props.title}</h1>
                    </a>
                    {open && props.children}
                </div>
            )
        } else

            return (
                <div className='menuSideBarItem'>
                    <a href='#' className='menuSideBarIconButton' onClick={() => { setOpen((prevState) => !prevState); setActive((prevState) => !prevState) }} >

                        <img src={caretRight} className='menuSideBarIcon'></img>
                    </a>
                    <a>
                        <h1>{props.title}</h1>
                    </a>              
                    {open && props.children}
                </div>
            )

    }
    return (
        <>
            <div className='tripMain'>
                <div className='menuMain'>
                    <div className='menuSideBar'>
                        <div className='menuSideBarAI'>
                            <button className='buttonAI'>AI Personal Assistant</button>
                        </div>
                        <MenuSideBarItem
                            title="Explore"
                        >
                            <a>
                            <p>Notes</p>
                            </a>
                            <a>
                            <p>Restaurants</p>
                            </a>
                            <a>
                            <p>Activities</p>
                            </a>                            
                            <a>
                            <p>Accomodations</p>
                            </a>
                        </MenuSideBarItem>
                        <MenuSideBarItem
                            title="Itinerary"
                        >
                            <p>Day 1</p>
                            <p>Day 2</p>
                            <p>Day 3</p>
                        </MenuSideBarItem>
                        <MenuSideBarItem
                            title="Budget"
                        >
                            <p>Expenses</p>
                        </MenuSideBarItem>
                    </div>
                    <div className='menuMainInfo'>
                        <div className='menuMainInfoItemShaded'>
                            <h1>Notes</h1>
                        </div>
                    </div>
                </div>
                <div className='overviewMap shadowElement'>

                </div>
            </div>
        </>
    )
}


export default Trip