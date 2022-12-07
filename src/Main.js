import React from 'react';
import star from './img/dev.png'
import './css/Main.css'
import {Routes,Route,useNavigate,Link} from 'react';

function Main (props) {


    return(
        <div style = {{overflow : 'hidden'}}>
          <div>
          <div class="back" style = {{height : 900}}><img className =  'hand' src = {star}
                ></img>
                <div class="container">
  <div class="title">
    <small class="title-word title-word-1">박성범</small>
    <h1 class="title-word title-word-2">포트폴리오에 오신 것을</h1>
    <h3 class="title-word title-word-3">방문해주셔서 감사합니다</h3>

    
  </div>

    </div>
          
  </div>
</div>
   
  </div>   
        
    )
}

export default Main;