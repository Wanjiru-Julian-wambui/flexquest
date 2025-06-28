import React, { useState } from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import {Link} from "react-scroll"

const Header = () => {
  const mobile = window.innerWidth<=768 ? true : false
  const [menuOpened, setmenuOpened] = useState(false)

  return (
    <div className="header">
        <img src={Logo} alt='' className='logo' />

        {(menuOpened === false && mobile === true) ? (
          <div
            style={{
              backgroundColor: "var(--appColor)",
              padding: "5px",
              borderRadius: "5px"
            }}

            onClick={() => setmenuOpened(true)}
          >
            <img src={Bars} alt="" style={{
              width: "25px",
              height: "25px"
            }}/>
          </div>
        ): (
          <ul className='header-menu'>
            <li >
              <Link
                onClick={() => setmenuOpened(false)}
                to='header'
                activeClass="active"
                span={true}
                smooth={true}
              > Home</Link>
            </li>

            <li ><Link
                onClick={() => setmenuOpened(false)}
                to='programs'
                span={true}
                smooth={true}
            >Programs</Link></li>

            <li ><Link
                onClick={() => setmenuOpened(false)}
                to='reasons'
                span={true}
                smooth={true}
            >About Us</Link></li>

            <li ><Link
                onClick={() => setmenuOpened(false)}
                to='plans'
                span={true}
                smooth={true}
            >Plans</Link></li>

            <li ><Link
              onClick={() => setmenuOpened(false)}
              to='reviews'
              span={true}
              smooth={true}
            > Reviews</Link></li>
        </ul>
        )}
        
    </div>
  )
}

export default Header