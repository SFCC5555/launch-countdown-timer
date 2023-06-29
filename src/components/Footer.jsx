import { useSelector } from 'react-redux';
import hills from '../assets/images/pattern-hills.svg';

const Footer = () => {

  const theme = useSelector(state=>state.theme);

  return (
    <div className={`flex items-end pb-10 justify-center gap-10 w-full h-48`}  style={{backgroundImage:`url(${hills})`}}>
      <a href='https://www.facebook.com/' target='_blank' rel='noreferrer'><span className={`w-6 h-6 facebook${theme}`} /></a>
      <a href='https://www.instagram.com/' target='_blank' rel='noreferrer'><span className={`w-6 h-6 instagram${theme}`} /></a>
      <a href='https://www.pinterest.com/' target='_blank' rel='noreferrer'><span className={`w-6 h-6 pinterest${theme}`} /></a>
    </div>
  )
}

export {Footer}