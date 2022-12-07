import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import me from "./img/me1.png"
import './css/Contact.css';
import ka from './img/kakao.png'
import git from './img/github.png'
import ins from './img/instagram.png'


function CardExample() {
  return (

    <div className = 'contact_background be' style={{height:900, float : 'left' ,backgroundColor:'rgb(172, 220, 156)'}}>

<div>

    <div style = {{margin : 10}}>
      <Card style={{ width: 250 ,height : 50}}>
        <Card.Img variant="top" src = {me} />
        <Card.Body>
          <Card.Title>
            1999.09.02 <br/>
            신구대학교 재학중<br/>
            <br/>
             박성범
          </Card.Title>
          <Card.Text>
            010-5710-9755
            <br/>
            qkrtjd6377@naver.com
          </Card.Text>
        </Card.Body>
      </Card>
      <div>
        
      </div>
      
      
      </div>      
      
     
    </div>
    <Card>
      <Card.Header as="h5">Contact</Card.Header>
      <Card.Body>
        <Card.Title>마무리하면서...</Card.Title>
        <Card.Text>
       <h5> 안녕하세요! 풀스택 개발자가 되고싶은 박성범입니다.
       </h5>        

대학생활을 하면서 다양한 아르바이트을 통해 세상은 만만하지 않다는 것을 배웠고
개발에 대해 진심으로 다가가기 시작했습니다 
<br/>
 이를 통해 배운 것을 토대로 공부하면서 웹 개발 업무 프로세스에 전반적인 이해력을 습득하였습니다.<br/>

개발하면서 제가 느낀 IT전망은 MZ세대층를 타겟으로 하는 것이 베스트라 생각하고,<br/> 늘 MZ세대 관점을 고안하며 개발하는 중입니다. <br/>

현재는 거창한 업무성과보다 문제를 자료조사하고 분석한 다음 작은 문제해결을 분해하여 끝까지 완성하도록 노력하는 신입 개발자입니다.<br/>
저의 성장가능성을 믿고 이끌어줄 회사를 찾고 있습니다
        </Card.Text>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <a href = 'https://open.kakao.com/o/sLpcEyRe'>
        <img src = {ka} style = {{width : 75 }} ></img>
       
        </a>
        <a href = 'https://www.github.com/sungbeomoppa'>
        <img src = {git} style = {{width : 75}} ></img>
        </a>
        <a href = 'https://www.instagram.com/xung_bxxm'>
        <img src = {ins} style = {{width : 65}}></img>
        </a>
      </Card.Body>
    </Card>
    
        </div>
    
  );
}

export default CardExample;