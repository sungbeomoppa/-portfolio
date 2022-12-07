import Accordion from 'react-bootstrap/Accordion';
import Progress from './Progress';
import './css/About.css'

function About() {
  
  return (
    <div className = 'about_back' style = {{height : 1000}}>
    <div>
    <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0" color = 'dark'>
        <Accordion.Header color = 'dark'>Introduce myself</Accordion.Header>
        <Accordion.Body>
        저는 성취했을 때, 남에게 나의 성과를 보여줄 때 행복감을 느낍니다
        기존에 백엔드에 대해 공부를 하다가 특강을 통해 프론트엔드에 대해서도 공부를 했고 
        <br/> 새로운 것을 탐색하며 웹개발에 대한 성취감을 느껴 풀스택 개발자가 되고싶습니다. 
        <br/>비록 개발경험이 많지는 않지만 최선을 다하는 마음가짐으로 제 자신의 한계를 없애겠습니다.  
          
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Why you become a developer?</Accordion.Header>
        <Accordion.Body>
        진로를 선택하는 일이 학교 성적 다음으로 내게 가장 큰 고민거리였다.<br/>

당시 나는 평소에 컴퓨터를 좋아하고, 프로그래밍에 대한 막연한 환상이 있어 모바일IT과에 관심이 어느 정도 있었습니다.<br/>

하지만 모바일IT과에 가서 뭘 배우는지, 졸업하면 무슨 일을 하는지 아는 정보가 하나도 없었을 뿐더러, <br/>
이 쪽 업계는 생각보다 근무 환경이 안 좋다는 얘기를 많이 들은 탓에 선뜻 고르기는 힘든 선택지였다.<br/>
개발을 하였을 때 성취감과 부딪히는 습성이 내가 여태 살아온 환경과 비슷했다 <br/>
나의 가치를 올려보자 라는 생각으로 시작하게 됐습니다




             </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>My Skills</Accordion.Header>
        <Accordion.Body>
         <Progress/>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
    </div>
  );
}

export default About;