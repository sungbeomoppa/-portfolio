import Carousel from 'react-bootstrap/Carousel';
import roe from './img/roe.png';
import exe from './img/exerd.png';
import por from './img/portfolio.png';
import Button from '@mui/material/Button';
import { maxHeight } from '@mui/system';
import git from './img/github.png'
import Link from 'react';
import err from './img/eroe.gif'
import erd from './img/erdc.png'
import './css/Act.css'

function DarkVariantExample() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <div className = 'big' style = {{height : 870}}>


<div>

        <img
          className="d-block w-100 "
          src={roe}
          
          alt="First slide"
          style={{ maxWidth: 800,maxHeight : 1200 , float:'left',marginLeft : 50}}
        />
        <img
        className = "dblock"
        src = {err}
        style = {{maxWidth: 400,maxHeight : 643 ,marginLeft : 950}}/>
       
        </div>
        </div>

        <Carousel.Caption>
          
         <div className = 'd-block'
         style = {{minHeight : 10}}>
          <h5>Eroe</h5>
          <p>지적장애인,치매환자의 위치추적 시스템입니다</p>
          <a href = 'https://github.com/sungbeomoppa/eroeApplication'>
        <img src = {git} style = {{width : 75}} ></img>
        </a>
        </div>
        </Carousel.Caption>
        
      </Carousel.Item>
      <Carousel.Item>
        <div className = 'big' style = {{height : 860}}>
        <img
          className="d-block w-100"
          src={exe}
          alt="Second slide"
          style={{ height : 600,maxWidth: 800,maxHeight:1200,marginLeft : 500}}

        />
          <br/>
        <br/>
        
        
        
        
        
        <Carousel.Caption>
          <h5>Database</h5>
          <p>
            exerd,erd-cloud,erd 작성했던 종합본입니다</p>


          <a href = 'https://www.erdcloud.com/d/wGdJYJNni5NHPHxRD'>
        <img src = {erd} style = {{width : 75}} ></img>
        </a>
        </Carousel.Caption>
        </div>
      </Carousel.Item>
      
      <Carousel.Item>
        <div className = 'big' style = {{height : 860}}>
        <img
          className="d-block w-100"
          src={por}
          alt="Third slide"
          style={{width : 250, maxWidth: 750, maxHeight:800,marginLeft:500}}

        />
          
        
        <Carousel.Caption>
          <h5>Portfolio</h5>
          <p>
            React,material UI,bootstrap을 사용한 포트폴리오 입니다
          </p>
          
          <a href = 'https://www.github.com/sungbeomoppa'>
        <img src = {git} style = {{width : 75}} ></img>
        </a>
        </Carousel.Caption>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;