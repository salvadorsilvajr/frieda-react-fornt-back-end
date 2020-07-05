import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import PropTypes from "prop-types";

const Login = ({ setAlert }) => {
  const [formData, setFomrData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFomrData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Fragment>
      <h2>Log In</h2>
      <div className='container '>
        <div className='row'>
          <div className='col-lg-3'></div>
          <div className='col-lg-6 signupForm'>
            <form className='form' onSubmit={(e) => onSubmit(e)}>
              <div className='form-group row'>
                <div className='col'>
                  <input
                    className='form-control'
                    name='email'
                    value={email}
                    onChange={(e) => onChange(e)}
                    type='email'
                    placeholder='@email'
                  />
                </div>
              </div>
              <div className='form-group row'>
                <div className='col'>
                  <input
                    className='form-control'
                    name='password'
                    value={password}
                    onChange={(e) => onChange(e)}
                    type='password'
                    placeholder='Password'
                  />
                </div>
              </div>
              <div className='form-group'>
                <div>
                  <button
                    type='Submit'
                    className='btn btn-primary'
                    value='login'
                  >
                    Submit
                  </button>
                </div>
                <div>
                  <p>
                    You dont have an Account ...{" "}
                    <span>
                      <Link className=' bg-primary text-white' to='/register'>
                        Sign Up
                      </Link>
                    </span>
                  </p>
                </div>
              </div>
            </form>
          </div>
          <div className='col-lg-3'></div>
        </div>
      </div>
    </Fragment>
  );
};
Login.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

export default connect(null, { setAlert })(Login);
