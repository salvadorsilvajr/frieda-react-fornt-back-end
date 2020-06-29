import React from 'react'

const Navbar = () => {
   return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
      <a className="navbar-brand" href="index.html">
         Frieda's Gallery
      </a>
      <button
         className="navbar-toggler"
         type="button"
         data-toggle="collapse"
         data-target="#navbarNav"
         aria-controls="navbarNav"
         aria-expanded="false"
         aria-label="Toggle navigation"
      >
         <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
         <ul className="navbar-nav ">
            <li className="nav-item">
               <a className="nav-link" href="gallery.html">
                  Gallery
               </a>
            </li>
            <li className="nav-item">
               <a className="nav-link" href="comments.html">
                  Comments
               </a>
            </li>
            <li className="nav-item">
               <a className="nav-link" href="login.html">
                  <i className="fas fa-user mr-2"></i>Log in
               </a>
            </li>
            <li className="nav-item">
               <a className="nav-link " href="cart.html">
                  <i className="fas fa-shopping-cart mr-2"></i>Cart
               </a>
            </li>
         </ul>
      </div>
   </nav>
   )
}

export default Navbar
