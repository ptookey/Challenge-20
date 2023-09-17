import { useState } from 'react'
import './Header.css'
import bookIcon from './assets/book.svg'
import chevronIcon from './assets/chevron.svg'
import windowIcon from './assets/window.svg'
import codeBracket from './assets/codeBracket.svg'
import folderIcon from './assets/folder.svg'
import uvLogo from './assets/UV-Logo.png'
import volunteer from './assets/Volunteer.png'
import social from './assets/social.svg'
import shopping from './assets/shopping.svg'
import schedule from './assets/schedule.svg'



import { CSSTransition } from 'react-transition-group'


function Header() {

  return (
    <>
      <NavBar>
        <NavItem className='navItem' link='#' icon={bookIcon}></NavItem>
        <p className='navSubTitle'>About Me</p>
        <NavItem className='navItem isDropdown' className1='isDropdown' icon={windowIcon}>

          <DropdownMenu></DropdownMenu>

        </NavItem>
        <p className='navSubTitle'>Projects</p>
      </NavBar>
    </>
  );
}

function DropdownMenu() {

  const [activeMenu, setActiveMenu] = useState('main')
  const [menuHeight, setMenuHeight] = useState(null);

  function calcHeight(el) {
    const height = el.offsetHeight
    setMenuHeight(height)
  }

  function DropdownItem(props) {
    if (props.title === "true") {
      return (
        <a href="#" className='isDropdown menuItem' onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
          <span className='iconButton dropdownTitle isDropdown'>
            <img className='isDropdown' src={props.leftIcon}></img>
          </span>

          {props.children}
        </a>
      )
    }

    return (
      <a href="#" className='isDropdown menuItem' onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className='iconButton isDropdown'>
          <img className='isDropdown' src={props.leftIcon}></img>
        </span>

        {props.children}

        <span className='iconRight'>
          <img src={props.rightIcon}></img>
        </span>

      </a>
    )
  }

  return (
    <div className='dropdown isDropdown' style={{ height: menuHeight }}>
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        onEnter={calcHeight}
      >

        <div className='menu isDropdown'>
          <DropdownItem
            leftIcon={folderIcon}
            goToMenu='group'
          >
            <p className='isDropdown'>Group Projects</p>
          </DropdownItem>

          <DropdownItem
            leftIcon={folderIcon}
            goToMenu='side'>
            <p className='isDropdown'>Side Projects</p>
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "group"}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        onEnter={calcHeight}
      >

        <div className='menu isDropdown'>
          <DropdownItem
            leftIcon={chevronIcon}
            goToMenu='main'
            title="true">
            <h1 className='isDropdown'>Group Projects</h1>
          </DropdownItem>
          <DropdownItem
            leftIcon={uvLogo}
          >
            <p className='isDropdown'>Travel Planner</p>
          </DropdownItem>

          <DropdownItem
            leftIcon={volunteer}
          >
            <p className='isDropdown'>Volunteer Company</p>
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "side"}
        unmountOnExit 
        timeout={500}
        classNames="menu-secondary"
        onEnter={calcHeight}
      >

        <div className='menu isDropdown'>
          <DropdownItem
            leftIcon={chevronIcon}
            goToMenu='main'
            title="true">
            <h1 className='isDropdown'>Side Projects</h1>
          </DropdownItem>
          <DropdownItem
            leftIcon={schedule}>
            <p className='isDropdown'>Schedule Organizer</p>
          </DropdownItem>
          <DropdownItem
            leftIcon={social}>
            <p className='isDropdown'>Social Media</p>
          </DropdownItem>
          <DropdownItem
            leftIcon={shopping}>
            <p className='isDropdown'>E-Commerce</p>
          </DropdownItem>
        </div>


      </CSSTransition>
    </div>
  )
}

function NavBar(props) {
  return (
    <nav className='navBar'>
      <ul className='navBarNav'>{props.children}</ul>
    </nav>
  )
}

function NavItem(props) {

  const [open, setOpen] = useState(false);

  window.addEventListener("mousedown", (Event) => {
    // console.log(Event.target)
    if (Event.target.className === 'isDropdown') {
      return
    } else if (Event.target.className === 'isDropdown menuItem') {
      return
    } else if (Event.target.className === 'dropdown isDropdown') {
      return
    } else if (Event.target.className === 'navItem isDropdown') {
      return
    } else if (Event.target.className === 'iconButton isDropdown') {
      return
    } else {
      setOpen(false);
    }
  });

  return (
    <li className={props.className}>
      <a href={props.link} className='iconButton' onClick={() => setOpen((prevState) => !prevState)}>
        <img className={props.className1} src={props.icon}></img>
      </a>

      {open && props.children}
    </li>
  )
}

export default Header
