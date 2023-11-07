// Write your code here
import {GiHamburgerMenu} from 'react-icons/gi'

import Popup from 'reactjs-popup'

import './index.css'

const Header = () => (
  <nav className="nav-bar-container">
    <img
      className="website-logo"
      src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
      alt=" website logo"
    />
    <Popup
      trigger={
        <button className="btn" type="button" data-testid="HamburgerMenuIcon">
          <GiHamburgerMenu />
        </button>
      }
      className="popup-content"
    >
      {close => (
        <>
          <div>
            <h1>hello world</h1>
            <button type="button" onClick={() => close()}>
              close
            </button>
          </div>
        </>
      )}
    </Popup>
  </nav>
)

export default Header
