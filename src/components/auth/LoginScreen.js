import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { startLogin } from '../../actions/auth'
import { getNotes } from '../../actions/notes'
import { useForm } from '../../hooks/useForm'

export const LoginScreen = () => {

  const dispatch = useDispatch()

  const [formValues, handleInputChange] = useForm({
    dni:36789452,
    password:'1489675a'
  })

  const {dni, password} = formValues

  const handleLogin = (e)=>{
    e.preventDefault()
    dispatch(startLogin(dni,password));
  }
  useEffect(() => {
    dispatch(getNotes())
  }, [dispatch])

  return (
    <div>
      <h3 className="auth__title">Login</h3>
      <form 
            className="animate__animated animate__fadeIn animate__faster"
            onSubmit={handleLogin}
            >


                <input
                    type="text"
                    placeholder="DNI"
                    name="dni"
                    className="auth__input"
                    value={dni}
                    onChange={handleInputChange}
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={password}
                    onChange={handleInputChange}
                />
                <button
                    type="submit"
                    className="btn btn-primary btn-block mt-5"
                    // disabled={loading}
                >
                    Login
                </button>
                <Link 
                to="/auth/register"
                className="link"
                >
                Create new account
                </Link>


            </form>

    </div>
  )
}
