import React, { useState } from 'react'
import style from './Login.module.css'
import logo from '../../assets/logo.png'
import { login, signup, } from '../../firebase'
import netflix_spinner from '../../assets/netflix_spinner.gif'

const Login = () => {

  const [signstate, setSignstate] = useState("Sign In")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)


  const user_auth = async (e) => {
    e.preventDefault();
    setLoading('true');
    if (signstate === "Sign In") {
      await login(email, password)

    } else {
      await signup(name, email, password)
    }
    setLoading(false);
  }



  return (
    loading?<div className={style.login_spinner}>
      <img src={netflix_spinner} alt="" />
    </div>:
    <div className={style.login}>
      <img src={logo} className={style.login_logo} alt="" />
      <div className={style.login_form}>
        <h1>{signstate}</h1>

        <form >
          {signstate === "Sign Up" ?
            <input required value={name} onChange={(e) => { setName(e.target.value) }} type="text" placeholder='Your Name' /> : <></>}

          <input required value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder='E-mail' />
          <input required value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder='Password' />
          <button onClick={user_auth} type='submit'>{signstate}</button>
          <div className={style.form_help}>
            <div className={style.remember}>
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className={style.form_switch}>
          {signstate === "Sign In" ? <p>New to Netflix? <span onClick={() => { setSignstate("Sign Up") }}>Sign Up Now</span></p> :
            <p>Already have an Account? <span onClick={() => { setSignstate("Sign In") }}>Sig In Now</span></p>}


        </div>
      </div>
    </div>
  )
}

export default Login