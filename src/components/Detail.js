import React from 'react'
import { useParams } from "react-router-dom";
/* import { Dtap } from '../service/service.projects'; */
const Detail = () => {
  let params = useParams();
  return (
    <div className='Search'>
      <h2>You are inside the Search Component</h2>
      <h4>{params}</h4>
      <a href="https://github.com/yesialexanderpoveda">github</a>
    </div>
  )
}
  
export default Detail