import React from 'react'

function Succes({visable, setVisable}) {


    function visableHandler() {
        setVisable(true)
    }
  return (
    <div className={visable ?  "hidden-succes" : "succes-wapper" }>
        <div className="succes-img"/>
        <h2>THANK YOU!</h2>
        <p>We've added your card details</p>
        <button className='submit-button' onClick={visableHandler}>Try again</button>
    </div>
  )
}

export default Succes