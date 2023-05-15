import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';



const App = ({rgb , weight ,index , hexcolor})=> {

  const [alert , setAlert] = React.useState(false);
  const bgc = rgb.join(",");
  const hexValue = `#${hexcolor} `;

  useEffect(()=>{
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  }
  ,[alert])

  return(
    <article
    className={`color`} 
    style={{background:`rgb(${bgc})`}} 
    onClick={
      ()=> {setAlert(true)
      navigator.clipboard.writeText(hexValue);}}>
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexValue}</p>
      { alert && <p className='alert'>copied to clipboard</p>}
    </article>
  )
}

export default App;