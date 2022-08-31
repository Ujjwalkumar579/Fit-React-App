import React, { useState } from 'react'
import './Header.css'
import logo from '../../assets/logo.png'
import bars from '../../assets/bars.png';
const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpend] = useState(false);
  return (
    <div className='header'>
      <img src={logo} alt="" className='logo' />
      {(menuOpened === false && mobile === true) ? (
        <div style={{
          backgroundColor: 'var(--appColor', padding: '0.5rem', borderRadius: '5px', cursor: 'pointer'
        }}
          onClick={() => setMenuOpend(true)}
        >
          <img src={bars} alt="" style={{ width: '1.5rem', height: '1.5rem' }} />
        </div>
      ) : (<ul className='header-menu'>
        <li onClick={() => setMenuOpend(false)}>Home</li>
        <li onClick={() => setMenuOpend(false)}>Programs</li>
        <li onClick={() => setMenuOpend(false)}>Why us</li>
        <li onClick={() => setMenuOpend(false)}>Plans</li>
        <li onClick={() => setMenuOpend(false)}>Testimonials</li>
      </ul>)}



    </div>
  )
}

export default Header
