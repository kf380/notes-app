import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { startRegister } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

export const RegisterScreen = () => {

  const dispatch = useDispatch()

  const [formRegisterValues, handleRegisterInputChange] = useForm({
    dni:36789452,
    password:'1489675a'
  })

  const {dni, password} =formRegisterValues; 

  const handleRegister = (e)=>{
    e.preventDefault()
    dispatch(startRegister(dni,password));
  }

  return (
    <div>
    <h3 className="auth__title">Register</h3>
    <form 
          className="animate__animated animate__fadeIn animate__faster"
          onSubmit={handleRegister}
          >


              <input
                  type="text"
                  placeholder="DNI"
                  name="dni"
                  className="auth__input"
                  value={dni}
                  onChange={handleRegisterInputChange}
              />
              <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="auth__input"
                  value={password}
                  onChange={handleRegisterInputChange}
              />
              <button
                  type="submit"
                  className="btn btn-primary btn-block mt-5"
                  // disabled={loading}
              >
                  Register
              </button>
              <Link 
              to="/auth/login"
              className="link"
              >
                Already registered?
              </Link>


          </form>

  </div>
  )
}
