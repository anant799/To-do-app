import React, { useState } from 'react';
import { useEffect } from 'react';
 
interface details{
    data:number;
}

const Clock=(props:details)=>{
    const {data}=props;
    const [days,setDays]=useState(Math.floor(data / (1000 * 60 * 60 * 24)));
    const [hours,sethours]=useState(Math.floor((data% (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const [mins,setmins]=useState(Math.floor((data% (1000 * 60 * 60)) / (1000 * 60)));
    const [secs,setsecs]=useState(Math.floor((data% (1000 * 60 )) / (1000 )));

    useEffect(()=>{
        let interval=setInterval(()=>{
           
           if(secs===0)
           {
               if(mins>0)
               {
                   setmins(mins-1);
                   setsecs(59);
               }
               else
               {
                if(hours>0)
                {
                    sethours(hours-1);
                    setmins(59);
                    setsecs(59);
                }
                else{
                    if(days===0)
                    clearInterval(interval);
                    else
                    {
                        setDays(days-1);
                    sethours(23);
                    setmins(59);
                    setsecs(59);
                    }
                }
               }
           }
           else
           setsecs(secs-1);
           },1000);
return ()=> {
    clearInterval(interval);
  };
    });
    return(
        <div className="item9">{days>0?`${days}D:`:''}{hours>0?`${hours}H:`:''}{mins>0?`${mins}M:`:''}{secs>0?`${secs}S`:''}</div>
    );
    
}


export default Clock;