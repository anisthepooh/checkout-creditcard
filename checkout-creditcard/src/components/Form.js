import { useState } from "react"


function Form({setCardNumber, cardnumber , setName, name, MM, setMM, YY, setYY, cvc, setCvc, setVisable, visable}) {

  const [missingName, setMissingName] = useState(false)
  const [missingCN, setMissingCN] = useState(false)
  const [toShortCN, setToShortCN] = useState(false)
  const [missingMM, setMissingMM] = useState(false)
  const [missingYY, setMissingYY] = useState(false)
  const [missingCVC, setMissingCVC] = useState(false)
  const [invalidCard, setInvalidCard] = useState(false)
    
    function cardnumberChangeHandler(e) {
        setCardNumber(e.target.value)
    }

    function nameChangeHandler(e) {
        setName(e.target.value)
    }

    function mmChangeHandler(e) {
        setMM(e.target.value)
    }

    function yyChangeHandler(e) {
        setYY(e.target.value)
    }

    function cvcChangeHandler(e) {
        setCvc(e.target.value)
    }

    function handleViability(e) {
        e.preventDefault()
        setMissingName(false)
          setMissingCN(false)
          setToShortCN(false)
          setMissingMM(false)
          setMissingYY(false)
          setMissingCVC(false)
          setInvalidCard(false)

          creditCardType(cardnumber)


        if (name === "") {
          setMissingName(true)
        } else if (cardnumber === "" && cardnumber.length === 16) {
          setMissingCN(true) 
        } else if (cardnumber.length !== 16) {
          setToShortCN(true) 
        } else if (MM === "") {
          setMissingMM(true)
        } else if (YY === "") {
          setMissingYY(true)
        } else if (cvc === "") {
          setMissingCVC(true)
        } else if (creditCardType(cardnumber) === undefined) {
          setInvalidCard(true)
        } else if (creditCardType(cardnumber) !== undefined) {
          setVisable(false)
          setMissingName(false)
          setMissingCN(false)
          setToShortCN(false)
          setMissingMM(false)
          setMissingYY(false)
          setMissingCVC(false)
          setInvalidCard(false)
        }
        
    }

     function creditCardType(cc ) {
        let amex = new RegExp('^3[47][0-9]{13}$');
        let visa = new RegExp('^4[0-9]{12}(?:[0-9]{3})?$');
        let cup1 = new RegExp('^62[0-9]{14}[0-9]*$');
        let cup2 = new RegExp('^81[0-9]{14}[0-9]*$');
      
        let mastercard = new RegExp('^5[1-5][0-9]{14}$');
        let mastercard2 = new RegExp('^2[2-7][0-9]{14}$');
      
        let disco1 = new RegExp('^6011[0-9]{12}[0-9]*$');
        let disco2 = new RegExp('^62[24568][0-9]{13}[0-9]*$');
        let disco3 = new RegExp('^6[45][0-9]{14}[0-9]*$');
        
        let diners = new RegExp('^3[0689][0-9]{12}[0-9]*$');
        let jcb =  new RegExp('^35[0-9]{14}[0-9]*$');
      
      
        if (visa.test(cc)) {
            console.log("VISA")
          return 'VISA';
        }
        if (amex.test(cc)) {
          return 'AMEX';
        }
        if (mastercard.test(cc) || mastercard2.test(cc)) {
          return 'MASTERCARD';
        }
        if (disco1.test(cc) || disco2.test(cc) || disco3.test(cc)) {
          return 'DISCOVER';
        }
        if (diners.test(cc)) {
          return 'DINERS';
        }
        if (jcb.test(cc)) {
          return 'JCB';
        }
        if (cup1.test(cc) || cup2.test(cc)) {
          return 'CHINA_UNION_PAY';
        }
        return undefined, console.log("unknown");
        
      }



  return (
    <div className={visable ? 'form' : 'hidden'}>
        <form>
            <div className='flex-col'>
                <label>CARDHOLDER NAME</label>
                <input 
                className='input-field' 
                type="text" 
                placeholder='e.g Jane Appleseed'
                onChange={nameChangeHandler}
                required="required"
                />
                 { missingName ?  <p style={{color: "red"}}>Name Required!</p> : "" }
            </div>
            <div className='m32'/>
            <div className='flex-col'>
                <label>CARD NUMEBR</label>
                <input 
                className='input-field' 
                type="text" 
                placeholder='e.g 1234567891230000'
                maxLength="16"
                onChange={cardnumberChangeHandler}
                required
                />
                { missingCN ?  <p style={{color: "red"}}>Card number required!</p> : "" }
                { toShortCN ?  <p style={{color: "red"}}>Card number must be 16 digts!</p> : "" }
                { invalidCard ?  <p style={{color: "red"}}>Card number is invalid!</p> : "" }
            </div>
            <div className='m32'/>
                <div className='flex-col'>
                    <div className='date-input-wapper'>
                        <div className='flex-col'>
                            <label>EXP. DATE</label>
                            <input 
                            className='date-input' 
                            type="text" 
                            placeholder='MM'
                            maxLength="2"
                            onChange={mmChangeHandler}
                            required
                            />
                            { missingMM ?  <p style={{color: "red"}}>Month required!</p> : "" }
                        </div>
                        <div className='flex-col'>
                            <label>(MM/YY)</label>
                            <input 
                            className='date-input' 
                            typet="text" 
                            placeholder='YY'
                            maxLength="2"
                            onChange={yyChangeHandler}
                            required
                            />
                             { missingYY ?  <p style={{color: "red"}}>Year required!</p> : "" }
                        </div>
                        <div className='flex-col'>
                            <label>CVC</label>
                            <input 
                            className='cvc-input' 
                            type="text" 
                            placeholder='e.g 123'
                            maxLength="3"
                            onChange={cvcChangeHandler}
                            required
                            />
                             { missingCVC ?  <p style={{color: "red"}}>CVC required!</p> : "" }
                        </div>
                    </div>
            </div>
            <div className='m32'/>
            <button className='submit-button' type="submit" onClick={handleViability} >Confirm</button>
        </form>
    </div>
  )
}

export default Form