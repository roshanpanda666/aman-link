import './App.css';
import {useTypewriter,Cursor} from 'react-simple-typewriter'
import 'react-simple-typewriter/dist/index'
import {Glitch} from "react-teffex"

function App() {
  let [text] = useTypewriter({
    words: [' Learner',' Developer',' Designer',' Cricketer'],
    loop:{},
    typeSpeed:120,
    deleteSpeed: 50,
    delaySpeed: 1000
  })
  return (
  <div className="container">
    <div className="father">
      <div className="leftside">
        <div className="namehere">
        
        <h1 className='myname'><Glitch buffer={13} text={"Aman pattnaik"}></Glitch></h1>
        </div>
        
        <div className="photosec">
          <img className="myimg" src="WhatsApp Image 2023-03-22 at 19.41.51.jpg" alt="" />
          
          <div className="orangeborder">

          </div>
        </div>
      </div>
      <div className="rightside">
        <div className="whoami">
          <hr className="horizontalbar" />
          <h1 className="myname">I am a
            <span className="learner-change">
              {text}
            </span>
            <Cursor/>
          </h1>
          
        </div>
        <div className="connect">
          <h3 className="cwm"><Glitch buffer={13} text={"connect with me"}></Glitch></h3>
        </div>
        <div className="fatheroflinks">

        <div className="linkandicons">
          <a href="https://instagram.com/amanpattnaik_?igshid=YmMyMTA2M2Y=">
          <div className="instaico">
          <i className="fa-brands fa-instagram fa-1x"></i>
          </div>
          </a>
          
          <a href="https://github.com/amanpattnaik">
          <div className="git">
          <i className="fa-brands fa-github"></i>
          </div>
          </a>
          
        <a href="https://www.facebook.com/aman.pattnaik.52?mibextid=LQQJ4d"><div className="linked">
        <i className="fa-brands fa-facebook"></i>
        </div></a>
        
      </div>
        </div>
        
        <div className="quote">
          <h5>Failure is not an option -- it comes bundled with Windows</h5>
        </div>
    
      </div>
    </div>
  </div>
  );
}

export default App;

