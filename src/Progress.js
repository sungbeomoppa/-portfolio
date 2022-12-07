import ProgressBar from 'react-bootstrap/ProgressBar';
import bo from './img/pytho.png';
import './css/Progress.css'
import cs from './img/css.png';
import ht from './img/html.png';
import ja from './img/javasc.png';
import my from './img/mysql.png';
import no from './img/node.png';
import re from './img/reac.png';

function Progress() {
  return (
    <div class Name = 'backtothe'>  
      <div>
   <div className = 'image'>  
      <img src = {ja} style = {{width : 100,float : 'left'}}></img>
      </div>

      <ProgressBar striped variant="warning" now={70} />javascript<br/>
      </div>

<div>
      <div className = 'image2'>  
      <img src = {cs} style = {{width : 65,float : 'left',marginRight : 17}}></img>
      </div>
      <ProgressBar striped variant="info" now={70} />css<br/><br/>
      </div>

      <div>
      <div className = 'image5'>  
      <img src = {ht} style = {{width : 83,float : 'left',marginRight:11}}></img>
      </div>
      <ProgressBar striped variant="warning" now={70} />html<br/><br/>
      </div>
      <div>
      <div className = 'image3'>  
      <img src = {my} style = {{width : 85,float : 'left',marginRight:15 }}></img>
      </div>
      <ProgressBar striped variant="danger" now={65} />mysql<br/><br/>
      </div>

      <div>
      <div className = 'image3'>  
      <img src = {no} style = {{width : 90,float : 'left',marginRight:11}}></img>
      </div>
      <ProgressBar striped variant="info" now={50} />node js<br/><br/>
      </div>

      <div>
      <div className = 'image4'>  
      <img src = {re} style = {{width : 96,float : 'left',marginRight:2}}></img>
      </div>
      <ProgressBar striped variant="success" now={60} />react<br/><br/>
      </div>
      <div>
      <div className = 'image'>  
      <img src = {bo} style = {{width : 100,float : 'left',marginRight:5}}></img>
      </div>
      <ProgressBar striped variant="primary" now={80} />python<br/><br/>
      <br/>
      <br/>
      
      </div>
    </div>
    
  );
}

export default Progress;