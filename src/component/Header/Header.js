import React, { useState } from 'react'
import './Header.css'
import logo from '../../assets/logo.png'
import bars from '../../assets/bars.png';
import { Link } from 'react-scroll';
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
        <li >
        <Link
        onClick={() => setMenuOpend(false)}
        to='home'
        spy={true}
        smooth={true}
        >Home</Link>
        </li>

        <li >
        <Link
        onClick={() => setMenuOpend(false)}
        to='programs'
        spy={true}
        smooth={true}
        >Programs</Link>
        </li>

        <li >
        <Link
        onClick={() => setMenuOpend(false)}
        to='reasons'
        spy={true}
        smooth={true}
        >Why Us</Link>
        </li>

        <li >
        <Link
        onClick={() => setMenuOpend(false)}
        to='plans'
        spy={true}
        smooth={true}
        >Plans</Link>
        </li>
        
        <li >
        <Link
        onClick={() => setMenuOpend(false)}
        to='testimonials'
        spy={true}
        smooth={true}
        >Testimonials</Link>
        </li>
      </ul>)}



    </div>
  )
}

export default Header
