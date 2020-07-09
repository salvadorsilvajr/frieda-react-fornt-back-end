import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFomrData] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    password2: "",
  });

  const { name, lastname, email, phone, password, password2 } = formData;

  const onChange = (e) =>
    setFomrData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("passwords do not match", "danger");
    } else {
      register({ name, lastname, email, phone, password });
    }
  };

  // Redirect if Register in
  if (isAuthenticated) {
    return <Redirect to='/' />;
  }

  return (
    <Fragment>
      <h2>Register Up</h2>
      <div className='container '>
        <div className='row'>
          <div className='col-lg-3'></div>
          <div className='col-lg-6 signupForm'>
            <form className='form' onSubmit={(e) => onSubmit(e)}>
              <div className='form-group row'>
                <div className='col-6 '>
                  <input
                    className='form-control'
                    name='name'
                    value={name}
                    onChange={(e) => onChange(e)}
                    type='text'
                    placeholder='Name'
                  />
                </div>
                <div className='col '>
                  <input
                    className='form-control'
                    name='lastname'
                    value={lastname}
                    onChange={(e) => onChange(e)}
                    type='text'
                    placeholder='Last name'
                  />
                </div>
              </div>
              <div className='form-group row'>
                <div className='col-8 '>
                  <input
                    className='form-control'
                    name='email'
                    value={email}
                    onChange={(e) => onChange(e)}
                    type='email'
                    placeholder='@email'
                  />
                </div>
                <div className='col '>
                  <input
                    className='form-control'
                    name='phone'
                    value={phone}
                    onChange={(e) => onChange(e)}
                    type='text'
                    placeholder='999-999-9999'
                  />
                </div>
              </div>
              <div className='form-group row'>
                <div className='col-6 '>
                  <input
                    className='form-control'
                    name='password'
                    value={password}
                    onChange={(e) => onChange(e)}
                    type='password'
                    placeholder='Password'
                  />
                </div>
                <div className='col '>
                  <input
                    className='form-control'
                    name='password2'
                    value={password2}
                    onChange={(e) => onChange(e)}
                    type='password'
                    placeholder='Confirm Password'
                  />
                </div>
              </div>
              <div className='form-group'>
                <div>
                  <button
                    type='Submit'
                    className='btn btn-primary'
                    value='register'
                  >
                    Submit
                  </button>
                </div>
              </div>
              <div>
                <p>
                  You have an Account ...{" "}
                  <span>
                    <Link className=' bg-primary text-white' to='login'>
                      Sign In
                    </Link>
                  </span>
                </p>
              </div>
            </form>
          </div>
          <div className='col-lg-3'></div>
        </div>
      </div>
    </Fragment>
  );
};
Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
