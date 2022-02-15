import React,{useState,useEffect} from 'react'
import {useNavigate} from "react-router-dom";
import Timer from "./Timer";
import { toast } from 'react-toastify';
import './Outer.css';

function Outer() {
    const navigate=useNavigate();
    const[exactpassword,setExactpassword]=useState('V@1441ishnu');
    const[isfade,setIsfade]= useState(false);
    const[password,setPassword]=useState('');
    useEffect(() => {
      setPassword('');
    }, [])
    const handleChange=(event)=>{
        setPassword(event.target.value);
    }

   const handleClick=()=>{
    //  setIsfade(true);
     if(password===exactpassword)
     {
        //  setPassword('');
         setIsfade(true);
        setTimeout(()=>{
          // setIsfade(true);
           navigate('/inner');
        },1900)
           
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
             <div className="div1">
              <div className={`div11 ${isfade && "fadeout1"}`}>

              </div>
             </div>
             <div className="div2">
               <div className={`div21 ${isfade && "fadeout2"}`}>
                <div className="timer">
                 <Timer />
                 <h4>Time Left</h4>
                </div>
               </div>
             </div>
         </div>
         {/* <div className='top__div'> */}
         <div className={`data__feild ${isfade && "torotate"}`}>
          <img className='data__image' src="https://cdn4.vectorstock.com/i/1000x1000/62/48/fingerprint-vector-2846248.jpg"></img>
          <h2 className='data__header'>enter your password</h2>
          <input className='data__input' type="password" name="password" onChange={handleChange} value={password} placeholder="eg.12356"/>
          <button onClick={handleClick} className="btn btn-outline-info outer__button">Enter</button>
        </div>
        {/* </div> */}
    </div>
  )
}

export default Outer