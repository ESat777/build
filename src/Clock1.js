import { useEffect, useState } from "react";
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';


function Clock1() {
    const [value, setValue] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setValue(new Date()), 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);

  return (
    
    <div>        
        <Clock size={450} 
         renderNumbers={true}
         hourMarksWidth={5}
         minuteMarksWidth= {4}
         minuteHandWidth={5}
         hourHandWidth={5} 
         secondHandWidth={5}
         value={value} 
         />
    </div>
  );
}

export default Clock1