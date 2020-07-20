import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Photo from "../../img/photo.jpg";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const Header = ({ auth: { isAuthenticated, loading, user }, logout }) => {
  const authLinks = (
    <div
      className='collapse navbar-collapse justify-content-end'
      id='navbarNav'
    >
      <ul className='navbar-nav '>
        <li className='nav-item'>
          <a className='nav-link' href='/#!'>
            Gallery
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='/#!'>
            Posts
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='/#!'>
            Contac Me
          </a>
        </li>
        <li className='nav-item'>
          <a onClick={logout} className='nav-link' href='/login'>
            <i className='fas fa-sign-out-alt mr-2'></i>
            Log Out
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link ' href='/#!'>
            <i className='fas fa-shopping-cart mr-2'></i>Cart
          </a>
        </li>
      </ul>
    </div>
  );

  const guessLinks = (
    <div
      className='collapse navbar-collapse justify-content-end'
      id='navbarNav'
    >
      <ul className='navbar-nav '>
        <li className='nav-item'>
          <a className='nav-link' href='/#!'>
            Gallery
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='/#!'>
            Contac Me
          </a>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/login'>
            Log in
          </Link>
        </li>
        <li className='nav-item'>
          <a className='nav-link ' href='/#!'>
            <i className='fas fa-shopping-cart mr-2'></i>Cart
          </a>
        </li>
      </ul>
    </div>
  );

  const ownerLinks = (
    <div
      className='collapse navbar-collapse justify-content-end'
      id='navbarNav'
    >
      <ul className='navbar-nav '>
        <li className='nav-item'>
          <a className='nav-link' href='/#!'>
            Gallery
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='/#!'>
            Edit My Art
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='/#!'>
            Posts
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='/#!'>
            Contac Me
          </a>
        </li>
        <li className='nav-item'>
          <a onClick={logout} className='nav-link' href='/login'>
            <i className='fas fa-sign-out-alt mr-2'></i>
            Log Out
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link ' href='/#!'>
            <i className='fas fa-shopping-cart mr-2'></i>Cart
          </a>
        </li>
      </ul>
    </div>
  );

  return (
    <header id='header'>
      <div className='imgbg'>
        <nav className='navbar navbar-expand-lg navbar-dark bg-transparent'>
          <Link className='navbar-brand' to='/'>
            Frieda's Gallery
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          {!loading && (
            <Fragment>
              {!isAuthenticated
                ? guessLinks
                : user === "5f06751d12d3916ccc508cdc"
                ? ownerLinks
                : authLinks}
            </Fragment>
          )}
        </nav>
      </div>
      <div>
        <img
          id='friedaPic'
          src={Photo}
          className='mx-auto d-block'
          alt='Frieda Silva'
        />
      </div>
    </header>
  );
};

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Header);
