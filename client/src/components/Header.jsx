import * as React from "react";
import '../styles/styles.scss';
import { TransactionContext } from '../context/TransactionContext';

import {FaEthereum} from 'react-icons/fa';
import {MdOutlineAccountBalanceWallet} from 'react-icons/md';
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiOutlineClose} from 'react-icons/ai';
import {CgProfile} from 'react-icons/cg';
import { useContext } from "react";

const NavbarItem = ({ title, classProps }) => {
  return (
    <li className={`nav-link ${classProps}`}>
      {title}
    </li>
  )
}


const Header = () => {
  
  const [isOpen, setOpen] = React.useState(false);

  const { connectWallet, currentAccount } = useContext(TransactionContext);


  return(
    <div className="sticky">
      <nav className="navbar">
        <div className="wrapper">
          <div className="nav-header">
            <div className="nav-logo">
              <FaEthereum className='icon' />
              Web 3.0
            </div>

            <ul className="nav-links">
              {["Option1", "Option2", "Option3"].map((item, index) => (
                <NavbarItem key={item + index} title={item} />
              ))}
              {!currentAccount && (
                <li className="nav-icons">
                  <CgProfile className="nav-links"/>
                </li>
              )}
              {currentAccount && (
                <li className="nav-icons">
                  <CgProfile className="nav-links" color="rgb(32, 129, 226)"/>
                </li>
              )}
              <li className="nav-icons">
                {!currentAccount && (
                  <button type="button" onClick={connectWallet}>
                    <MdOutlineAccountBalanceWallet className="nav-links"/>
                  </button>
                )}
                {currentAccount && (
                  //<p>{currentAccount.slice(0,5)}...{currentAccount.slice(-4)}</p>
                  <button type="button">
                    <MdOutlineAccountBalanceWallet className="nav-links" color="rgb(32, 129, 226)"/>
                  </button>
                )}
              </li>
            </ul>

            <div onClick={() => setOpen(!isOpen)} className={`hamburger-menu ${isOpen ? "open" : "close"}`}>
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
            </div>

          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header