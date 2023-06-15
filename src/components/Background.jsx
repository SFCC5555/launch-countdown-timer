import '../styles/Background.css';
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import stars from '../assets/images/bg-stars.svg'

const Background = () => {

 const {theme} = useContext(AppContext);

 console.log(theme)
    
  return (
        <div className={`w-full h-screen top-0 -z-10 absolute background${theme.status}`}>
            <div className='w-full h-full' style={{backgroundImage: `url(${stars})`}} />
        </div>

  )
}

export {Background}