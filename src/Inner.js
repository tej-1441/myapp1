import React,{useEffect,useState,useRef} from 'react'
import Timer from './Timer';
import './Inner.css'
import {useNavigate} from "react-router-dom";
import {useStateValue} from './StateProvider';

function Inner() {
    
    const[{user,remaining},dispatch]=useStateValue();
    const navigate=useNavigate();
    const exitfromhere=()=>{
      navigate('/');
    }
     console.log(remaining);
    const Ref = useRef(null);
  
    // The state for our timer
    const [timer, setTimer] = useState(`${user}`);
    const [toadd,setToadd] = useState(0);
    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 * 60 * 60) % 24);
        return {
            total, hours, minutes, seconds
        };
    }
  
  
    const startTimer = (e) => {
        let { total, hours, minutes, seconds } 
                    = getTimeRemaining(e);
        if (total >= 0) {
  
            // update the timer
            // check if less than 10 then we need to 
            // add '0' at the begining of the variable
            setTimer(
                (hours > 9 ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }
        if(total==0){
          navigate('/');
        }
    }
  
  
    const clearTimer = (e) => {
  
        // If you adjust it you should also need to
        // adjust the Endtime formula we are about
        // to code next    
        setTimer(`${user}`);
  
        // If you try to remove this line the 
        // updating of timer Variable will be
        // after 1000ms or 1sec
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }
  
    const getDeadTime = () => {
        let deadline = new Date();
  
        // This is where you need to adjust if 
        // you entend to add more time
        deadline.setSeconds(deadline.getSeconds()+remaining);
        return deadline;
    }
  
    // We can use useEffect so that when the component
    // mount the timer will start as soon as possible
  
    // We put empty array to act as componentDid
    // mount only
    useEffect(()=>{
        dispatch({
            type:'SET_USER',
            user:timer,
            remaining:remaining-1
        })
    },[timer])

    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);



    return (

    <div className='inner'>
    <div className='inner__inner'>
    <div className='inner__timer'>
           {user}
       </div>
       <div className='inner__data'>
       <button onClick={exitfromhere} type="button" class="btn btn-outline-info inner__button">Exit</button>
       </div>
    </div>


    </div>
  )
}

export default Inner