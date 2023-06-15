import facebook from '../assets/images/icon-facebook.svg';
import instagram from '../assets/images/icon-instagram.svg';
import pinterest from '../assets/images/icon-pinterest.svg';
import hills from '../assets/images/pattern-hills.svg'

const Footer = () => {
  return (
    <div className='flex items-center justify-center gap-10 w-full h-48' style={{backgroundImage:`url(${hills})`}} >
      <a href='https://www.facebook.com/' target='_blank' rel='noreferrer'><span className='w-6 h-6' style={{backgroundImage:`url(${facebook})`}}/></a>
      <a href='https://www.instagram.com/' target='_blank' rel='noreferrer'><span className='w-6 h-6' style={{backgroundImage:`url(${instagram})`}}/></a>
      <a href='https://www.pinterest.com/' target='_blank' rel='noreferrer'><span className='w-6 h-6' style={{backgroundImage:`url(${pinterest})`}}/></a>
    </div>
  )
}

export {Footer}