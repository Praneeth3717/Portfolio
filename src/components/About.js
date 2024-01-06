import React, { useState } from 'react'
import './About.css'
export default function About() {
  const [Skills,setSkills]=useState(true)
  const [Education,setEducation]=useState(false)
  const handleskills=()=>{
    if(Education===true){
      setEducation(false);
      setSkills(true);
    }
    else{
      setSkills(true);
    }
  }
  const handleEducation=()=>{
    if(Skills===true){
      setEducation(true);
      setSkills(false);
    }
    else{
      setEducation(true);
    }
  }

  return (
    <div  name='about' className='about'>
      <div className='col-1'>
        <img  className='nitw' src='nitw.jpg' alt='nitw'></img>
      </div>
      <div className='col-2'>
        <h1>About Me</h1>
        <p>My name is Chandupatla Praneeth.I live in Warangal.I develop Frontend websites.Making webpages is something I'am generally intrested in.I work on my projects using ReactJS framework.The majority of my projects revolve around fetching data from API's and presenting it on my webpage.</p>
        <div className='tab-cont1'>
            <p onClick={handleskills} className={`abclick ${Skills?'line':''}`}>Skills</p>
            <p onClick={handleEducation} className={`abclick ${Education?'line':''}`}>Education</p>
        </div>
        <div className='tab-cont2'>
            <ul className={`list ${Skills?'active':''}`}>
              <div className='style'>
              <li><img className='skillpic' src='HTML.png' alt=''></img><br/>HTML</li>
                <li><img className='skillpic' src='CSS.png' alt=''></img><br/>CSS</li>
                <li><img className='skillpic' src='JavaScript.png' alt=''></img><br/>JavaScript</li>
                <li><img className='skillpic' src='React.png' alt=''></img><br/>React</li>
                <li><img className='skillpic' src='C++.png' alt=''></img><br/>C++</li>
              </div>
            </ul>
            <ul className={`list ${Education?'active':''}`}>
                <li><span>National Institution of Technology, Warangal (2025)</span><br/>B.Tech., Metallurgical and Materials Engineering (CGPA: 6.07)</li>
                <li><span>Narayana Junior College (2021)</span><br/>Telangana State Board of Intermediate Education (Percentage: 93.2)</li>
                <li><span>Dr KKR’s Gowtham Concept School (2019)</span><br/>Telangana State Board of Secondary Education (CGPA: 9.8)</li>
            </ul>

        </div>
      </div>
    </div>
  )
}
