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


function Header({ currentPage, handlePageChange }) {

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
          <a href={props.link} target='_blank' className='isDropdown menuItem' onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
            <span className='iconButton dropdownTitle isDropdown'>
              <img alt={props.alt} className='isDropdown' src={props.leftIcon}></img>
            </span>
  
            {props.children}
          </a>
        )
      }
  
      return (
        <a href={props.link} target='_blank' className='isDropdown menuItem' onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
          <span className='iconButton isDropdown'>
            <img alt={props.alt} className='isDropdown' src={props.leftIcon}></img>
          </span>
  
          {props.children}
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
              alt='Folder Icon'
            >
              <p className='isDropdown'>Group Projects</p>
            </DropdownItem>
  
            <DropdownItem
              leftIcon={folderIcon}
              goToMenu='side'
              alt='Folder Icon'
            >
  
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
              title="true"
              alt='Chevron Icon'>
  
  
              <h1 className='isDropdown'>Group Projects</h1>
            </DropdownItem>
            <DropdownItem
              leftIcon={uvLogo}
              link="https://lifetimes-trip-planner-e4ba065bd3bc.herokuapp.com/"
              alt='Vacation Planner Logo'
            >
              <p className='isDropdown'>Travel Planner</p>
            </DropdownItem>
  
            <DropdownItem
              leftIcon={volunteer}
              link="https://pacific-wildwood-17680-8e953e055e35.herokuapp.com/"
              alt='Volunteer Website Icon'
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
              title="true"
              alt='Chevron Icon'>
              <h1 className='isDropdown'>Side Projects</h1>
            </DropdownItem>
            <DropdownItem
              leftIcon={schedule}
              alt="Schedule Icon">
              <p className='isDropdown'>Schedule Organizer</p>
            </DropdownItem>
            <DropdownItem
              leftIcon={social}
              alt='Social Icon'>
              <p className='isDropdown'>Social Media</p>
            </DropdownItem>
            <DropdownItem
              leftIcon={shopping}
              alt='Shopping Cart Icon'>
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
  
    if (props.goAbout) {
      return (
        <li className={props.className}>
          <a href={props.link} className='iconButton' onClick={() => {setOpen((prevState) => !prevState);handlePageChange('AboutMe')}}>
            <img alt={props.extra} className={props.className1} src={props.icon}></img>
          </a>
  
          {open && props.children}
        </li>
      )
    }
  
    if (props.noLink) {
      return (
        <li className={props.className}>
          <div className='iconButton isDropdown' onClick={() => setOpen((prevState) => !prevState)}>
            <img alt={props.extra} className={props.className1} src={props.icon}></img>
          </div>
  
          {open && props.children}
        </li>
      )
    }
  
    return (
      <li className={props.className}>
        <a href={props.link} className='iconButton isDropdown' onClick={() => setOpen((prevState) => !prevState)}>
          <img alt={props.extra} className={props.className1} src={props.icon}></img>
        </a>
  
        {open && props.children}
      </li>
    )
  }

  return (
    <>
      <NavBar>
        <NavItem extra='Book Icon' className='navItem' goAbout='true' link='#AboutMe' icon={bookIcon}></NavItem>
        <a href='#AboutMe' onClick={() => handlePageChange('AboutMe')} className='navSubTitle'>About Me</a>
        <NavItem noLink='true' extra='Window Icon' className='navItem isDropdown' className1='isDropdown' icon={windowIcon}>

          <DropdownMenu></DropdownMenu>

        </NavItem>
        <li className='navSubTitle'>Projects</li>
      </NavBar>
    </>
  );
}

export default Header
