import './App.css';
import BioData from './components/BioData';


function App() {
  return (
    <div className="App">
      <BioData
      name = 'Binoy Saha'
      email = 'binoy.saha89@gmail.com'
      mobileNo = '01689832150'
      facebook = 'www.facebook.com/89binoy'
      linkedin= 'www.linkedin.com/89binoy'
      github = 'www.github.com/89binoy'
      skills= {['HTML','CSS','JavaScript']}
      interests= {['React','Node','Python','Django']}
      referedBy = 'Ashfia binte Habib'
      />

<BioData
      name = 'Polin Rahman'
      email = 'polin@gmail.com'
      mobileNo = '01258888888'
      facebook = 'www.facebook.com/polin'
      linkedin= 'www.linkedin.com/polin'
      github = 'www.github.com/polin'
      skills= {['HTML','CSS','JavaScript','React','Node']}
      interests= {['NFT','Block Chain']}
      referedBy = 'Jonkar Mahbub'
      />
      {/* polin resume */}
      {/* <div className='resume'>
        <h1> Resume of Polin Rahman</h1>
        <hr/>
        <div className='contact'>
          <h3>Contact info Of Polin   Rahman</h3>
          <p>Email: polin@gmail.com</p>
          <p>Mobile No: 01689832150</p>
          <p>Facebook: www.facebook.com/polin</p>
          <p>Linked-In: www.linkedin.com/polin</p>
          <p>Git-Hub: www.github.com/polin</p>
        </div>
        <div className='skill'>
        <h3>Skills Of polin</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Node</li>
            <li>React</li>

          </ul>
        </div>
        <div className='interested'>
        <h3>Interest Of Polin</h3>
          <ul>
            <li>Vue.js</li>
            <li>NFT</li>
            <li>Block Chain</li>
          </ul>
        </div>
        <div className='reference'>
          <p>Referered By: Jonkar Mahbub</p>
        </div>
        <hr/>
        <hr/>
      </div> */}
    </div>
  );
}

export default App;
