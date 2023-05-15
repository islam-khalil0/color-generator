import React ,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Values from 'values.js'
import App from './App'


function BaseApp () {
  
  const [color , setColor] = useState();
  const [error , setError] = useState(false);
  const [list , setList] = useState([]);
  
 
  
  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const listOfColor = new Values(color).all(10);
      setList(listOfColor);
    } catch (error) {
      setError(true);
    }
    
  };


  return(
    <>
    <section className='container'>
      <h3>Color Generator</h3>
      <form onSubmit={handleSubmit}>
          <input 
          type={Text}
          placeholder="#f15025"
          value={color}
          onChange={(e)=> setColor(e.target.value)}
          className={`${error ? "error" : null}`}/>

          <button type='submit' className='btn'> submit </button>   
      </form>
    </section>
    <section className='colors'>
      {list.map((colors , index) => {
        return(
          <App key={index} {...colors} hexcolor={colors.rgb} index={index}/>
        ) 
      })}
    </section>
    </>
  )
}









const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BaseApp/>
);
