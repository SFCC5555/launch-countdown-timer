import { useState } from 'react';
import data from '../data.json';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { changeLanguage } from '../redux/languageSlice';
import { changeTheme } from '../redux/themeSlice';
import '../styles/Button.scss'

const Button = ({concept,list}) => {

    const [menu,setMenu] = useState(false);

    const language = useSelector(state=>state.language);
    const theme = useSelector(state=>state.theme);

    const dispatch = useDispatch();

    function handleClick(e) {

        if (concept==='language') {
            dispatch(changeLanguage(e.target.id));
        } else if (concept==='theme') {
            dispatch(changeTheme(e.target.id));
        }

        setMenu(prev=>!prev);

    }

  return (
    <div className='flex flex-col items-center gap-2'>
        <button onClick={()=>setMenu(prev=>!prev)} className='w-32 px-3 py-1 rounded-md text-white text-sm opacity-80 hover:opacity-100 flex items-center justify-between gap-2' style={{backgroundColor:'var(--text)'}}>{data.language[language][concept]}
            {concept==='language'?<span className={`rounded-full w-4 h-4 ${language}Icon`}/>:
            <span className='rounded-full w-3 h-3' style={{backgroundColor:`var(--text${theme})`}} />}
        </button>
        {menu&&<section className="menu flex flex-col gap-2 text-xs text-white text-start w-32 rounded-md p-2" style={{backgroundColor:'var(--text)'}}>
            {
            list.map(i=><div onClick={handleClick} id={i} className='hover:opacity-75 cursor-pointer flex items-center justify-between' key={i}>{data.language[language][i.toLowerCase()]}<span id={i} className={`rounded-full ${concept==='language'?'w-3 h-3':'w-2 h-2'} ${concept==='language'&&i+'Icon'}`} style={{backgroundColor:`var(--text${i})`}} /></div>)
            }

        </section>}
    </div>

  )
}

Button.propTypes = {concept:PropTypes.string,list:PropTypes.array};

export {Button}