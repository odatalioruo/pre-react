 import logo from './img/india.jpg';
 import lain from './img/lain.png';
 import normal from './img/normal.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p class='coolfont'>
        פרננדו פאולו 
        </p>
      <p class='coolfont'>Portfolio foda</p>
      
      </header>
      <body>
        <div class='about'>
                    <div class="row">
              <div class="column" >
                  <div>
                    <h2>About me</h2>
                    <p>Graduando em Ciencia da computação<br></br> Web Development skills:<br></br>Node.js, Vue.js, React, Ruby on Rails<br></br>HTML5, CSS3, PHP, JQuery, Bootstrap, MySQL.</p>
                  </div>
              </div>
              <div class="column">
                  <img src={logo} className="App-logo" alt="logo" />
              </div>
                </div>
        </div>
        <div class='works'>
          <h2 class='SLIME'>Trabalhos</h2>
          <div class="row">
              <div class="columnn" >
                  <div class="apres">
                  <img src={lain} className="App-lain" alt="logo" /><br></br>
                  <a>Lain dedicated Site Training(2019)</a>
                  </div>
              </div>
              <div class="columnn">
              <div class="apres">
              <img src={normal} className="App-normal" alt="logo" />
              <br></br>
              <a>first personal blog</a>
                    </div>
              </div>
                </div>
        </div>
        <div class='contact'>
          <h2>Contato</h2>
          <a href="https://github.com"><p>GitHub</p></a>
          <p>Voceeviadinho5(at)gmail.com</p>
        </div>
      </body>
    </div>
  );
}
// https://codepen.io/AchiPapakon/pen/qZBJEr

export default App;
