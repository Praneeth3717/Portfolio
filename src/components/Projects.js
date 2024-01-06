import React from 'react'
import './Projects.css'

export default function Projects() {
  return (
    <div name='project' className='projects'>
      <h1 className='amith'>My Projects</h1>
      <div className='boxes'>
            <div className='box'>
        <div className='top'>
          <img src='weather.jpg' alt='news'></img>
          <h2 className='heading'>Weather Webpage</h2>
        </div>
        <div className='bottom'>
          <p className='para'>A user responsive API based website which fetches the information of the weather of  respective place searched by user  and also shows the recent search history of weather</p>
          <a href='https://praneeth3717.github.io/Weather-app/' className='read'>view project &rarr;</a>
        </div>
      </div>
            <div className='box'>
        <div className='top'>
          <img src='amazon.jpg' alt='news'></img>
          <h2 className='heading'>Amazon-clone</h2>
        </div>
        <div className='bottom'>
          <p className='para'>A user responsive website clone of amazon.com by using HTML and CSS</p>
          <a href='https://praneeth3717.github.io/Amazon-clone/' className='read'>view project &rarr;</a>
        </div>
      </div>
      <div className='box'>
        <div className='top'>
          <img src='news3.jpg' alt='news' className='hmm'></img>
          <h2 className='heading'>News Webpage</h2>
        </div>
        <div className='bottom'>
          <p className='para'>A user responsive API based website which fetches news from the API and displays it according to the respective content required for the  user</p>
          <a href='https://praneeth3717.github.io/newshub/' className='read'>view project &rarr;</a>
        </div>
      </div>
      </div>
    </div>
  )
}
