import facebook from '../assets/images/icon-facebook.svg';
import instagram from '../assets/images/icon-instagram.svg';
import pinterest from '../assets/images/icon-pinterest.svg';

const Footer = () => {
  return (
    <div>
      <span style={{backgroundImage:`url(${facebook})`}}/>
      <span style={{backgroundImage:`url(${instagram})`}}/>
      <span style={{backgroundImage:`url(${pinterest})`}}/>
    </div>
  )
}

export {Footer}