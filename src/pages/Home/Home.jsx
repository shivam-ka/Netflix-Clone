import React from 'react'
import style from './Home.module.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import Play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCard from '../../components/TitleCard/TitleCard'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className={style.home}>
      <Navbar />
      <div className={style.hero}>
        <img src={hero_banner} className={style.banner_img} alt="" />

        <div className={style.hero_caption}>
          <img src={hero_title} className={style.caption_img} alt="" />
          <p>Discovering his ties to a secret ancient order, a young |
            man living in modern Istanbul embarks on a quest to save the |
            city from an immortal enemy.</p>

          <div className={style.hero_btns}>
            <button className={style.btn}><img src={Play_icon} alt="" />Play</button>
            <button className={style.dark_btn}><img src={info_icon} alt="" />More Info</button>
          </div>


        </div>

      </div>

      <div className={style.more_cards}>
        <TitleCard />
        <TitleCard title={"Blockbuster Movies"} category={"top_rated"} />
        <TitleCard title={"Only on Netflix"} category={"popular"} />
        <TitleCard title={"Upcoming"} category={"upcoming"} />
        <TitleCard title={"Top Pics for You"} category={"now_playing"} />
      </div>
      <Footer />
    </div>
  )
}

export default Home