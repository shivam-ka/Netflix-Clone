import React, { useEffect, useRef } from 'react'
import style from './Navbar.module.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import { logout } from '../../firebase'

const Navbar = () => {

  const navRef = useRef()

  useEffect(() => {
    window.addEventListener('scroll',()=>{
      if(window.scrollY >= 80){
        navRef.current.classList.add(style.nav_dark)
      }
      else{
        navRef.current.classList.remove(style.nav_dark)
      }
    })

  }, [])
  


  return (
    <div ref={navRef} className={style.navbar}>
      <div className={style.nav_left}>
        <img className={style.logo} src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className={style.nav_right}>
        <img src={search_icon} alt="" className={style.icon} />
        <p>Children</p>
        <img src={bell_icon} alt="" className={style.icon} />
        <div className={style.navbar_profile}>
          <img src={profile_img} className={style.profile} />
          <img src={caret_icon} />
          <div className={style.dropdown}>
            <p onClick={()=>{logout()}}>Sign Out Of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar