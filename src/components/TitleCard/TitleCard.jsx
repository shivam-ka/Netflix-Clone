import React, { useRef, useEffect, useState } from 'react'
import style from './TitleCard.module.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'


const TitleCard = ({ title, category }) => {
  const [apiData, setApiData] = useState([])

  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMGJmY2YyYzQ2NGYxY2Q2ZmZmMDg4MTc4NzgwNTE0MiIsIm5iZiI6MTcyNzUyODM2MC4zNjM0ODUsInN1YiI6IjY2ZjdmYzg2ZjVkNTZlOWVkOGEyMGY5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6ufnnOv-dOMCrGgbVgyBSdGSEmCfevXtBJY89joexGE'
    }
  };



  const handleWheel = (e) => {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY

  }


  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${category?category:'now_playing'}?language=en-US&page=1`, options)
      .then(response => response.json())
      .then(response => setApiData(response.results))
      .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel', handleWheel)
  }, [])

  return (
    <div className={style.title_card}>
      <h2>{title ? title : 'Popular On Netflix'}</h2>

      <div className={style.card_list} ref={cardsRef}>

        {apiData.map((card, index) => {
          return <Link to={`/player/1`} className={style.card} key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />

            <p>{card.original_title}</p>

          </Link>
        })}

      </div>
    </div>
  )
}

export default TitleCard