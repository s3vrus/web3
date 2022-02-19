import * as React from "react";
import '../styles/styles.scss';
import { TransactionContext } from '../context/TransactionContext';
// import { Link } from 'react-router-dom';

import {FaEthereum} from 'react-icons/fa';
// import {MdOutlineAccountBalanceWallet} from 'react-icons/md';
// import {GiHamburgerMenu} from 'react-icons/gi';
// import {AiOutlineClose} from 'react-icons/ai';
// import {CgProfile} from 'react-icons/cg';
import { useContext } from "react";

// const NavbarItem = ({ title, classProps }) => {
//   return (
//     <li className={`nav-link ${classProps}`}>
//       {title}
//     </li>
//   )
// }


const Header = () => {
  
  // const [isOpen, setOpen] = React.useState(false);

  const { connectWallet, currentAccount } = useContext(TransactionContext);


  return(
    <div className="sticky">
      <nav className="navbar">
        <div className="wrapper">
          <div className="nav-header">
              <div className="nav-logo">
                <FaEthereum className='icon' />
                NFT Collection Info
              </div>

            <ul className="nav-links">
              {/* <li className="nav-link">Option 1</li>
              <li className="nav-link">Option 2</li>
              <li className="nav-link">Option 3</li> */}
              {/* {!currentAccount && (
                <li className="nav-icons">
                  <CgProfile className="nav-links"/>
                </li>
              )}
              {currentAccount && (
                <Link to="/profile">
                    <li className="nav-icons">
                      <CgProfile className="nav-links" color="rgb(32, 129, 226)"/>
                    </li>
                </Link>
              )} */}
              <li className="nav-icons">
                {!currentAccount && (
                  <button type="button" onClick={connectWallet} className="button1">
                    {/* <MdOutlineAccountBalanceWallet className="nav-links"/> */}
                    Connect
                  </button>
                )}
                {currentAccount && (
                  //<p>{currentAccount.slice(0,5)}...{currentAccount.slice(-4)}</p>
                  <button type="button" className="button2">
                    {/* <MdOutlineAccountBalanceWallet className="nav-links" color="rgb(32, 129, 226)" /> */}
                    {currentAccount.slice(0,5)}...{currentAccount.slice(-4)}
                  </button>
                )}
              </li>
            </ul>

            {/* <div onClick={() => setOpen(!isOpen)} className={`hamburger-menu ${isOpen ? "open" : "close"}`}>
              {isOpen
                ? <AiOutlineClose onClick={() => isOpen(false)}/>
                : <GiHamburgerMenu onClick={() => isOpen(true)}/>
              }
              {isOpen && (
                <ul>
                  <li>
                    <AiOutlineClose onClick={() => isOpen(false)}/>
                  </li>
                  {["Option1", "Option2", "Option3"].map((item, index) => (
                    <NavbarItem key={item + index} title={item} />
                  ))}
                </ul>
              )}
            </div> */}

          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header