import React, { useEffect, useState } from 'react';
import './Timer.css';
import axios from 'axios';
const Timer=()=>{
    const [seconds,setseconds]=useState(5);
    const [minutes,setminutes]=useState(0);
    var timer;const event = new Event('ontimeover');
    useEffect(()=>{
        timer= setInterval(()=>{
        setseconds(seconds-1);
        if(seconds==0){setminutes(0);setseconds(0);}
            // if ( (Tim    er.seconds==0 && Timer.minutes==0)) 
            // {clearInterval(timer);}
        
    },1000)
return ()=> clearInterval(timer);
});

function finish(){return(
    axios.post("/api/quizzes/save-results", {
        currentUser: localStorage.getItem('_ID'),
        answers: this.state.answers,
        quizId: this.state.quiz._id}).then(res=>{if (res.data){
            
            this.props.history.push('/view-results?id=' + res.data.scoreId);}}));
            
}

//call the finish function when time is over
if(seconds==0 && minutes==0){finish();}
return(
    <div className='timer'>
    <div className='container'>
    <div className='time_container'>
    <div id='text'></div>
    <div id='numbers' ontimeover={clearInterval(timer)}>{minutes<10?"0"+minutes:minutes}:{seconds<10?'0'+seconds:seconds}</div>
    Test ends in 1min</div></div></div>
)}
 export default Timer;