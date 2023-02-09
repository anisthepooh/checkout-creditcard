import cardLogo from '../src/assets/card-logo.svg'
import card2 from '../src/assets/bg-card-back.png'
import './App.css';
import Form from './components/Form';
import React, { useState } from 'react'
import Succes from './components/Succes';
import Credits from './components/Credits';


function App() {

  const [cardnumber, setCardNumber] = useState("")
  const [name, setName] = useState("")
  const [MM, setMM] = useState("")
  const [YY, setYY] = useState("")
  const [cvc, setCvc] = useState("")
  const [visable, setVisable] = useState(true);

  return (
    <div className="App">
      <div className="page-wapper">
        <div className="left-side">
          <div className="front-card">
            <div className='card-content-wapper'>
            <img src={cardLogo} className="card-logo"/>
            <div className='card-text-wapper'>
              <h3 className='card-number'>{ cardnumber ? cardnumber : "0000 0000 0000 0000" }</h3>
              <div className='name-on-card-wapper'>
                <p>{ name ? name : "Jane Appleseed" }</p>
                <p>{ MM ? MM : "00" }/{ YY ? YY : "00" }</p>
              </div>
            </div>
            </div>
          </div>
          <div className='back-card'>
            <p className='safe-code'>{ cvc ? cvc : "000" }</p>
          </div>
        </div>
        <div className="right-side">
        <Succes 
          visable={visable}
          setVisable={setVisable}
          />
          <Form
          cardnumber={cardnumber}
          setCardNumber={setCardNumber}
          setName={setName}
          name={name}
          setMM={setMM}
          MM={MM}
          setYY={setYY}
          YY={YY}
          setCvc={setCvc}
          cvc={cvc}
          visable={visable}
          setVisable={setVisable}
          />
           <Credits />
        </div>
        
      </div>
    
    </div>
  );
}

export default App;
