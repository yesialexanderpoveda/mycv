import React from 'react'
import {Content, Golink, Imgp, Navproject, Pnav, Project} from '../styles/projects.style'
import  {Dtap} from '../service/service.projects'  
const Projects = () => {

  return (
    <Content>
      
    {Dtap.map((myproject) => (
      
      <Project key={myproject.nav}>
       <Golink>
        <p>{myproject.text}</p>
         <Imgp src={myproject.img} width="100px" height="70px"/>
         </Golink>
          <Pnav>
          <Navproject href={myproject.nav} target="_blank"> Ir a web </Navproject> 
          </Pnav>
        
        <br/>
        
      </Project>
    ))}
  
  <br/>
</Content>
  )
}
  
export default Projects