import '../styles/Background.css';
import stars from '../assets/images/bg-stars.svg'

const Background = () => {
    
  return (
        <div className={`w-full h-screen top-0 -z-10 absolute background`}>
            <div className='w-full h-full' style={{backgroundImage: `url(${stars})`}} />
        </div>

  )
}

export {Background}