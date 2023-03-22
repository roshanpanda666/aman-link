import './App.css';
import {useTypewriter,Cursor} from 'react-simple-typewriter'
import 'react-simple-typewriter/dist/index'
import {Glitch} from "react-teffex"

function App() {
  let [text] = useTypewriter({
    words: [' Learner',' Developer',' Designer'],
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
          <img className="myimg" src="IMG_1147.heic" alt="" />
          
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
          <a href="https://instagram.com/sabyasachi_panda_?igshid=ZDdkNTZiNTM=">
          <div className="instaico">
          <i className="fa-brands fa-instagram fa-1x"></i>
          </div>
          </a>
          <a href="https://twitter.com/Roshan_panda007?t=ddAdKm3LFlCjjtJoe3wKbg&s=08">
          <div className="twiter">
          <i className="fa-brands fa-twitter"></i>
          </div>
          </a>
          <a href="https://github.com/roshanpanda666">
          <div className="git">
          <i className="fa-brands fa-github"></i>
          </div>
          </a>
          
        <a href="https://www.linkedin.com/in/sabyasachi-panda-351870256/"><div className="linked">
        <i className="fa-brands fa-linkedin"></i>
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

