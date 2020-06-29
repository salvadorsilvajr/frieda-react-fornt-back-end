import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

function Login() {
   return (
      <Fragment>
   <container className="login">
      <h2>Log In</h2>
      <div className="container ">
         <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-6 commentsForm">
               <div className="form ">
                  <i className="fas fa-user mr-2"></i>
                  <label for="usr">Log In</label>
                  <div className="form-group row">
                     <div className="col ">
                       <input className="form-control" id="email" type="email" placeholder="email"/>
                     </div>
                  </div>
                  <div className="form-group row">
                     <div className="col ">
                       <input className="form-control" id="password" type="password" placeholder="password"/>
                     </div>
                  </div>
                  <div className="form-group">
                     <div >
                       <button type="submit" className="btn btn-primary">Submit</button>
                     </div>
                  </div>
                  <div>
                     <p>You dont have an Account ...  <span><Link className=" bg-primary text-white" to="/register">Register Up</Link></span></p>
                  </div>
               </div>
            </div>
            <div className="col-lg-3"></div>
         </div>
      </div>
   </container>
         
      </Fragment>
   )
}

export default Login
