import { useState } from "react"

const useStatus = (key,defaultValue) => {
  
  const [status,setStatus] = useState(defaultValue);

  const change = (e)=> {

    const newValue = e.target.id;

    setStatus(newValue);
    localStorage.setItem(key,JSON.stringify(newValue))

  }
  
  
    return {

        status,
        change 
  }
}

export {useStatus}