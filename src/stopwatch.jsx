import React,{ useEffect, useState } from 'react'
import './swcss.css'

const Stopwatch = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);

    useEffect(() => {
      let interval;
      if(isRunning){
            interval=setInterval(()=>{
                setElapsedTime((prev)=> prev+10)
            },10)
      }
      else{
        clearInterval(interval)
      }
    
      return () => {
        clearInterval(interval)
      }
    }, [isRunning])

    const startStopWatch = () =>{
        setIsRunning (true);
        }
        const stopStopWatch = ()=>{
        setIsRunning(false);
        } 
        const resetStopWatch = () =>{
        setIsRunning(false);
        setElapsedTime(0);
        }
    
        const formatTime=()=>{
            const minutes=Math.floor(elapsedTime/60000);
            const seconds=Math.floor((elapsedTime%60000)/1000);
            const milliseconds=Math.floor((elapsedTime%1000)/10);

            return `${minutes}:${seconds<10?'0':" "}${seconds}:${milliseconds<10?'0':" "}${milliseconds}`
        }
    return (
        <section className="landing-section">
            <div className="row-container">
                <h1 className='landing-heading'>Stopwatch</h1>
                <h2 className='time-head'>{formatTime(elapsedTime)}</h2>
                <div className='d-flex justify-content-center'>
                    <button onClick={startStopWatch} className='btn'>
                        START
                    </button>
                    <button onClick={stopStopWatch} className='btn'>
                        STOP
                    </button>
                    <button onClick={resetStopWatch} className='btn'>
                        RESET
                    </button>
                </div> 
            </div>
        </section>
    );
};
export default Stopwatch;
