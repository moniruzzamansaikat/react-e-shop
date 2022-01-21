import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../context/productContext';
import { UserContext } from '../context/userContext';
import '../firebase-config';

function Navbar() {
  const { cart } = useContext(ProductContext);
  const { user } = useContext(UserContext);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/">
            <span className="navbar-brand">
              <img
                src="/img/logo.png"
                id="logo"
                alt=""
                style={{ marginLeft: '-30px' }}
              />
            </span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#myNavbar"
            aria-controls="myNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item active">
                <Link to="/">
                  <span className="nav-link">Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="cart">
                  <span className="nav-link">
                    Cart <sup>{cart.length}</sup>
                  </span>
                </Link>
              </li>

              {/* if no user, sign in */}
              {!user && (
                <li className="nav-item">
                  <Link to="sign-in">
                    <span className="nav-link btn  btn-custom btn-sign-in">
                      Sign In
                    </span>
                  </Link>
                </li>
              )}

              {/* If user, profile */}
              {user && (
                <li className="nav-item">
                  <Link to="profile">
                    <span className="btn btn-custom">Profile</span>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
