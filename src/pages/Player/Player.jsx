import React from 'react'
import style from './Player.module.css'
import arrow from '../../assets/back_arrow_icon.png'
import { useNavigate } from 'react-router-dom'

const Player = () => {

  const navigate = useNavigate()

  const math = () => Math.floor((Math.random() * 10) + 10)

  return (
    <div className={style.player}>
      <img onClick={() => { navigate(-1) }} src={arrow} alt="" />

      <iframe width="90%" height="90%" src="https://www.youtube.com/embed/LPhqL4DqzBg?si=fSws-ZJn3OaFUvgB" title="YouTube video player" frameborder="0" allowfullscreen></iframe>

      <div className={style.player_info}>
        <p>{`${math()}-${math()}-20${math()}`}</p>
        <p>Avengers: Endgame</p>
        <p>Superhero Films</p>
      </div>
    </div>
  )
}

export default Player