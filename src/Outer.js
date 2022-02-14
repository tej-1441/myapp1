import React,{useState} from 'react'
import {useNavigate} from "react-router-dom";
import Timer from "./Timer";
import { toast } from 'react-toastify';
import './Outer.css';

function Outer() {
    const navigate=useNavigate();
    const[exactpassword,setExactpassword]=useState('V@1441ishnu');
    const[isfade,setIsfade]= useState(false);
    const[password,setPassword]=useState('');
    
    const handleChange=(event)=>{
        setPassword(event.target.value);
        // console.log(password);
    }

   const handleClick=()=>{
     if(password===exactpassword)
     {
         setTimeout(setIsfade(true),5000);
         setTimeout(navigate('/inner'),2000);
           
       }
       else
       {
        toast.error("wrong password", {
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
          });
       }
   }
  return (
    <div className='outer'>
         <div className='background__div'>
             <div className={`div1 ${isfade && "fadeout"}`}>
              <div className='div11'>

              </div>
             </div>
             <div className={`div2 ${isfade && "fadeout"}`}>
               <div className='div21'>
                <div className={`timer ${isfade && "fadeout"}`}>
                 <Timer />
                 <h4>Time Left</h4>
                </div>
               </div>
             </div>
         </div>
         {/* <div className='top__div'> */}
         <div className='data__feild'>
          <img className='data__image' src="https://cdn4.vectorstock.com/i/1000x1000/62/48/fingerprint-vector-2846248.jpg"></img>
          <h2 className='data__header'>enter your password</h2>
          <input className='data__input' type="password" name="password" onChange={handleChange} value={password} />
          <button onClick={handleClick} className="btn btn-outline-info outer__button">Enter</button>
        </div>
        {/* </div> */}
    </div>
  )
}

export default Outer