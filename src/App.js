import { useState } from 'react';

import * as math from "mathjs";

import './App.css';
import Button from './components/Button';
import Input from './components/Input';

const App=()=> {
const [text,setText] =useState("");
const [result,setResult] = useState("");

const addText=(val) =>{
  setText((text) => [...text,val+""]);
}

const reSetInput = () =>{
  setText("");
  setResult("");
}
const clearInput =() =>{
  setText(text.slice(0,-1));
}

const calculateResult = () => {
  const input = text.join("");

  setResult(math.evaluate(input));
};

  const buttonColors ="#A5AB00";

  return (

    <div className="App">
       <div className="hedding">
        <h1>Simple Calculator<br></br> (React)</h1>
        <div className="cal-wrapper">
        
          <Input text={text} result={result}/>

          <div className="row">
          <Button symbols="Clear"  color="red"  handleClick={clearInput}/>
          <Button symbols="AC" color="red"  handleClick={reSetInput} />
          
          </div>

          <div  className='row'>
          <Button symbols="7" handleClick={addText}/>
          <Button symbols="8" handleClick={addText}/>
          <Button symbols="9" handleClick={addText}/>
          <Button symbols="/" color={buttonColors} handleClick={addText}/>
          
          </div>
          <div  className='row'>
          <Button symbols="4" handleClick={addText}/>
          <Button symbols="5" handleClick={addText}/>
          <Button symbols="6" handleClick={addText}/>
          <Button symbols="*" color={buttonColors} handleClick={addText}/>
          </div>
          <div  className='row'>
          <Button symbols="1" handleClick={addText}/>
          <Button symbols="2" handleClick={addText}/>
          <Button symbols="3" handleClick={addText}/>
          <Button symbols="+" color={buttonColors} handleClick={addText}/>
          </div>
          <div  className='row'>
          <Button symbols="." handleClick={addText}/>
          <Button symbols="0" handleClick={addText}/>
          <Button symbols="=" color="#000066" handleClick={calculateResult}/>
          <Button symbols="-" color={buttonColors} handleClick={addText}/>
          </div>
          
          
        </div>
    </div>
    </div>

  );
  
}

export default App;
