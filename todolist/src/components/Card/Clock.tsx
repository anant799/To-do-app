import React, { useState } from 'react';
import { useEffect } from 'react';
 
interface details{
    data:number;
}
const Clock = (props:details) => {
    // const {initialMinute = 0,initialSeconds = 0} = props;
    // const [ minutes, setMinutes ] = useState(120);
    const [seconds, setSeconds ] =  useState(120);
    useEffect(()=>{
    setInterval(() => {
            // if (seconds > 0) {
                setSeconds(seconds - 1);
            // }
            // if (seconds === 0) {
            //     if (minutes === 0) {
            //         clearInterval(myInterval)
            //     } else {
            //         setMinutes(minutes - 1);
            //         setSeconds(59);
            //     }
            // } 
        }, 1000)
        // return ()=> {
        //     clearInterval(myInterval);
        //   };
    });

    return (
        <div className="item9">{seconds}</div>
        // <div>
        // { 
        //    <h1> {seconds}</h1> 
        // }
        // </div>
    )
}

// const Clock=(props:details)=>{

//     const [timer,setTimer]=useState('');
//     const [distance,setDistance]=useState(1200000000);
//     const [days,setDays]=useState(1);
//     const [hours,setHours]=useState(1);
//     const [minutes,setMinutes]=useState(1);
//     const [seconds,setSeconds]=useState(1);
//     const [ans,setAns]=useState('');
//     useEffect(()=>{
//         setInterval(()=>{
      
//             setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
//             setHours(Math.floor((distance% (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//             setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
//             setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
                      
                   
//                    let anss='';
//                     setAns('');
//                     if(days>0)
//                     anss+=days+"d";
//                     // setAns(ans+days+"d");
                    
//                     if(hours>0)
//                     anss+=" "+hours+"h";
//                     // setAns(ans+hours+"d");
//                     // ans+=" "+hours+"h";
//                     if(minutes>0)
//                     anss+=" "+minutes+"m";
//                     // setAns(ans+minutes+"d");
//                     // ans+=" "+minutes+"m";
//                     if(seconds>0)
//                     anss+=" "+seconds+"s";
//                     // setAns(ans+seconds+"d");
//                     // ans+=" "+seconds+"s";
                    
//                     setAns("Starts In: "+anss);
//                     // ans="Starts In: "+ans;
//                     setDistance(distance-1);
//                     setTimer(ans);
                     
//            },1000);
//     });
    
//     return(
//         <div className="item9">{timer}</div>
//     );
// }

export default Clock;